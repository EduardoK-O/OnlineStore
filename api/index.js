require("dotenv").config();
const express = require("express"),
  path = require("path"),
  app = express(),
  productoModel = require("./productos_model"),
  userModel= require("./users_model"),
  formidable = require("formidable"),
  fs = require("fs");
const {v4: uuidv4} = require("uuid");
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const randtoken = require('rand-token');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const refreshTokens = {};
const cors = require('Cors');
const conexion = require("./conexion");
const SECRET = 'VERY_SECRET_KEY!';
const passportOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET
};
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Content-Type, *" );
  res.header("Access-Control-Allow-Methods", "GET,,HEAD,PUT,POST,DELETE");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new JwtStrategy(passportOpts, function (jwtPayload, done) {
  const expirationDate = new Date(jwtPayload.exp * 1000);
  if(expirationDate < new Date()) {
    return done(null, false);
  }
  done(null, jwtPayload);
}))

passport.serializeUser(function (user, done) {
  done(null, user.username)
});

app.post('/signup', async (req,res)=>{
  const user = req.body;
  const respuesta = await userModel.insertar(user.name, user.username, user.password, user.rol);
  res.json(respuesta);
});





app.post('/login', function (req, res) { 
    
 
  let username = req.body.username;
  let password=req.body.password;
  

  
		conexion.query('SELECT username, password FROM users WHERE username = ? AND password= ?' , [username, password], function(error, results, fields) {
      console.log(results);
      if (results.length>0) {
        
        const user={
    
          "username": this.username,
          "password" : this.password
        }
       
        const token = jwt.sign(user, SECRET, { expiresIn: 600 }) 
        const refreshToken = randtoken.uid(256);
        refreshTokens[refreshToken] = username;
        res.json({jwt: token, refreshToken: refreshToken});



			} else {
        console.log("usuario incorrecto");
				res.sendStatus(403);
			}			
			
		});
	


});

app.post('/logout', function (req, res) { 
  
  const refreshToken = req.body.refreshToken;
  if (refreshToken in refreshTokens) { 
    delete refreshTokens[refreshToken];
  } 
  res.sendStatus(204); 
});

app.post('/refresh', function (req, res) {
    const refreshToken = req.body.refreshToken;
    

    if (refreshToken in refreshTokens) {
      const user = {
        'username': refreshTokens[refreshToken],
        'role': 'admin'
      }
      const token = jwt.sign(user, SECRET, { expiresIn: 600 });
      res.json({jwt: token})
    }
    else {
      res.sendStatus(401);
    }
});

app.get('/random', passport.authenticate('jwt'), function (req, res) {
  res.json({value: Math.floor(Math.random()*100) });
})

const indiceDeProducto = (carrito, idProducto) => {
  return carrito.findIndex(productoDentroDelCarrito => productoDentroDelCarrito.id === idProducto);
}
const existeProducto = (carrito, producto) => {
  return indiceDeProducto(carrito, producto.id) !== -1;
}



  DIRECTORIO_FOTOS = path.join(__dirname, "fotos_productos"),
  DIRECTORIO_DIST = path.join(__dirname, "dist"),
  PUERTO = 3000;

app.use(express.json())

// Fotos
app.use("/foto_producto", express.static(DIRECTORIO_FOTOS));
// Estático
app.use("/", express.static(DIRECTORIO_DIST));

if (!fs.existsSync(DIRECTORIO_FOTOS)) {
  fs.mkdirSync(DIRECTORIO_FOTOS);
}

app.delete("/producto", async (req, res) => {

  if (!req.query.id) {
    res.end("Not found");
    return;
  }
  const idProducto = req.query.id;
  await productoModel.eliminar(idProducto);
  res.json(true);
});
//Todo: separar rutas





app.post('/fotos_producto', (req, res) => {
  const form = formidable({
    multiples: true,
    uploadDir: DIRECTORIO_FOTOS,
  });

  form.parse(req, async (err, fields, files) => {
    const idProducto = fields.idProducto;
    for (let clave in files) {
      const file = files[clave];
      const nombreArchivo = file.name;
      await productoModel.agregarFoto(idProducto, nombreArchivo)
    }
  });

  form.on("fileBegin", (name, file) => {
    const extension = path.extname(file.name);
    const nuevoNombre = uuidv4().concat(extension);
    file.path = path.join(DIRECTORIO_FOTOS, nuevoNombre);
    file.name = nuevoNombre;
  })

  form.on("end", () => {
    res.json({
      respuesta: true,
    })
  })

});

app.post('/producto', async (req, res) => {
  
  const producto = req.body;
  const respuesta = await productoModel.insertar(producto.nombre, producto.descripcion, producto.precio);
  res.json(respuesta);
});



app.get('/productos', async (req, res) => {
  const productos = await productoModel.obtener();
  res.json(productos);
});
app.get('/productos_con_fotos', async (req, res) => {
  const productos = await productoModel.obtenerConFotos();
  res.json({ "shopping_results" : productos});
});

app.get('/producto/:id', async (req, res) => {
  if (!req.params.id) {
    res.end("not found");
    return;
  }
  const producto = await productoModel.obtenerPorId(req.params.id);
  producto.fotos = await productoModel.obtenerFotos(req.params.id);
  res.json({"producto" : producto});
});

app.get('/images/:id', async (req, res) => {
  res.sendFile(path.join(DIRECTORIO_FOTOS, req.params.id));
});

app.listen(PUERTO, err => {
  if (err) {
    // Aquí manejar el error
    console.error("Error escuchando: ", err);
    return;
  }

  console.log(`Escuchando en el puerto :${PUERTO}`);
});
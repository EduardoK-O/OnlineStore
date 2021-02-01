

import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {Producto} from "src/app/services/Producto/producto"
import {Router} from "@angular/router";
import { ProductosService } from 'src/app/services/productos/productos.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public productos = [];
  public columnas = ['nombre', 'descripcion', 'precio', 'eliminar'];

  constructor(public dialog: MatDialog, private router: Router, private productosService: ProductosService) {
  }

  async eliminar(producto) {
    if (!confirm("¿Realmente lo quieres eliminar?")) {
      return;
    }
    await this.productosService.eliminarProducto(producto.id);
    await this.obtenerProductos();
  }

  async ngOnInit() {
    await this.obtenerProductos();
  }

  async obtenerProductos() {
    this.productos = await this.productosService.obtenerProductos();
  }

  navegarAFormulario() {
    this.router.navigateByUrl("/productos/agregar");
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverview, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}



@Component({
  selector: 'dialog-overview',
  templateUrl: 'dialog-overview.html',
  styles: ['.full-width { width:100% } ']
})
export class DialogOverview {
  productoModel = new Producto("", "",);
  @ViewChild("foto", {
    read: ElementRef
  }) foto: ElementRef;

  constructor(private router: Router, public dialogRef: MatDialogRef<DialogOverview>,
    private productosService: ProductosService, private snackBar: MatSnackBar) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  nombreFormControl = new FormControl('', [
    Validators.required
  ]);

  descripcionFormControl = new FormControl('', [
    Validators.required
  ]);

  precioFormControl = new FormControl('', [
    Validators.required
  ]);

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }

  public cargando = false;

  async guardar() {
    if (!this.productoModel.nombre) {
      return alert("Escribe un nombre");
    }
    if (!this.productoModel.descripcion) {
      return alert("Escribe la descripción");
    }
    if (!this.productoModel.precio) {
      return alert("Escribe el precio");
    }
    let archivos = this.foto.nativeElement.files;
    if (!archivos.length) {
      return alert("Selecciona al menos una foto");
    }
    this.dialogRef.close();
    this.cargando = true;
    // Guardamos producto
    const idProductoGuardado = await this.productosService.agregarProducto(this.productoModel);
    // Y luego las fotos
    const fd = new FormData();
    for (let x = 0; x < archivos.length; x++) {
      fd.append(`foto_${x}`, archivos[x])
    }
    fd.append("idProducto", idProductoGuardado);
    const respuesta = await this.productosService.agregarFotosDeProducto(fd);
    this.snackBar.open("Producto guardado", "", {
      duration: 1500,
      horizontalPosition: "start",
      verticalPosition: "top",
    });

    this.cargando = false;
    this.productoModel = new Producto("", "");
    this.foto.nativeElement.value = "";
    this.redirectTo('/productos');
  }

}

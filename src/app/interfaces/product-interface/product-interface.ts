export interface ProductInterface {
  producto: {
    "id": number,
    "nombre": string,
    "descripcion": string,
    "precio": number,
    "fotos": Array<
      {
        "id_producto": number,
        "foto": string
      }
    >
  }
}

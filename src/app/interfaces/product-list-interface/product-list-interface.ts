export interface ProductListInterface {
  "shopping_results": Array<
    {
      "title": string,
      "link": string,
      "price": number,
      "price_raw": string,
      "merchant": number,
      "snippet": string,
      "id": string,
      "image": string,
      "position": number
    }
  >
}

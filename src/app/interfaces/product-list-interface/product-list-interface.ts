export interface ProductListInterface {
  "shopping_results": Array<
    {
      "position": number,
      "title": string,
      "link": string,
      "product_id": string,
      "serpapi_product_api": string,
      "source": string,
      "price": string,
      "extracted_price": number,
      "rating": number,
      "reviews": number,
      "snippet": string
    }
  >
}

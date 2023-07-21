import {
  Product,
  ProductsResponse,
  Category,
} from "../../domain/models/products";

export const transformAllProducts = (data: {
  results: Product[];
}): ProductsResponse => {
  const categories: { [key: string]: Category } = {};

  data.results.forEach((product) => {
    const categoryUuid = product.category.uuid;

    if (!categories[categoryUuid]) {
      categories[categoryUuid] = {
        ...product.category,
        products: [],
      };
    }

    categories[categoryUuid].products.push(product);
  });

  return Object.values(categories);
};

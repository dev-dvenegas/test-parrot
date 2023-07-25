import { productsService } from "../domain/services/service/productsService";
import { productsRepository } from "../domain/services/repositories/productsRepository";
import {
  ProductsResponse,
  UpdateProductRequest,
  UpdateProductResponse,
} from "../domain/models/products";

jest.mock("../domain/services/repositories/productsRepository");

describe("productsService", () => {
  const mockProductsResponse: ProductsResponse = [
    {
      uuid: "test",
      name: "test",
      sortPosition: 1,
      products: [
        {
          uuid: "test",
          name: "test",
          description: "test",
          imageUrl: "test",
          legacyId: "test",
          price: "test",
          alcoholCount: 1,
          soldAlone: true,
          availability: "AVAILABLE",
          providerAvailability: null,
          category: {
            uuid: "test",
            name: "test",
            sortPosition: 1,
            products: [],
          },
        },
      ],
    },
  ];
  const mockUpdateProductRequest: UpdateProductRequest = {
    availability: "AVAILABLE",
    productId: "test",
  };
  const mockUpdateProductResponse: UpdateProductResponse = {
    result: {
      uuid: "test",
      name: "test",
      description: "test",
      imageUrl: "test",
      legacyId: "test",
      price: "test",
      alcoholCount: 1,
      soldAlone: true,
      availability: "AVAILABLE",
      providerAvailability: null,
      category: {
        uuid: "test",
        name: "test",
        sortPosition: 1,
        products: [],
      },
    },
    status: "test",
  };

  beforeEach(() => {
    (productsRepository.getProducts as jest.Mock).mockResolvedValue(
      mockProductsResponse,
    );
    (
      productsRepository.updateProductAvailability as jest.Mock
    ).mockResolvedValue(mockUpdateProductResponse);
  });

  it("should call the getProducts method from productsRepository with the correct storeId", async () => {
    const result = await productsService.getProducts("test");
    expect(productsRepository.getProducts).toHaveBeenCalledWith("test");
    expect(result).toEqual(mockProductsResponse);
  });

  it("should call the updateProductAvailability method from productsRepository with the correct payload", async () => {
    const result = await productsService.updateProductAvailability(
      mockUpdateProductRequest,
    );
    expect(productsRepository.updateProductAvailability).toHaveBeenCalledWith(
      mockUpdateProductRequest,
    );
    expect(result).toEqual(mockUpdateProductResponse);
  });
});

import { storeService } from "../domain/services/service/storeService";
import { storeRepository } from "../domain/services/repositories/storeRepository";
import { StoreResponse } from "../domain/models/storeParrot";

jest.mock("../domain/services/repositories/storeRepository");

describe("storeService", () => {
  const mockStoreResponse: StoreResponse = {
    result: {
      uuid: "test",
      email: "test@test.com",
      stores: [],
      username: "test",
    },
  };

  beforeEach(() => {
    (storeRepository.getStores as jest.Mock).mockResolvedValue(
      mockStoreResponse,
    );
  });

  it("should call the getStores method from storeRepository", async () => {
    const result = await storeService.getStores();
    expect(storeRepository.getStores).toHaveBeenCalled();
    expect(result).toEqual(mockStoreResponse);
  });
});

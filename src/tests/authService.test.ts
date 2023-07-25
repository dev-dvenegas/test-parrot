import { describe, expect } from "@jest/globals";
import { authService } from "../domain/services/service/authService";
import { authRepository } from "../domain/services/repositories/authRepository";
import {
  LoginPayload,
  RefreshTokenPayload,
  TokenResponse,
} from "../domain/models/login";

jest.mock("../domain/services/repositories/authRepository");

describe("authService", () => {
  const mockLoginPayload: LoginPayload = { username: "test", password: "test" };
  const mockRefreshTokenPayload: RefreshTokenPayload = { refresh: "test" };
  const mockTokenResponse: TokenResponse = { access: "test", refresh: "test" };

  beforeEach(() => {
    (authRepository.login as jest.Mock).mockResolvedValue(mockTokenResponse);
    (authRepository.refreshToken as jest.Mock).mockResolvedValue(
      mockTokenResponse,
    );
  });

  it("should call the login method from authRepository with the correct payload", async () => {
    const result = await authService.login(mockLoginPayload);
    expect(authRepository.login).toHaveBeenCalledWith(
      JSON.stringify(mockLoginPayload),
    );
    expect(result).toEqual(mockTokenResponse);
  });

  it("should call the refreshToken method from authRepository with the correct payload", async () => {
    const result = await authService.refreshToken(mockRefreshTokenPayload);
    expect(authRepository.refreshToken).toHaveBeenCalledWith(
      JSON.stringify(mockRefreshTokenPayload),
    );
    expect(result).toEqual(mockTokenResponse);
  });
});

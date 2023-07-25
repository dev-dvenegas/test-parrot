import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { LoginPayload, RefreshTokenPayload } from "../domain/models/login";
import { authService } from "../domain/services/service/authService";
import {
  loginAction,
  refreshTokenAction,
} from "../features/login/loginActions";

jest.mock("../domain/services/service/authService");

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("auth actions", () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it("dispatches loginSuccess after successful login", async () => {
    const mockLoginPayload: LoginPayload = {
      username: "test",
      password: "test",
    };
    const mockTokenResponse = {
      access: "access_token",
      refresh: "refresh_token",
    };

    (authService.login as jest.Mock).mockResolvedValue(mockTokenResponse);

    await store.dispatch(loginAction(mockLoginPayload));

    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: "login/fetchStart" });
    expect(actions[1]).toEqual({
      type: "login/loginSuccess",
      payload: mockTokenResponse,
    });
  });

  it("dispatches refreshToken after successful token refresh", async () => {
    const mockRefreshTokenPayload: RefreshTokenPayload = {
      refresh: "refresh_token",
    };
    const mockTokenResponse = {
      access: "new_access_token",
      refresh: "new_refresh_token",
    };

    (authService.refreshToken as jest.Mock).mockResolvedValue(
      mockTokenResponse,
    );

    await store.dispatch(refreshTokenAction(mockRefreshTokenPayload));

    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: "login/fetchStart" });
    expect(actions[1]).toEqual({
      type: "login/refreshToken",
      payload: mockTokenResponse,
    });
  });
});

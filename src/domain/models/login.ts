export interface LoginPayload {
  username: string;
  password: string;
}

export interface RefreshTokenPayload {
  refresh: string;
}

export interface TokenResponse {
  access: string;
  refresh: string;
}

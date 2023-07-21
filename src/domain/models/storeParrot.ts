export interface StoreParrot {
  uuid: string;
  name: string;
  availabilityState: string;
  providers: [];
  config: {
    brandColor: string;
  };
  secret: string;
  legacyId: string | null;
  organizationUuid: string;
}

export interface StoreResponse {
  result: {
    uuid: string;
    email: string;
    stores: StoreParrot[];
    username: string;
  };
}

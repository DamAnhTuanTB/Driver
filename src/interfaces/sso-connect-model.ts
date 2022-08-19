export interface IConnectConfiguration {
  properties: {
    namespace: string;
    redirectUri: string;
    iconUri: string;
    thirdParty: boolean;
    scopes: Array<string>;
  };
  authType: string;
  name: string;
  merchantId: string;
  clientId: string;
  clientSecret: string;
  state: string;
  webConnect: string;
}

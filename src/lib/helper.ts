import { getConnectConfiguration } from 'constaints.ts/setel-connect-configuration';

export const redirectConsentPageToLogin = () => {
  const environment: string = process.env.REACT_APP_ENVIRONMENT as string;
  const setelConfig = getConnectConfiguration(environment);
  const dataConnect = {
    response_type: 'code',
    client_id: setelConfig?.clientId,
    redirect_uri: setelConfig?.properties?.redirectUri,
    scope: setelConfig?.properties?.scopes[0],
    webConnect: setelConfig?.webConnect,
    state: setelConfig?.state,
    mode: 'miniapp',
  };
  window.location.assign(
    `${dataConnect.webConnect}/authorize?response_type=${
      dataConnect.response_type
    }&client_id=${dataConnect.client_id}&redirect_uri=${
      dataConnect.redirect_uri
    }&scope=${dataConnect.scope}&state=${dataConnect.state}${
      isWebview() ? `&mode=${dataConnect.mode}` : ''
    }`
  );
};

export const isWebview = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  const safari = /safari/.test(userAgent);
  const ios = /iphone|ipod|ipad/.test(userAgent);
  const isAndroidWebView = !ios && navigator.userAgent.includes('wv');
  const isIOSWebView = ios && !safari;
  return isAndroidWebView || isIOSWebView;
};

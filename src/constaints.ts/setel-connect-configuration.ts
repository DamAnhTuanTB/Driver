import { IConnectConfiguration } from 'interfaces/sso-connect-model';
import { ENV_DEVELOPMENT, ENV_PRODUCTION, ENV_STAGING } from './constants';

//template SSO config

export const CONNECT_CONFIGURATION = {
    dev: {
        properties: {
            namespace: 'setel-customers',
            redirectUri: `${window.location.origin}/oauth/callback/`,
            iconUri: 'https://v.fastcdn.co/u/b7d6f2cf/55514001-0-Logistika-newred-log.png',
            thirdParty: true,
            scopes: ['user_info_read_scope'],
        },
        authType: 'oAuth',
        name: 'setel-express-receiver-dev',
        merchantId: '6178f48f703d200012e63a6b',
        clientId: '28745e06274041f6c3e6fe50f37fd033',
        clientSecret: 'dc37dd60b8278d9a00afba8efd87c8c49da9cc02caadf3d0ca17a76669b88a63',
        state: 'dev-tracking',
        webConnect: 'https://sandbox-connect.setel.my',
    },
    devWithoutSandbox: {
        properties: {
            namespace: 'setel-customers',
            redirectUri: `${window.location.origin}/oauth/callback/`,
            iconUri: 'https://v.fastcdn.co/u/b7d6f2cf/55514001-0-Logistika-newred-log.png',
            thirdParty: true,
            scopes: ['user_info_read_scope'],
        },
        authType: 'oAuth',
        name: 'setel-express-receiver-devWithoutSandbox',
        merchantId: '6178f48f703d200012e63a6b',
        clientId: '46a9596e7408c6c0cdccfad40d005321',
        clientSecret: 'ac721500d81151fe376c6a39fab1a5fdb1b13080689de225b4d6ffc5bf801841',
        state: 'dev-tracking',
        webConnect: 'https://dev-connect.setel.my',
    },
    staging: {
        properties: {
            namespace: 'setel-customers',
            redirectUri: `${window.location.origin}/oauth/callback/`,
            iconUri: 'https://v.fastcdn.co/u/b7d6f2cf/55514001-0-Logistika-newred-log.png',
            thirdParty: true,
            scopes: ['user_info_read_scope'],
        },
        authType: 'oAuth',
        name: 'setel-express-receiver-staging-',
        merchantId: '6178f48f703d200012e63a6b',
        clientId: '96b51cf809aaf910d4ece5fa79bb8bbe',
        clientSecret: '714bc1221b3b14f064cdf4c899fe84eff49b82238462c60df2d69a7be15eca50',
        state: 'staging-tracking',
        webConnect: 'https://staging-connect.setel.my',
    },
    local: {
        properties: {
            namespace: 'setel-customers',
            redirectUri: `${window.location.origin}/oauth/callback/`,
            iconUri: 'https://v.fastcdn.co/u/b7d6f2cf/55514001-0-Logistika-newred-log.png',
            thirdParty: true,
            scopes: ['user_info_read_scope'],
        },
        authType: 'oAuth',
        name: 'setel-express-receiver-local',
        merchantId: '6178f48f703d200012e63a6b',
        clientId: '46a9596e7408c6c0cdccfad40d005321',
        clientSecret: 'ac721500d81151fe376c6a39fab1a5fdb1b13080689de225b4d6ffc5bf801841',
        state: 'local-tracking',
        webConnect: 'https://dev-connect.setel.my',
    },
    prod: {
        properties: {
            namespace: 'setel-customers',
            redirectUri: `${window.location.origin}/oauth/callback/`,
            iconUri: 'https://track.setel.com/setel-express-logo.png',
            thirdParty: true,
            scopes: ['user_info_read_scope'],
        },
        authType: 'oAuth',
        name: 'setel-express-receiver',
        merchantId: '6178f48f703d200012e63a6b',
        clientId: '6aaf75d711490278b713df428e3b879d',
        clientSecret: '"*******"',
        state: 'prod-tracking',
        webConnect: 'https://connect.setel.my',
    },
};

export const getConnectConfiguration = (environment: string): IConnectConfiguration => {
    switch (environment) {
        case ENV_PRODUCTION:
            return CONNECT_CONFIGURATION.prod;
        case ENV_DEVELOPMENT:
            return CONNECT_CONFIGURATION.devWithoutSandbox;
        case ENV_STAGING:
            return CONNECT_CONFIGURATION.staging;
        default:
            return CONNECT_CONFIGURATION.local;
    }
};

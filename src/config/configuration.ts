export default () => ({
    kc: {
        baseUrl: process.env.KC_BASE_URL || 'http://localhost:8080',
        realm: process.env.KC_REALM || 'demo',
        clientId: process.env.KC_CLIENT_ID || 'nest-demo',
        clientSecret: process.env.KC_CLIENT_SECRET || 'P0bZJ0zcRiszksn4sCaNSRCBut3kRm0N',
    }
});

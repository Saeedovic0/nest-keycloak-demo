import { Injectable } from '@nestjs/common';
import {
    KeycloakConnectOptions,
    KeycloakConnectOptionsFactory,
    PolicyEnforcementMode,
    TokenValidation
} from 'nest-keycloak-connect';

@Injectable()
export class KeycloakConfigService implements KeycloakConnectOptionsFactory {

    createKeycloakConnectOptions(): KeycloakConnectOptions {
        return {
            authServerUrl: 'http://localhost:8080',
            realm: 'demo',
            clientId: 'nest-demo',
            secret: 'P0bZJ0zcRiszksn4sCaNSRCBut3kRm0N',
            cookieKey: 'KEYCLOAK_JWT',
            logLevels: ['verbose'],
            useNestLogger: true,
            policyEnforcement: PolicyEnforcementMode.PERMISSIVE,
            tokenValidation: TokenValidation.ONLINE,
        };
    }
}

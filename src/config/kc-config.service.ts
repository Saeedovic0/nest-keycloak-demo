import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
    KeycloakConnectOptions,
    KeycloakConnectOptionsFactory,
    PolicyEnforcementMode,
    TokenValidation
} from 'nest-keycloak-connect';

@Injectable()
export class KeycloakConfigService implements KeycloakConnectOptionsFactory {

    constructor(private readonly configService: ConfigService) { }

    createKeycloakConnectOptions(): KeycloakConnectOptions {
        return {
            authServerUrl: this.configService.getOrThrow<string>('kc.baseUrl'),
            realm: this.configService.getOrThrow<string>('kc.realm'),
            clientId: this.configService.getOrThrow<string>('kc.clientId'),
            secret: this.configService.getOrThrow<string>('kc.clientSecret'),
            cookieKey: 'KEYCLOAK_JWT',
            logLevels: ['verbose'],
            useNestLogger: true,
            policyEnforcement: PolicyEnforcementMode.PERMISSIVE,
            tokenValidation: TokenValidation.ONLINE,
        };
    }
}

import { Module } from '@nestjs/common';
import { KeycloakConfigService } from './kc-config.service';

@Module({
    providers: [KeycloakConfigService],
    exports: [KeycloakConfigService],
})
export class KeycloakConfigModule { }

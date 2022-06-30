import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { ProfileModule } from './profile.module';

const bootstrap = async (): Promise<void> => {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(ProfileModule, {
        transport: Transport.TCP,
    });
    await app.listen();
};
void bootstrap();

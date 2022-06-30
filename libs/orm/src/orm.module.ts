import { Module } from '@nestjs/common';

import { OrmService } from './orm.service';

@Module({
    exports: [OrmService],
    providers: [OrmService],
})
export class OrmModule {}

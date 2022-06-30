import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { from, Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @MessagePattern('createAuth')
    create(@Payload() createAuthDto: CreateAuthDto): string {
        return this.authService.create(createAuthDto);
    }

    @MessagePattern('findAllAuth')
    findAll(): string {
        return this.authService.findAll();
    }

    @MessagePattern('findOneAuth')
    findOne(@Payload() id: number): string {
        return this.authService.findOne(id);
    }

    @MessagePattern('updateAuth')
    update(@Payload() updateAuthDto: UpdateAuthDto): string {
        return this.authService.update(updateAuthDto.id, updateAuthDto);
    }

    @MessagePattern('removeAuth')
    remove(@Payload() id: number): string {
        return this.authService.remove(id);
    }

    @MessagePattern({ cmd: 'sum' })
    async accumulate(data: number[]): Promise<number> {
        return await Promise.resolve((data || []).reduce((a, b) => a + b));
    }

    @MessagePattern({ cmd: 'sum$' })
    accumulate$(data: number[]): Observable<number> {
        return from(data || [1, 2, 3]);
    }

    @EventPattern('user_created')
    async handleUserCreated(data: Record<string, unknown>): Promise<void> {
        // business logic
        await Promise.resolve(data);
    }
}

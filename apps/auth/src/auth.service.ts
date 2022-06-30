import { Injectable } from '@nestjs/common';

import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
    create(createAuthDto: CreateAuthDto): string {
        return 'This action adds a new Auth';
    }

    findAll(): string {
        return `This action returns all Auth`;
    }

    findOne(id: number): string {
        return `This action returns a #${id} Auth`;
    }

    update(id: number, updateAuthDto: UpdateAuthDto): string {
        return `This action updates a #${id} Auth`;
    }

    remove(id: number): string {
        return `This action removes a #${id} Auth`;
    }
}

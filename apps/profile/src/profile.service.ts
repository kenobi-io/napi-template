import { CreateProfileDto, UpdateProfileDto } from '@core-template';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService {
    create(createProfileDto: CreateProfileDto): string {
        return 'This action adds a new profile';
    }

    findAll(): string {
        return `This action returns all profile`;
    }

    findOne(id: number): string {
        return `This action returns a #${id} profile`;
    }

    update(id: number, updateProfileDto: UpdateProfileDto): string {
        return `This action updates a #${id} profile`;
    }

    remove(id: number): string {
        return `This action removes a #${id} profile`;
    }
}

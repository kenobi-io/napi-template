import { CreateProfileDto, UpdateProfileDto } from '@core-template';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { ProfileService } from './profile.service';

@Controller()
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

    @MessagePattern('createProfile')
    create(@Payload() createProfileDto: CreateProfileDto): string {
        return this.profileService.create(createProfileDto);
    }

    @MessagePattern('findAllProfile')
    findAll(): string {
        return this.profileService.findAll();
    }

    @MessagePattern('findOneProfile')
    findOne(@Payload() id: number): string {
        return this.profileService.findOne(id);
    }

    @MessagePattern('updateProfile')
    update(@Payload() updateProfileDto: UpdateProfileDto): string {
        return this.profileService.update(updateProfileDto.id, updateProfileDto);
    }

    @MessagePattern('removeProfile')
    remove(@Payload() id: number): string {
        return this.profileService.remove(id);
    }
}

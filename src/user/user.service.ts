import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './create-user.dto';
import { User, UserDocument } from './user.schema';
import { UpdateUserDto } from './update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await new this.userModel(createUserDto);

    return user.save();
  }

  async findOne(userId: string) {
    const user = await this.userModel.findById(userId).exec();

    if (!user) {
      throw new NotFoundException('User not found.');
    }

    return user;
  }

  async update(userId: string, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.findByIdAndUpdate(userId, updateUserDto);

    if (!user) {
      throw new NotFoundException('User not found.');
    }

    return { message: 'Update user success.' };
  }
}

import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/users.interface';
import { UsersInput } from './inputs/users.input';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: UsersInput): Promise<User> {
    const createUser = new this.userModel(createUserDto);
    return await createUser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOne(id:string){
    return await this.userModel.findOne( {_id : id })
  }

  async update(id:string,updateUserDto: UsersInput){
    return await this.userModel.updateOne({_id : id},updateUserDto);
  }

  async delete(id:string){
    await this.userModel.deleteOne({_id :id});
  }

  async findOneByEmail(email:string){
    return await this.userModel.findOne({ "email" : email })
  }

  

}
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Transporter } from './interfaces/transporters.interface';
import { TransportersInput, UpdateTransportersInput } from './inputs/transporters.input';

@Injectable()
export class TransporterService {
  constructor(@InjectModel('Transporter') private readonly TransporterModel: Model<Transporter>) {}

  async create(createTransporterDto: TransportersInput): Promise<Transporter> {
    const createTransporter = new this.TransporterModel(createTransporterDto);
    return await createTransporter.save();
  }

  async findAll(): Promise<Transporter[]> {
    return await this.TransporterModel.find().exec();
  }

  async findOne(id:string){
    return await this.TransporterModel.findOne( {_id : id })
  }

  async update(id:string,updateTransporterDto: UpdateTransportersInput){
    return await this.TransporterModel.updateOne({_id : id},updateTransporterDto);
  }

  async delete(id:string){
    await this.TransporterModel.deleteOne({_id :id});
  }

 
}
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Transportation } from './interfaces/transportation.interface';
import { TransportationsInput, UpdateTransportationsInput } from './inputs/transportation.input';

@Injectable()
export class TransportationsService {
  constructor(@InjectModel('Transportations') private readonly TransporterModel: Model<Transportation>) {}

  async create(createTransporterDto: TransportationsInput): Promise<Transportation> {
    const createTransporter = new this.TransporterModel(createTransporterDto);
    return await createTransporter.save();
  }

  async findAll(): Promise<Transportation[]> {
    return await this.TransporterModel.find().exec();
  }

  async findOne(id:string){
    return await this.TransporterModel.findOne( {_id : id })
  }

  async update(id:string,updateTransporterDto: UpdateTransportationsInput){
    return await this.TransporterModel.updateOne({_id : id},updateTransporterDto);
  }

  async delete(id:string){
    await this.TransporterModel.deleteOne({_id :id});
  }

  async findOneByDonation(id:string){
    return await this.TransporterModel.findOne( { "donation" : id })
  }

 
}
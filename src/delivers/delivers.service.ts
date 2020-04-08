import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Deliver } from './interfaces/delivers.interface';
import { DeliversInput, UpdateDeliversInput } from './inputs/delivers.input';

@Injectable()
export class DeliversService {
  constructor(@InjectModel('Delivers') private readonly DeliversModel: Model<Deliver>) {}

  async create(createDto: DeliversInput): Promise<Deliver> {
    const create = new this.DeliversModel(createDto);
    return await create.save();
  }

  async findAll(): Promise<Deliver[]> {
    //console.log("donations",await this.DeliversModel.find().populate('donationPlace').populate('need').exec())
    return await this.DeliversModel.find().populate('donationPlace').populate('need').populate('donation').exec();
  }

  async findBydonationPlace(donationPlace:string): Promise<Deliver[]> {
    return await this.DeliversModel.find({donationPlace}).populate('donationPlace').populate('need').populate('donation').exec();
  }

  async findOne(id:string){
    return await this.DeliversModel.findOne( {_id : id })
  }

  async update(id:string,updateDto: UpdateDeliversInput){
    return await this.DeliversModel.updateOne({_id : id},updateDto);
  }

  async delete(id:string){
    await this.DeliversModel.deleteOne({_id :id});
  }

  
}
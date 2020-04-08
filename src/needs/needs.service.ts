import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Need } from './interfaces/needs.interface';
import { NeedsInput, UpdateNeedsInput } from './inputs/needs.input';

@Injectable()
export class NeedsService {
  constructor(@InjectModel('Need') private readonly NeedModel: Model<Need>) {}

  async create(createDto: NeedsInput): Promise<Need> {
    const create = new this.NeedModel(createDto);
    return await create.save();
  }

  async findAll(): Promise<Need[]> {
    return await this.NeedModel.find().exec();
  }

  async findBydonationPlace(donationPlace:string): Promise<Need[]> {
    return await this.NeedModel.find({donationPlace}).exec();
  }

  async findOne(id:string){
    return await this.NeedModel.findOne( {_id : id })
  }

  async update(id:string,updateCityDto: UpdateNeedsInput){
    return await this.NeedModel.updateOne({_id : id},updateCityDto);
  }

  async delete(id:string){
    await this.NeedModel.deleteOne({_id :id});
  }

  async findOneByDocumentNumber(documentNumber:string){
    //console.log( await this.NeedModel.findOne({documentNumber,state:"IN_DELIVER"}) )
    return await this.NeedModel.findOne({documentNumber,state:"IN_DELIVER"});
  }

 
}
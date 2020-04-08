import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DonationPlace } from './interfaces/donationPlaces.interface';
import { DonationPlacesInput, UpdateDonationPlacesInput } from './inputs/donationPlaces.input';

@Injectable()
export class DonationPlacesService {
  constructor(@InjectModel('DonationPlaces') private readonly DonationPlacesModel: Model<DonationPlace>) {}

  async create(createDto: DonationPlacesInput): Promise<DonationPlace> {
    const create = new this.DonationPlacesModel(createDto);
    return await create.save();
  }

  async findAll(): Promise<DonationPlace[]> {
    return await this.DonationPlacesModel.find().exec();
  }

  async findOne(id:string){
    return await this.DonationPlacesModel.findOne( {_id : id })
  }

  async update(id:string,updateDto: UpdateDonationPlacesInput){
    return await this.DonationPlacesModel.updateOne({_id : id},updateDto);
  }

  async delete(id:string){
    await this.DonationPlacesModel.deleteOne({_id :id});
  }

  
}
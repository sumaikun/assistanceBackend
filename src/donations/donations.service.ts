import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Donation } from './interfaces/donations.interface';
import { DonationsInput, UpdateDonationsInput } from './inputs/donations.input';

@Injectable()
export class DonationsService {
  constructor(@InjectModel('Donations') private readonly DonationsModel: Model<Donation>) {}

  async create(createDto: DonationsInput): Promise<Donation> {
    const create = new this.DonationsModel(createDto);
    return await create.save();
  }

  async findAll(): Promise<Donation[]> {
    //console.log("donations",await this.DonationsModel.find().populate('donationPlace').populate('need').exec())
    return await this.DonationsModel.find().populate('donationPlace').populate('need').exec();
  }

  async findBydonationPlace(donationPlace:string): Promise<Donation[]> {
    return await this.DonationsModel.find({donationPlace}).populate('donationPlace').populate('need').exec();
  }

  async findOne(id:string){
    return await this.DonationsModel.findOne( {_id : id })
  }

  async findOneByNeed(id:string){
    return await this.DonationsModel.findOne( {need : id })
  }

  async update(id:string,updateDto: UpdateDonationsInput){
    return await this.DonationsModel.updateOne({_id : id},updateDto);
  }

  async delete(id:string){
    await this.DonationsModel.deleteOne({_id :id});
  }

  
}
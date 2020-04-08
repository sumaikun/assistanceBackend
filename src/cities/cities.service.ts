import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { City } from './interfaces/cities.interfaces';
import { CitiesInput, UpdateCitiesInput } from './inputs/cities.input';

@Injectable()
export class CitiesService {
  constructor(@InjectModel('City') private readonly CityModel: Model<City>) {}

  async create(createCityDto: CitiesInput): Promise<City> {
    const createCity = new this.CityModel(createCityDto);
    return await createCity.save();
  }

  async findAll(): Promise<City[]> {
    return await this.CityModel.find().exec();
  }

  async findOne(id:string){
    return await this.CityModel.findOne( {_id : id })
  }

  async update(id:string,updateCityDto: UpdateCitiesInput){
    return await this.CityModel.updateOne({_id : id},updateCityDto);
  }

  async delete(id:string){
    await this.CityModel.deleteOne({_id :id});
  }

 
}
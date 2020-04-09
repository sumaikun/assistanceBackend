import * as mongoose from 'mongoose'

export const DonationPlacesSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        unique:true
    },
    address: {
        type:String,
        required:true,
    },
    city: {
        type:String,
        required:true,
    },
    picture: {
        type:String,
    },
    contact: {
        type:String,
        required:true,
    },
    phone: {
        type:String,
        required:true,
    }            
},
{
  timestamps: true
})
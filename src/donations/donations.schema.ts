import * as mongoose from 'mongoose'

export const DonationPlacesSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    address: {
        type:String,
        required:true,
    },
    city: {
        type:String,
        required:true,
    },
    description: {
        type:String,
        required:true,
    },
    donationPlace: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"DonationPlaces"
    },
    need: {
        type:mongoose.Schema.Types.ObjectId || null,
        ref:"Need"
    },
    phone: {
        type:String,
        required:true,
    },
    state: {
        type:String,
        required:true,
    },            
},
{
  timestamps: true
})
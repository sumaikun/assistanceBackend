import * as mongoose from 'mongoose'

export const DeliversSchema = new mongoose.Schema({
    
    description: {
        type:String
    },
    donationPlace: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"DonationPlaces"
    },
    need: {
        type:mongoose.Schema.Types.ObjectId || null,
        ref:"Need",
        unique:true
    },
    donation: {
        type:mongoose.Schema.Types.ObjectId || null,
        ref:"Donations",
        unique:true
    },
    pictures: {
        type:[String],
        required:true,
    }          
},
{
  timestamps: true
})
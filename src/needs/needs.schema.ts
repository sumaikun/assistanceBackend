import * as mongoose from 'mongoose'

export const NeedsSchema = new mongoose.Schema({
    
    address: {
        type:String,
        required:true,
    },

    city: {
        type:String,
        required:true,
    },
    
    contact: {
        type:String,
        required:true,
    },
    
    phone: {
        type:String,
        required:true,
    },
    
    description: {
        type:String,
        required:true,
    },

    peopleNeeded: {
        type:Number,
        required:true,
    },

    childrenNeeded: {
        type:Number,
        required:true,
    },
    
    donationPlace: {
        type:String,
        required:true,
    },
    
    state: {
        type:String,
        required:true,
    },
    documentType: {
        type:String,
        required:true,
    },
    documentNumber:{
        type:String,
        required:true,
    },
},
{
  timestamps: true
})
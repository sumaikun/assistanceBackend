import * as mongoose from 'mongoose'

export const UsersSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    lastName: {
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
    email: {
        type: String,
        required:true,
        unique:true,
        lowercase: true
    },
    password: String,
    role: {
        type:String,
        required:true,
    },
    donationPlace: String,
},
{
  timestamps: true
});
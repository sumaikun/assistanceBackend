import * as mongoose from 'mongoose'

export const TransportersSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        unique:true
    },
    contact: {
      type: String,
      required:true,
      unique:true
    },
    phone: {
      type: String,
      required:true,
      unique:true
    }
},
{
  timestamps: true
});
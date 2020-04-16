import * as mongoose from 'mongoose'

export const TransportersSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        unique:true
    },
    contact: {
      type: String,
      
    },
    phone: {
      type: String,
     
    }
},
{
  timestamps: true
});
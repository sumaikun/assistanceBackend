import * as mongoose from 'mongoose'

export const CitiesSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        unique:true
    }
},
{
  timestamps: true
});
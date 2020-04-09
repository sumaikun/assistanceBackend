import * as mongoose from 'mongoose'

export const TransportationsSchema = new mongoose.Schema({
    transporter: {
        type: String,
        required:true
    },
    transactionNumber: {
      type: String,
      required:true,
      unique:true
    },
    donation: {
      type: String,
      required:true,
      unique:true
    }
},
{
  timestamps: true
});
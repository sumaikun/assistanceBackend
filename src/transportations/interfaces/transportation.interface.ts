import { Document } from 'mongoose';

export interface Transportation extends Document {
  readonly transporter: string;
  readonly transactionNumber: string;
  readonly donation: string;  
}
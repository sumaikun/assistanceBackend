import { Document } from 'mongoose';

export interface Transporter extends Document {
  readonly name: string;
  readonly contact: string; 
  readonly phone: string;   
}
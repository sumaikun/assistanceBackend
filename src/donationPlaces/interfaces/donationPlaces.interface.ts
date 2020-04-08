import { Document } from 'mongoose';

export interface DonationPlace extends Document {
  readonly name: string;
  readonly address: string;
  readonly city: string;
  readonly picture: string;
  readonly contact: string;
  readonly phone: string;  
}
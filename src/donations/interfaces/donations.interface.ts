import { Document } from 'mongoose';

export interface Donation extends Document {
  readonly name: string;
  readonly address: string;
  readonly city: string;
  readonly description: string;
  readonly need: string;
  readonly donationPlace: string;
  readonly phone: string;  
}
import { Document } from 'mongoose';

export interface Deliver extends Document {
  readonly description: string;
  readonly need: string;
  readonly donationPlace: string;
  readonly donation: string;
  readonly pictures: string[];
}
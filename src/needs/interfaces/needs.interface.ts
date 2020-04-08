import { Document } from 'mongoose';

export interface Need extends Document {
    readonly address: string;
    
    readonly contact: string;

    readonly city: string;
    
    readonly phone: string;
    
    readonly description: string;
    
    readonly donationPlace: string;
    
    readonly state: string; 
    
    readonly peopleNeeded: number;
    
    readonly childrenNeeded: number;

    readonly documentType: string;
  readonly documentNumber: string;
    
}
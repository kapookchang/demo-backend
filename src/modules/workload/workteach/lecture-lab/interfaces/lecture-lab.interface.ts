import { Document } from 'mongoose';
export interface ILectureLab extends Document{
    courseCodes: Number[]
}
import mongoose, { Schema, model } from 'mongoose';

export interface Asset extends mongoose.Document{
    measure: string;
}

const AssetSchema = new Schema({
    measure: String
});

export default model<Asset>('Asset', AssetSchema);
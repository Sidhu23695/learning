import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({any: Schema.Types.Mixed }, { strict: false });
const userModel = mongoose.model('users', userSchema);

export default userModel;
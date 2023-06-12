import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"],
  },
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'user',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  profilePicture: {
    type: String,
    default: '',
  },
  phoneNumber: {
    type: String,
    default: '',
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);

import { Schema, model } from 'mongoose';

const addressSchema = new Schema({
  recipientName: { type: String, required: true },
  phone: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: String,
  postalCode: { type: String, required: true },
  country: { type: String, default: 'Bangladesh' },
  isDefault: { type: Boolean, default: false },
});

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 6,
      select: false, 
    },
    phone: {
      type: String,
      trim: true,
    },
    avatar: {
      type: String,
      default: 'https://i.ibb.co/mJRq81h/default-avatar.png',
    },
    role: {
      type: String,
      enum: ['customer', 'admin', 'manager', 'staff'],
      default: 'customer',
      index: true,
    },
    permissions: [{ type: String }],
    status: {
      type: String,
      enum: ['active', 'blocked'],
      default: 'active',
      index: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verifiedAt: Date,
    lastLoginAt: Date,
    addresses: [addressSchema],
  },
  {
    timestamps: true,
  }
);

export const User = model('User', userSchema);
import { Schema, model } from 'mongoose';
import { hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

const UserSchema = new Schema(
  {
    avatar: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationCode: {
      type: String,
      required: false,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

// 비밀번호 해시화해서 저장
UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await hash(this.password, 10);
    return next();
  }
  return next();
});

// 토큰 생성
UserSchema.methods.generateJWT = async function () {
  return await sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

const User = model('User', UserSchema);
export default User;

import mongoose from 'mongoose'
import Joi from 'joi'

export const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 255,
      minlength: 2
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    username: {
      type: String,
      require: true,
      minlength: 3,
      maxlength: 50,
      default: function () {
        return this.name
      }
    },
    gender: {
      type: String,
      required: true
    },
    address: {
      type: String,
      maxlength: 255,
      minlength: 2
    },
    country: {
      type: String,
      default: 'Nepal'
    },
    user_type: {
      type: String,
      default: 'normal'
    },
    forgot_password: {
      type: Boolean,
      default: 0
    },
    invalid_login_attempts: {
      type: Number,
      default: 0
    },
    unique_token: {
      type: String,
      minlength: 5,
      maxlength: 255
    }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
)

export function validateUser (user) {
  const schema = Joi.object({
    name: Joi.string()
      .min(5)
      .max(50)
      .required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required(),
    confirmPassword: Joi.string()
      .min(5)
      .max(255)
      .required(),

    username: Joi.string()
      .min(3)
      .max(50),
    gender: Joi.string()
      .min(3)
      .max(50),
    country: Joi.string()
      .min(3)
      .max(50),
    address: Joi.string()
      .min(1)
      .max(50)
      .required(),
    user_type: Joi.string()
      .min(1)
      .max(15)
  })
  return schema.validate(user)
}

export default mongoose.model('Users', userSchema)

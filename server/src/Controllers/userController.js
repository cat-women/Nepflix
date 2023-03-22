import User, { validateUser } from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export default class UserController {
  get = async (req, res, next) => {
    res.status(200).json('message')
  }

  signup = async (req, res, next) => {
    const { error } = validateUser(req.body)
    if (error) throw error

    const {
      name,
      email,
      password,
      confirmPassword,
      gender,
      username,
      address,
      country
    } = req.body

    try {
      const oldUser = await User.findOne({ email })

      if (oldUser) return res.status(400).json({ msg: 'User already exits' })
      if (password !== confirmPassword)
        return res.status(400).json({ msg: 'Password doest not match ' })

      const hashedPassword = await bcrypt.hash(password, 12)

      const result = await User.create({
        name: name,
        email: email,
        password: hashedPassword,
        gender: gender,
        username: username,
        address: address,
        country: country
      })
      const token = jwt.sign({ email: result.email, id: result._id }, 'test', {
        expiresIn: '1h'
      })
      return res.status(200).json({ result, token })
    } catch (error) {
      console.log(error)
      next()
    }
  }

  addManyUser = async() =>{
    
  }

  signin = async (req, res, next) => {
    const { email, password } = req.body
    try {
      const oldUser = await User.findOne({ email })
      if (!oldUser)
        return res.status(404).json({ msg: 'User doesnt not exit ' })

      const isPasswordCorrect = await bcrypt.compare(password, oldUser.password)
      if (!isPasswordCorrect)
        return res.status(400).json({ msg: 'Invalid crendential' })
      const token = jwt.sign(
        { email: oldUser.email, id: oldUser._id },
        'test',
        {
          expiresIn: '1h'
        }
      )
      return res.status(200).json({ result: oldUser, token })
    } catch (error) {
      console.log(error)
      next()
    }
  }
}

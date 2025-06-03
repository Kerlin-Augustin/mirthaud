import { Request, Response } from 'express';
import { UserModel } from '../../database/models/User.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config()

export const signupController = async (req: Request, res: Response) => {

  const { username, email, accountType, password } = req.body
  const JWT_ACCESS_TOKEN = process.env.JWT_ACCESS_TOKEN!

  let hashedPassword: string
  let newUser;
  const saltRounds = 10

  try {
    const isExistingUser = await UserModel.findOne({ email })

    if (isExistingUser) {
      res.status(400).json({ message: 'Email already exists.' })
      return
    }

    hashedPassword = await bcrypt.hash(password, saltRounds)

    newUser = new UserModel({
      username,
      email,
      accountType,
      password: hashedPassword
    })

    await newUser.save()

    const accessToken = jwt.sign({ email }, JWT_ACCESS_TOKEN, { expiresIn: '15m' })

    res.status(201).json({ message: 'User Created Successfully', accessToken })

  } catch (err) {
    console.error('Failing to create user', err)
    res.status(500).json({ error: 'Failed to create new user' })
  }
}
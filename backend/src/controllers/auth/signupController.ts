import { Request, Response } from 'express';
import { UserModel } from '../../database/models/User.model';
import bcrypt from 'bcrypt';

export const signupController = async (req: Request, res: Response) => {

  const { name, email, accountType, password } = req.body

  let hashedPassword: string
  let newUser;
  const saltRounds = 10

  try {
    hashedPassword = await bcrypt.hash(password, saltRounds)

    newUser = new UserModel({
      name,
      email,
      accountType,
      password: hashedPassword
    })

    await newUser.save()
    res.status(201).json({ message: 'Success' })

  } catch (err) {
    console.error('Failing to create user', err)
    res.status(500).json({ error: 'Failed to create new user' })
  }
}
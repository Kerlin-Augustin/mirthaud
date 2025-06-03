import { Request, Response } from 'express';
import { UserModel } from '../../database/models/User.model';
import bcrypt from 'bcrypt';

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    const user = await UserModel.findOne({ email })

    if (!user) {
      res.status(400).json({ message: 'Invalid credentials. Try again.' })
      return
    }
    
    const isPasswordAMatch = await bcrypt.compare(password, user.password)

    if (!isPasswordAMatch) {
      res.status(401).send({ message: 'Invalid credentials. Try again.' })
      return
    }
    
    res.status(200).json({ message: 'Success' })

  } catch (err) {
    console.error('User does not exist')
    res.status(500).json({ message: 'User does not exist.' })
    return
  }

}
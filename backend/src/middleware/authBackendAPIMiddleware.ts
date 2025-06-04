import { Request, Response, NextFunction } from "express"
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

const JWT_ACCESS_TOKEN = process.env.JWT_ACCESS_TOKEN!

interface AuthenticatedRequest extends Request {
  user?: { email: string }
}

export const authenticateUserForAPI = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization
  const accessToken = authHeader && authHeader.split(' ')[1]

  if (!accessToken) {
    res.status(401).json({ message: 'No token provided' })
    return 
  }

  jwt.verify(accessToken, JWT_ACCESS_TOKEN, (err, decoded: any) => {
    if (err) {
      res.status(403).json({ message: 'Invalid or expired token' })
      return 
    }

    req.user = { email: decoded.email }
    next()
  })
} 
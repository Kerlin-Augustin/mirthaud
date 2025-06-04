import { Request, Response } from "express"
import { UserModel } from "../../database/models/User.model"

interface AuthenticatedRequest extends Request {
  user?: {
    email?: string
  }
}

export const disclaimerController = async (req: AuthenticatedRequest, res: Response) => {
  const email = req.user?.email
  try{
    const user = await UserModel.findOne({ email })
    const hasAcceptedDisclaimer = user?.hasAcceptedDisclaimer
    res.status(200).json({ hasAcceptedDisclaimer })
  } catch (err) {
    console.error('Failed to find disclaimer', err)
    res.status(500).json({ message: 'Failed to find disclaimer' })
  }
}
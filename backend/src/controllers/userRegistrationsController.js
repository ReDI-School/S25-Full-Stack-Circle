import prisma from "../prisma/client.js"
import bcrypt from "bcrypt"

export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Email and Password is required' });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: 'Password must be atleast 6 characters' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: { email, password: hashedPassword, name },
    });

    res.status(201).json({ message: 'User Signed up successfully',user:newUser });
  } catch (error) {
    console.log('Error in signup controller', error.message);
    res.status(500).json({message:"Internal Server Error"})
  }
};
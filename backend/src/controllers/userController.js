import prisma from "../prisma/client.js"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

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

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Email and Password is required' });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.status(200).json({ message: 'Login successfull!', token });
  } catch (error) {
    console.log('Error is login controller', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

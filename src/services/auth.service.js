import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import { generateToken } from "../utils/jwt.js";

export const registerUser = async (userdata) => {
  // Implementation for registering a new user
  const { name, email, password, role } = userdata;

  console.log("Registering user:", { name, email });

  // Validate input data (e.g., check if email is valid, password strength, etc.)

  // Check if the user already exists in the database
  const existingUser = await User.findOne({ where: { email } });

  if (existingUser) {
    throw new Error("User already exists");
  }
  // Hash the password before saving to the database
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Password hashed, creating user...");
  // Save the new user to the database
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role,
  });
  console.log("User created:", user);
  // Return a success message or the created user object
  return user;
};

export const loginUser = async (data) => {
  try {
    const { email, password } = data;

    // check if the user exists in the database
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error("Invalid credentials");
    }
    // compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    // User is valid now generate a JWT token and return it to the client

    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });
    return { token, user };
  } catch (error) {
    return error.message;
  }
};

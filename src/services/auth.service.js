import bcrypt from "bcrypt";
import User from "../models/user.model.js";
export const registerUser = async (userdata) => {
  // Implementation for registering a new user
  const { name, email, password } = userdata;

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
  });
  console.log("User created:", user);
  // Return a success message or the created user object
  return user;
};

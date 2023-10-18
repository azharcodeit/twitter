import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../../prisma/user";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export default async function handle(req) {
  try {
    switch (req.method) {
      case "GET": {
        if (req.query.id) {
          // Get a single user if id is provided is the query
          // api/users?id=1
          const user = await getUser(req.query.id);
          return NextResponse.status(200).json(user);
        } else {
          // Otherwise, fetch all users
          const users = await getAllUsers();
          return NextResponse.json(users);
        }
      }
      case "POST": {
        // Create a new user
        const { email, name, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await createUser(email, name, hashedPassword);
        return NextResponse.json(user);
      }
      case "PUT": {
        // Update an existing user
        const { id, ...updateData } = req.body;
        const user = await updateUser(id, updateData);
        return NextResponse.json(user);
      }
      case "DELETE": {
        // Delete an existing user
        const { id } = req.body;
        const user = await deleteUser(id);
        return NextResponse.json(user);
      }
      default:
        break;
    }
  } catch (error) {
    return NextResponse.status(500).json({ ...error, message: error.message });
  }
}

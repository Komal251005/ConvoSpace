import { User } from "../models/users.model.js";
import httpStatus from "http-status";
import bcrypt, {hash} from "bcrypt"// taking or importing export{User} data
import crypto from "crypto"

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Please provide username and password" });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(httpStatus.NOT_FOUND).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(httpStatus.UNAUTHORIZED).json({ message: "Invalid password" });
    }

    // generate token
    let token = crypto.randomBytes(20).toString("hex");
    user.token = token;
    await user.save();

    return res.status(httpStatus.OK).json({ token });
  } catch (e) {
    return res.status(500).json({ message: `Something went wrong: ${e.message}` });
  }
};
const register = async(req ,res) => {
    const { name, username , password} = req.body;

    try {
        const existingUser = await User.findOne({username});
        if(existingUser){
            return res.status(httpStatus.FOUND).json({message:"User already exists"})//if found then 302 code for found will transfer and message will display
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = new User({
            name: name,
            username: username,
            password: hashedPassword
        });
        await newUser.save();
        res.status(httpStatus.CREATED).json({message:"User Registered"})
    } catch(e) {
        res.json({message : "something went wrong ${e}"})
    }
}

export {login , register}
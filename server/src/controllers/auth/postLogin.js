import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email: email.toLowerCase(),
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      // JWT-Token erstellen
      const token = jwt.sign(
          // Benutzerdetails, die wir im JWT-Token verschlüsseln möchten
          {
          userId: user._id,
          email: user.email,
        },
          // Geheimer Schlüssel für die JWT-Verschlüsselung
          process.env.TOKEN_KEY,
          // weitere Optionen
        {
          expiresIn: "8h",
        }
      );

      // Antwort an den Benutzer zurücksenden
      return res.status(200).json({
        userDetails: {
          email: user.email,
          token,
          username: user.username,
        },
      });
    }

    return res.status(400).send("Invalid credentials. Please try again");
  } catch (err) {
    return res.status(500).send("Something went wrong. Please try again.");
  }
};

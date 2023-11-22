import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const postRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.exists({ email });

    if (userExists) {
      return res.status(409).send("E-mail already in use."); //409 Konflikt
    }

    const encryptedPassword = await bcrypt.hash(password, 10); // 10 ist der Salt-Wert

    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

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
        expiresIn: "12h",
      }
    );

    // Sende eine Erfolgsantwort zurück an den Benutzer mit den Daten des registrierten Benutzers und dem JWT-Token,
    // damit der Client den JWT-Token in Cookies / Speicher / Local Storage speichern kann.
    return res.status(201).json({  //201 Created
      userDetails: {
        email: user.email,
        username,
        token,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Error occured. Please try again");
  }
};

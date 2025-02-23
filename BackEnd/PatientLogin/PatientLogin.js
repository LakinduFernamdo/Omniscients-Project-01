import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import DB from '../../DataBase/LoginDB.js'; // Ensure this correctly exports a PostgreSQL client instance

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signIn', async (req, res) => {
    const { Phone, Password } = req.body;
    console.log("Received Login Request:", { Phone, Password });

    if (!Phone || !Password) {
        return res.status(400).json({ error: 'Phone and Password are required' });
    }

    try {
        const query = 'SELECT "Phone", "Password" FROM public."PatientRegister" WHERE "Phone" = $1';
        const result = await DB.query(query, [Phone]);

        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Invalid Phone or Password' });
        }

        const user = result.rows[0];

        // Direct comparison without bcrypt
        if (user.Password === Password) {
            console.log("Password Matched! User Authenticated.");
            return res.status(200).json({ message: 'Login successful', user });
            
        } else {
            return res.status(401).json({ error: 'Invalid Phone or Password' });
        }
    } catch (error) {
        console.error("Database query error:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

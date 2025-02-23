import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import DB from "../../DataBase/PatientDB.js"; // This will now import the updated DB module

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signUp', async (req, res) => {
    const { F_name, L_name, Email, Phone, Gender, Address, DOB,Password } = req.body;
    console.log('Back-end Received data:', req.body);
    const query = `
    INSERT INTO public."PatientRegister" 
    ("F_name", "L_name", "Email", "Phone", "Gender", "Address", "DOB","Password") 
    VALUES ($1, $2, $3, $4, $5, $6, $7,$8) 
    RETURNING *;
`;


    try {
        const result = await DB.query(query, [F_name, L_name, Email, Phone, Gender, Address, DOB,Password]);
        res.status(201).json(result.rows[0]); // Send the inserted row as the response
        console.log('Patient details inserted successfully');
    } catch (error) {
        console.error('Error inserting patient details:', error.message);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

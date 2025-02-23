import pkg from 'pg';
const { Client } = pkg;
const mydatabase = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'TestPatients',
    password: '789456123',
    port: 5432,
   
});
mydatabase.connect().then(() => {
    console.log('Connected to the database');
}).catch((error) => {
    console.error('Error connecting to the database:', error);
});
export default mydatabase;
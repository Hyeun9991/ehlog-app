import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running...!');
});

const PORT = process.env.PORT || 8123;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

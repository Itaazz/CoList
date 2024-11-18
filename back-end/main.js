const express = require('express');
const cors = require('cors');  
const app = express();
const { connectToDatabase } = require('./utils/db');
const listsRoutes = require('./routes/lists');

app.use(cors());  
app.use(express.json());  

app.use('/api/lists', listsRoutes); 

connectToDatabase();

app.listen(5000, () => {
  console.log('Serveur démarré sur http://localhost:5000');
});

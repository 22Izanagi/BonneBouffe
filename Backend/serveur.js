const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/signup', (req, res) => {
  const { nom, prenom, email, adresse } = req.body;

  if (!nom || !prenom || !email || !adresse) {
    return res.status(400).json({ message: 'Tous les champs sont obligatoires' });
  }

  // Logique d'inscription (ajout dans la base de données etc.)

  res.status(200).json({ message: 'Inscription réussie', code: 2002 });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur running on port ${PORT}`);
});
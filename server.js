const express = require("express");
const app = express();
app.use(express.json());

const ADMIN_PASS = "secret123"; //Mot de passe ecrit en dur , il faut ecrire variable d'environnement

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username.length === 0 || password.length === 0) { //ici on est pas sur que ca soit un string , pour savoir si s'en est un , fait la verifiaction ( !username == !password )
    return res.status(400).send("Error: Missing username or password " + username + password); // username et password sont pas utile , il faut les enlever .return res.status(400).json({ error: "Missing username or password" })
  }

  if (username === "admin" && password === ADMIN_PASS) { //Pour eviter de comparer "admin" et une vairable qui peut etre sensible aux attaque
    res.send("Welcome admin!");
  } else {
    res.status(401).send("Login or password incorrect");
  }
});

app.listen(3001, () => console.log("App listening on port 3001"));
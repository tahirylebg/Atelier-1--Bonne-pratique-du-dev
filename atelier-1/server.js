const express = require("express") ;
const app = express();
app.use(express.json());

const ADMIN_PASS = process.env.ADMIN_PASS || "secret123"; // mot de passe depuis variable d'environnement

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (typeof username !== "string" || typeof password !== "string" || !username || !password) {
    return res.status(400).json({ error: "Missing username or password" }); //J'ai fait la verification + j'ai retourné avec json 
  }

  if (username === "admin" && password === ADMIN_PASS) {
    return res.send("Welcome admin!"); 
  }

  return res.status(401).json({ error: "Login or password incorrect" });
});

app.listen(3001, () => console.log("App listening on port 3001")); 

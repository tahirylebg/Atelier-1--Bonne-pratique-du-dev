# Atelier-1--Bonne-pratique-du-dev

A quoi ça sert :

Le code utilisé sert à créer un serveur Node.Js qui peut probablement être utile pour créer une sorte de mini système de connexion normal . Ce code est conçu pour , dans un temps se connecter sur un système de connexion , c’est à dire un système avec un username (pseudonyme) et un password (mot de passe) , la condition est que s'il correspond à admin + secret123 , dans ce cas il va recevoir un avis positif c’est à dire « Welcome Admin ! » , sinon il va recevoir un avis négatif disant « Login or password incorrect » . 
Il ecoute sur le port 3001 ( un port qui est utilisé pour « eviter les conflits entre programmes » ) .

Qu'est ce que tu constates ? :

On constate que il y a plusieurs problème de mauvaise pratique au niveau dev , déjà dans un premier temps , on a constaté que dans la ligne 5 : Le mot de passe est ecrit en dur . Il est écrit "const ADMIN_PASS = "secret123" " ; dans un second temps dans la ligne 10  rien ne nous assure que username et password sont des string , ce qui explique que il peut y avoir confusion et très gros risque de faille (username.length === 0 || password.length === 0) ; dans un troisième temps on constate que dans la ligne 11 que « +Username+ password » ne sont pas utiles dans la ligne " return res.status(400).send("Error: Missing username or password " + username + password)" et enfin dans un dernier temps dans la ligne 14 "(username === "admin" && password === ADMIN_PASS)" il faut eviter de comparer ce que on a ecrit en dur avec ce qu’on a ecrit en variable , c’est un gros risque de faille .


Comment le corriger ? 

Dans un premier temps , il faut écrire une variable d’environnement (process.env.ADMIN_PASS) au lieu d’écrire  « const ADMIN_PASS = "secret123" » .
Dans un second temps , pour connaître il faut faire une verification " !username || !password "
Dans un troisieme temps , retourner un message plus generique comme ceci return res.status(400).json({ error: "Missing username or password" })
petite explication json :
format simple utilisé pour stocker et transporter des données. 
Dans un dernier temps , Utiliser des variables d’environnement .


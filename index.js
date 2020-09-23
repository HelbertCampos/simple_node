const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.info(`==> Requisição ${req.method} recebida em "${req.url}"`);
  next();
});

app.get("/", (req, res) => {
  res.status(200).json({
    text: "Testes com version",
    app: process.env.NODE_TEST_DOCKER || "Sem Definição",
  });
});

app.use((req, res, next) => {
  let err = new Error("Not found");
  err.statusCode = 404;
  next(err);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Aplicação rodando na porta: ${port}!`));

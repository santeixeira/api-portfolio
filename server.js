import app from "./src/app/app.js";
// import { routes } from "./start/routes/index.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Sendo executado na URL http://localhost:${port}`);
});

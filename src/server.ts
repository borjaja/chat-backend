import app from "./app/app";
import * as dotenv from "dotenv";
dotenv.config({ path: "config/.env" });

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

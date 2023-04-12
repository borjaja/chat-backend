import { Db, MongoClient } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config({ path: "config/.env" });

const url = process.env.ATLAS_URI ?? "";
const collection = process.env.COLLECTION ?? "";

async function setup() {
  const db = await MongoClient.connect(url);
  const dbo: Db = db.db(collection);
  dbo
    .listCollections({ name: "users" })
    .hasNext()
    .then((exists) => {
      if (!exists) {
        dbo.createCollection("users", {
          validator: {
            $jsonSchema: {
              bsonType: "object",
              title: "User Object Validation",
              required: ["username", "password"],
              properties: {
                username: {
                  bsonType: "string",
                  description: "must be a string and is required",
                },
                password: {
                  bsonType: "string",
                  minLength: 12,
                  description: "error min password length",
                },
              },
            },
          },
        });
      }
    });

  return dbo;
}

export default setup();

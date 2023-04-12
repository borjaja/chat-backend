import database from "../../database/database";

const userDao = async () => {
  const db = await database;
  return await db.collection("users");
};

export default userDao;

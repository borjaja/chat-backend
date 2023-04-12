import userDao from "../user/user.dao";

const authService = {
  findByUsername: async (username: string) => {
    const userCollection = await userDao();
    return await userCollection.findOne({ username });
  },
  insert: async (username: string, password: string) => {
    const userCollection = await userDao();
    return await userCollection.insertOne({ username, password });
  },
};

export default authService;

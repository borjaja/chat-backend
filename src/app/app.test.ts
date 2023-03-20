import request from "supertest";
import app from "./app";

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
  test("It should response the GET method", async () => {
    const response = await request(app)
      .post("/auth/sign-up")
      .set("Content-type", "application/json")
      .send({ username: "user" });
    expect(response.statusCode).toBe(200);
  });
});

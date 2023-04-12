import request from "supertest";
import app from "app/app";

jest.mock("../auth.service", () => {
  return {
    findByUsername: jest
      .fn()
      .mockResolvedValueOnce(undefined)
      .mockResolvedValue({}),
    insert: jest.fn().mockResolvedValue({}),
  };
});

describe("Test the root path", () => {
  test("Can register a new user", async () => {
    const response = await request(app)
      .post("/auth/sign-up")
      .set("Content-type", "application/json")
      .send({ username: "user", password: "password" });

    expect(response.statusCode).toBe(200);
  });

  test("If not get the correct arguments return code 404", async () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    const response = await request(app)
      .post("/auth/sign-up")
      .set("Content-type", "application/json")
      .send();
    expect(response.statusCode).toBe(404);
  });
});

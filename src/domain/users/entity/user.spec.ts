import { User } from "./user";

describe("Users unit test", () => {
  it("should throw error when name is empty", () => {
    expect(() => new User("1", "", "email@email.com", "password123")).toThrowError("User name must be required from create user");
  });
});

import { User } from "./user";

describe("Users unit test", () => {
  it("should throw error when name is empty", () => {
    expect(() => new User("1", "", "email@email.com", "password123")).toThrowError("User name must be required from create user");
  });

  it("should be user name is defined", () => {
    const user = new User("1", "username", "email@email.com", "password123");
    expect(user.name).toBe("username");
  });
});

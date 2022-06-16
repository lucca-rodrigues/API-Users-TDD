export class User {
  private _id: string;
  private _name: string;
  private _email: string;
  private _password: string;

  constructor(id: string, name: string, email: string, password: string) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._password = password;

    this.validate();
  }

  get name(): string {
    return this._name;
  }

  validate() {
    if (this._name.length === 0) {
      throw new Error("User name must be required from create user");
    }
  }
}

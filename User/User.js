class User {
  constructor(phoneNumber, password, name = "", place = "", picture = "") {
    this.phoneNumber = phoneNumber;
    this.password = password;
    this.name = name;
    this.place = place;
    this.picture = picture;
  }
}

export default User;

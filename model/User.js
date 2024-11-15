// models/User.js
class User {
  constructor() {
    this.users = [];
  }

  register(user) {
    this.users.push(user);
  }

  getUsersLength() {
    return this.users.length;
  }

  findUserByEmail(email) {
    return this.users.find((user) => user.email === email);
  }

  validateLogin(email, password) {
    console.log(this.users);
    
    const user = this.findUserByEmail(email);
    return user && user.password === password;
  }
}

module.exports = new User();

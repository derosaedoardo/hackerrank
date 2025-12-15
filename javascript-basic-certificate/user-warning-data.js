class User {
  constructor(userName) {
    this.userName = userName;
  }

  getUsername() {
    return this.userName;
  }
  etUsername(username) {
    return (this.userName = username);
  }
}

class ChatUser extends User {
  constructor(userName) {
    super(userName);
    this.warning = 0;
  }
  giveWarning() {
    return this.warning++;
  }
  getWarningCount() {
    return this.warning;
  }
}

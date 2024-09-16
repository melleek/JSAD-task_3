function userControlSystem(role, signIn) {
  if (!signIn) {
    return false;
  }

  if (role === "admin") {
    return true;
  } else if (role === "user") {
    return true;
  } else {
    return false;
  }
}
console.log(userControlSystem("user", true));
console.log(userControlSystem("JK", false));
console.log(userControlSystem("FJ", true));
console.log(userControlSystem("admin", true));

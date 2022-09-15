const obj = {
  firstName: "John",
  lastName: "Smith",
  get name() {
    return this.firstName + " " + this.lastName;
  },
  set name(newName: string) {
    const [firstName, lastName] = newName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

obj.name = "jane doe";
console.log(obj);
console.log(obj.name);

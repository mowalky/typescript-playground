const obj = {
  firstName: "John",
  lastName: "Smith",
  set name(newName: string) {
    const [firstName, lastName] = newName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

obj.name = "jane doe";
console.log(obj);

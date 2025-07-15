const server = {
  people: [
    { name: "Odin", age: 20 },
    { name: "Thor", age: 35 },
    { name: "Freyja", age: 29 },
  ],

  getPeople() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.people);
      }, 2000); // simulate 2s delay
    });
  },
};

async function getPersonInfo(name) {
  const people = await server.getPeople();
  const person = people.find(person => person.name === name);
  if (person) {
    console.log(`${person.name} is ${person.age} years old.`);
    return person;
  } else {
    console.log(`Person with name "${name}" not found.`);
    return null;
  }
}

// Call the function with a name
getPersonInfo("Thor");

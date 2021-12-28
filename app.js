const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarrid: function(newlastName) {
    this.lastName = newlastName;
  }
  
}


const name = Object.create(personPrototypes);
name.firstName = 'Sharmin';
name.lastName = 'Akter';
name.age = 20;

name.getsMarrid('Nelima');

console.log(name.greeting());

const jara = Object.create(personPrototypes, {
  firstName : {value: 'Jara'},
  lastName : {value: 'Tasnim'},
  age : {value : 19}
});

console.log(jara);
console.log(jara.greeting());
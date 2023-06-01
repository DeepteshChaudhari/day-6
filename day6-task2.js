class Person {
    constructor(name, age, gender, occupation) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.occupation = occupation;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name}. I am ${this.age} years old. I am a ${this.gender} working as a ${this.occupation}.`);
    }
  }
//   In the above code, the Person class has properties such as name, age, gender, and occupation. The constructor initializes these properties when a new instance of the class is created.

//   The introduce method is used to log an introduction of the person, including their name, age, gender, and occupation.
  
//   You can create a new instance of the Person class and call the introduce method to see the output. Here's an example:

const person = new Person("deeptesh", 26, "male", "software engineer");
person.introduce();

// output:
// Hello, my name is deeptesh. I am 26 years old. I am a male working as a software engineer.

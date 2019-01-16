// Using classes to build a catalog of schools for the Department of Education.


//1. creating any empty class named School

class School {

//2. creating constructor that accepts 3 parameters
  constructor(name, level, numberOfStudents) {

//3. set the School propperties 
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

//4. creating getters for each property 
  get name() {
   return this._name;
  }
  
  get level() {
    return this._level;
  }
  
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  
//5. creating getters for numberOfStudents
  set numberOfStudents(newNumberOfStudents){
    if (typeof newNumberOfStudents === 'number') {
      this._numberOfstudents = newNumberOfStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }

//6. creating a method named quickFacts that logs data 
quickFacts() {
   console.log(`${this.name} educates ${this.numberOfStudents}, usually between the ages of ${this.level}.`); 
  } 

//7. creating a static method named pickSubstituteTeacher    
 static pickSubstituteTeacher(substituteTeachers){
   let randomTeacher = Math.floor(substituteTeachers.length * Math.random);
return substituteTeachers[randomTeacher];
 }  
}

//8. creating a PrimarySchool class 
class PrimarySchool extends School {

//9. creating constructor with three arguments
  constructor(name, numberOfStudents, pickupPolicy){

//10. call super that passes in arguments of the parent constructor() 
    super(name, 'primary', numberOfStudents);

//11. set the remaining arguement to set the pickPolicy property
    this._pickupPolicy  = pickupPolicy;
  } 

/// our PrimarySchool class inherits School's properties and getters

//12. creating one new getter in the PrimarySchool class and return the value saved to that property
  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

//13. creating a HighSchool class
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  
  get sportsTeams(){
    console.log(this._sportsTeams); 
    return this._sportsTeams;
  }
}

//14. creating a PrimarySchool instance (new)
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

//15. call .quickFacts() on the lorraineHansbury instance
lorraineHansbury.quickFacts();

//16. call .pickSubstituteTeacher() on School, and pass in an array
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

//17. creating a highSchool instance 
const alSmith = new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

//18. Getting value saved to the the sportsTeams property in alSmith
console.log(alSmith.sportsTeams);

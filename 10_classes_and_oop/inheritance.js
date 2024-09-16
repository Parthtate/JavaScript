class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {  // extends keyword inherit the User properties to the teacher class.
    constructor(username, email, password){
        super(username); // super keyword get the value from extends class(User) and able to access for Teacher class.
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course added by ${this.username}`);
    }
}

// creating object:
const userone = new User("sam").logMe();

const teacherName = new Teacher("Jhon", "jhon@gmail.com", 416)

console.log(teacherName === User);
console.log(teacherName instanceof User);


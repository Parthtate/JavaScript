// getter and setter:

class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    // getter: is provide the manipulated value to the user, or DataBase. 
    // When use getter & setter both deaclard same variable name is mandatory. 
    get password(){
        return `${this._password.toUpperCase()}parth`
    }
    // setter: has always one parameter, and dont type return keyword, it set the value for getter.
    // race condition applied on Constuctor Vs getter & setter for accesing value, so we can declared different variable(this._password)
    set password(value){
        this._password = value
    }

    // for email:
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
}

const userOne = new User("p@gmail.com", "avd");
console.log(userOne.email);
console.log(userOne.password);


/*
_email: _ define private property define, or not getting access to normal user.
 
*/
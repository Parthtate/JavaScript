// properties throught getter and setter using function.

function User(email, password){
    this._email = email;
    this._password = password;

    // function is also Object, so it take behaviour of Object.
    Object.defineProperty(this, 'email', {  // defineProperties()help to define getter, setter.
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    });

    Object.defineProperty(this, 'password', {  // defineProperties()help to define getter, setter.
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        },
    })
}

const chai = new User("chai@gmail.com", "chai")
console.log(chai.email);
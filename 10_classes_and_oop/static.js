// static proprties:

class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`User has logged in ${this.username}`);
    }

    static logID(){ // static keyword able to secure the logID, also cannot inherit the proprty.
        let uniqueID =  parseInt(Math.random() * 1000)
        return uniqueID
    }
}

const hitesh = new user("hitesh")
hitesh.logMe();
// console.log(hitesh.logID()); // get error because static keyword, it stops accessing values from user.

class teacher extends user {
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

}
 

const userone = new teacher("roman", "roman@wwe.com")
// console.log(userone.logID()); //static keyword able to secure the logID, also cannot inherit the proprty.

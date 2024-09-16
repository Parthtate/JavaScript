const User = {
    _email: 'chai@gmail.com',
    _password: 456,

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this.email = value
    }
}
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get email() {

        
    }
    get password () {
        return `${this._password}hitsh`
    }

    set password(value) {
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.password);
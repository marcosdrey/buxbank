export class User {
    
    constructor(name, email, password, birth, tel) {
        this._name = name;
        this._email = email;
        this._password = password;
        this._birth = birth
        this._tel = tel
    }
    get name() {
        return this._name
    }
    get email() {
        return this._email
    }
    get password() {
        return this._password
    }
    get birth() {
        return this._birth
    }
    get tel() {
        return this._tel
    }
}
function validate (user, password) {
    if (user === 'Pedro' && password === '123') {
        return true; 
    } else {
        return false;
    }
}

let user = "Richard"
let password = "1234"
let verification = validate(user, password)
if (verification) {
    console.log("Approved")
} else {
    console.log("Denied")
}

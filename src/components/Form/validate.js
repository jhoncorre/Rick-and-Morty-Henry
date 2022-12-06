export default function validate(inputs){
    const errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/

    if(!regexEmail.test(inputs.username)){
        errors.username = "Name must be a valid email addres";
    }
    if(!inputs.name){
        errors.username = "Add your name";
    }
    if(inputs.username >35) {
        errors.username = "Max length 35";
    }
    if(!regexPassword.test(inputs.password)) {
        errors.password = "Add password 6-10 characters";
    }
    return errors;
}
class ValidationService {
    constructor({ validator }) {
        this.validator = validator
    }

    validateSignup(formBody) {
        return true
    }
    validateLogin(formBody) {
        return true
    }

    validateNewCar(formBody) {
        return true
    }
}

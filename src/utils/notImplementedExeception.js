class NotImplementedExepection extends Error{
    constructor(message){
        super(`${message} as called whitout implementation`)

        this.name = "NotImplementedExepection"
    }
}

export {NotImplementedExepection}

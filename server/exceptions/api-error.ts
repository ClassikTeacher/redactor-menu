module.exports = class ApiError extends Error {
    status;
    errors;

    constructor(status:any, message:string, errors:any){
        super(message)
        this.status = status
        this.errors = errors; 
    }

    
}
export class ApplicationUser{
    public id: number;
    public username: string;
    public mail: string;
    public password: string;
    public confirmPassword: string;
    public name: string;
    public lastName: string;
    public dateOfBirth: Date;
    public address: string;
    public userType: string;
    public imageUrl: string;

    constructor(id: number, username: string, mail: string, password: string, name: string, lastName: string, dateOfBirth: Date, address: string, userType: string, imageUrl: string){
        
    }
}
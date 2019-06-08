export class ApplicationUser{
    public Id: number;
    public Username: string;
    public Mail: string;
    public Password: string;
    public Name: string;
    public LastName: string;
    public DateOfBirth: Date;
    public Address: string;
    public UserType: string;
    public ImageUrl: string;

    constructor(id: number, username: string, mail: string, password: string, name: string, lastName: string, dateOfBirth: Date, address: string, userType: string, imageUrl: string){
        
    }
}
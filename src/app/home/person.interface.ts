export interface IPerson{
    age: number,
    id:number,
    img:string,
    name: string,
    username: string,
    email: string,
    employed: boolean,
    salary: number,
    phone: string,
    country: string,
    company: ICompany
}

export interface ICompany {
    name:string,
    catchphrase:string,
     bs:string
}
import{Repo} from "./Repo";
export class User{
    login: string | undefined;
    fullName: string|undefined;
    repoCount:number | undefined;
    followerCount:number|undefined;
    repos?:Repo[]|undefined;

    constructor(userResponse:any){
        this.login=userResponse.login;
        this.fullName=userResponse.fullName;
        this.repoCount=userResponse.repoCount;
        this.followerCount=userResponse.followerCount;
        //this.repos=userResponse.repos;
    }}
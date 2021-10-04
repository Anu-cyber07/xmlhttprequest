import { Repo } from './Repo';
import {User} from './User'
var XML = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XML();
const options : any ={
    headers:{
        'User-agent':'request'
    },
    JSON:true}
export class GithubApiService{
    getUserinfo(userName:string,cb :(user:User)=>any){
        xhr.open('GET','https://api.github.com/users/' +userName,options,(error:any,response :any,body:any)=>{
            let user = new User(JSON.parse(body));
            cb(user);

        })
    }
    getUserdetails(userName:string,cb :(repos:Repo[])=>any){
        xhr.open('GET','https://api.github.com/users/' +userName +'/repos',options,(error:any,response :any,body:any)=>{
        let repos= body.map((repo: any)=> new Repo(repo));
        cb(repos);
        })
    }
}
import{GithubApiService} from './GithubApiService';
import *as _ from 'lodash'
import { Repo } from './Repo';
import {User} from './User'
let svc =new GithubApiService();
if(process.argv.length<3){
    console.log('Please pass username')
}
else{
    let username=process.argv[2];
    svc.getUserinfo(username,(user:User)=>{
    svc.getUserdetails(username,(repos:Repo[])=>{
        let sortedRepos = _.sortBy(repos,[(repo:Repo)=>repo.forkCount]);
        user.repos=sortedRepos;
        console.log(user);
    
})
});}
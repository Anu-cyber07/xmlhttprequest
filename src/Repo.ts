export class Repo {

    name: string | undefined;
    description: string | undefined;
    url:string | undefined;
    size:number | undefined;
    forkCount:number|undefined;

    constructor(repo:any){
        this.name=repo.name;
        this.description=repo.description;
        this.url=repo.url;
        this.size=repo.size;
        this.forkCount=repo.forkCount;

    }
 }
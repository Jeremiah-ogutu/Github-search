export class User {
  public_repos!: number; 

  constructor(
    public bio: string,
      public  login: string,
      public_repos: number,
      public avatar_url: string
      ){}
}

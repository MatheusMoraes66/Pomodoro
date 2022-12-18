export interface IUser {
    login: string,
    id: number,
    avatar_url: string,
    url: string,
    html_url: string,
    type: string,
    name: string,
    company: string,
    location: string,
    email: string,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,

}

export type UserContextType = {
    user: IUser;
    searchUser: (name: string) => void;
}
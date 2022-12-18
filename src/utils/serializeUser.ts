import { IMessage } from "../@types/message";
import { IUser } from "../@types/user";

export function serializeUser(resp: any): IUser {
    let currentUser: IUser = {
        login: resp.login,
        id: resp.id,
        avatar_url: resp.avatar_url,
        url: resp.url,
        html_url: resp.html_url,
        type: resp.type,
        name: resp.name,
        company: resp.company,
        location: resp.location,
        email: resp.email,
        public_repos: resp.public_repos,
        public_gists: resp.public_gists,
        followers: resp.followers,
        following: resp.following,
    }
    return currentUser;
}
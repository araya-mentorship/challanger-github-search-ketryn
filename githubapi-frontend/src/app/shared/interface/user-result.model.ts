export interface UserResult {
    login: string,
    avatar_url: string,
    followers_url: string,
    repos_url: string,
    score: number,
    items: UserResult[],
}
export interface IComment {
    id?: string,
    author: string,
    text: string,
    ups: number,
    createdDate: number,
    replies?: IComment[]
}
import {UserType} from "./user";

export type CommentType = {
    id: number;
    postId: number;
    date: string;
    author: Pick<UserType, "id" | "nickname" | "photo">;
    text: string;
}

export type CommentFormType = Pick<CommentType, 'postId' | 'text'> & { authorId: number }
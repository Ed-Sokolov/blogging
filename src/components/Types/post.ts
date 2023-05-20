import {UserType} from "./user";

export type PostType = {
    id: number;
    title: string;
    text: string;
    date: string;
    commentsCount: number;
    viewsCount: number;
    photo: string;
    isOpenedComments: boolean;
    author: Pick<UserType, "id" | "nickname">;
}
export interface BookDetail {
    id: number;
    bookName: string;
    author: string;
    publisher: string;
    categories: string[];
    copyCount: number;
    borrowedCount: number;
}
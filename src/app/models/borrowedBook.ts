export interface BorrowedBook {
    id: number;
    bookCopyId: number;
    memberId: number;
    borrowDate: Date;
    dueDate: Date;
    returnDate: Date;
}
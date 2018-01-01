export class Message{
    id: string;
    sentAt: Date;
    isRead: boolean;
    author: User;
    text: string;
    thread: Thread;

    constructor(obj?: any){
        this.id = obj && obj.id;
        this.isRead = obj && obj.isRead || false;
        this.sentAt = obj && obj.sentAt || new Date();
        this.author = obj && obj.author || null;
        this.text = obj && obj.author || null;
        this.thread = obj && obj.thread || null; 
    }
}

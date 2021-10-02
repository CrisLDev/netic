export interface MessageInterface {
  _id?: string;
  chatId: string;
  sender?: string;
  text: string;
  createdAt?: number;
}

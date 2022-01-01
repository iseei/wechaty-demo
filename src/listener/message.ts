import { Message } from "wechaty";

export const onMessage = async (message: Message) => {
  console.log('onMessage::', message.toString());
}
import { Message } from "wechaty";
import { logger } from "../utils/logger.js";

export const onMessage = async (message: Message) => {
  logger.info('onMessage::', message.toString());
}
import { Friendship } from "wechaty";
import { logger } from "../utils/logger.js";

export const onFriendship = async (friendship: Friendship) => {
  logger.info('onFriendship:', (friendship as any).payload);
}
import { Contact } from "wechaty";
import { logger } from "../utils/logger.js";

export const onLogout = async (user: Contact, reason?: string) => {
  logger.info('on-logout::', user.toString(), );
  logger.info('on-logout reason::', reason);
  
}
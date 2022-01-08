import { Contact } from "wechaty";
import { DataStore } from "../utils/dataStore.js";
import { logger } from "../utils/logger.js";


export const onLogin = async (user: Contact) => {
  logger.info((user as any).payload);
  const db = await DataStore.get();
  db.data.self = (user as any).payload;
  await db.write();
  logger.info('test');
}
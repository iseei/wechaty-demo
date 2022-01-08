import { bot } from "../main.js";
import { DataStore } from "../utils/dataStore.js";
import { logger } from "../utils/logger.js";

export const onReady = async (a, b) => {
  logger.info('onReady', a, b);
  logger.info((bot.userSelf() as any).payload);
  const contacts = await bot.Contact.findAll();
  const rooms = await bot.Room.findAll();

  const rs = [];
  for (const r of rooms) {
    const members = await r.memberAll();
    rs.push({ 
      ...(r as any).payload,
      members: members.map(d => (d as any).payload),
    });
  }
  const cs = contacts.map(d => (d as any).payload);
  logger.info(`contacts total ${cs.length}, rooms total ${rs.length}`);
  const db = await DataStore.get();
  db.data.contacts = cs;
  db.data.rooms = rs;
  await db.write();
}
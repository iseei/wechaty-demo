import { Contact } from "wechaty";
import { DataStore } from "../utils/dataStore.js";

export const onLogin = async (user: Contact) => {
  console.log('on-login::', (user as any).payload);
  const db = await DataStore.get();
  db.data.self = (user as any).payload;
  await db.write();
}
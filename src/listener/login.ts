import { Contact } from "wechaty";

export const onLogin = async (user: Contact) => {
  console.log('on-login::', (user as any).payload);
  user.corporation
}
import { Contact } from "wechaty";

export const onLogout = async (user: Contact, reason?: string) => {
  console.log('on-logout::', user.toString(), );
  console.log('on-logout reason::', reason);
  
}
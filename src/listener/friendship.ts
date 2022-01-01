import { Friendship } from "wechaty";

export const onFriendship = async (friendship: Friendship) => {
  console.log('onFriendship:', (friendship as any).payload);
}
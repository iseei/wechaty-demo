import { Wechaty } from 'wechaty';
import * as path from 'path';
import { onLogin } from './listener/login.js';
import { onScan } from './listener/scan.js';
import { onReady } from './listener/ready.js';
import { onLogout } from './listener/logout.js';
import { onMessage } from './listener/message.js';
import { onFriendship } from './listener/friendship.js';
const __dirname = path.resolve();
export const rootPath = __dirname;


const bot = Wechaty.instance({
  name: 'demo-bot',
  puppet: 'wechaty-puppet-service',
});

bot
  .on('scan', onScan)
  .on('login', onLogin)
  .on('ready', onReady)
  .on('logout', onLogout)

  .on('message', onMessage)
  .on('friendship', onFriendship)

  .on('start', () => { console.log('on-start') })
  .on('dong', () => { console.log('on-dong') })
  .on('error', () => { console.log('on-error') })
  .start();

  export { bot }
  
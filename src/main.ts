import { Wechaty } from 'wechaty';
import * as path from 'path';
import { onLogin } from './listener/login.js';
import { onScan } from './listener/scan.js';
import { onReady } from './listener/ready.js';
import { onLogout } from './listener/logout.js';
import { onMessage } from './listener/message.js';
import { onFriendship } from './listener/friendship.js';
import { logger } from './utils/logger.js';
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

  .on('start', () => { logger.info('on-start') })
  .on('dong', () => { logger.info('on-dong') })
  .on('error', () => { logger.info('on-error') })
  .start();

  export { bot }
  
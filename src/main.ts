import { Wechaty, ScanStatus } from 'wechaty';
// import { Wechaty } from './wechatyDep';
import { PuppetService } from 'wechaty-puppet-service';
import * as qrcode from 'qrcode-terminal';
// import { Low, JSONFile } from 'lowdb';
import * as path from 'path';

// const __dirname = path.resolve();

const bot = Wechaty.instance({
  name: 'demo-bot',
  // puppet: new PuppetService({
  //   token: process.env.TOKEN,
  //   timeout: 3 * 60,
  // }),
  // puppet: 'wechaty-puppet-service',
  // puppetOptions: {
  //   token: process.env.TOKEN,
  //   timeout: 3 * 60,
  // },
});

console.log('=============');
console.log(qrcode.generate('123456'));
console.log('=============');


// const file = path.join(__dirname, './db/db.json');
// const adapter = new JSONFile(file);
// const db = new Low(adapter);
// (async () => {
//   await db.read();
//   console.log('read:db', db);
//   db.data ||= { posts: [] };
//   db.write();
// })();

bot
  .on('scan', (qr: string, status: ScanStatus) => {
    console.log('on-scan', qr);
    if (qr) {
      qrcode.generate(qr, { small: true });
    }
  })
  .on('error', () => {
    console.log('on-error');
  })
  .on('ready', () => {
    console.log('on-ready');
  })
  .on('start', () => {
    console.log('on-start');
  })
  .on('dong', () => {
    console.log('on-dong');
  })
  .on('login', () => {
    console.log('login');
  })
  .on('logout', () => {
    console.log('on-logout');
  })
  .start();

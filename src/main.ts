import { Wechaty, ScanStatus } from 'wechaty';
// import { Wechaty } from './wechatyDep';
import * as qrcode from 'qrcode-terminal';

const bot = new Wechaty({
  name: 'demo-bot',
  puppet: 'wechaty-puppet-service',
  puppetOptions: {
    token: process.env.WECHATY_PUPPET_SERVICE_TOKEN,
    timeout: 4 * 60,
  },
});

bot
  .on('scan', (qr: string, status: ScanStatus) => {
    console.log('on-scan', qr, status);
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
  .on('message', (message) => {
    console.log('message', message);
  })
  .on('friendship', (event) => {
    console.log('friendship', event);
  })
  .on('room-invite', () => {})
  .start();

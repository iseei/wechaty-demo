import { Wechaty, ScanStatus } from 'wechaty';
import qr from 'qrcode-terminal';
import { logger } from '../utils/logger.js';

export const onScan = (qrcode: string, status: ScanStatus) => {
  logger.info('onScan:', qrcode, status);
  if (qrcode) {
    qr.generate(qrcode, { small: true });
  }
}
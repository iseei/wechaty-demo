import { Wechaty, ScanStatus } from 'wechaty';
import qr from 'qrcode-terminal';

export const onScan = (qrcode: string, status: ScanStatus) => {
  console.log('onScan:', qrcode, status);
  if (qrcode) {
    qr.generate(qrcode, { small: true });
  }
}
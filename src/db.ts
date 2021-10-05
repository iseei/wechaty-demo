import { Low, JSONFile } from 'lowdb';
import * as path from 'path';

const __dirname = path.resolve();

const file = path.join(__dirname, './db/db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);
(async () => {
  await db.read();
  console.log('read:db', db);
  db.data ||= { posts: [] };
  db.write();
})();
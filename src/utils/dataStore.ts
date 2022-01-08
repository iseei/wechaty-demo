import { JSONFile, Low } from 'lowdb';
import * as path from 'path';
import * as fs from 'fs';
import { rootPath } from '../main.js';
import { ContactPayload } from 'wechaty-puppet/src/schemas/contact';
import { RoomPayload, RoomMemberPayload } from 'wechaty-puppet/src/schemas/room';
import { MessagePayload } from 'wechaty-puppet/src/schemas/message';


type RoomItem = RoomPayload & { members: RoomMemberPayload[] };

type DJson = {
  self: ContactPayload,
  contacts: ContactPayload[]
  rooms: RoomItem[]
  messages: MessagePayload[]
}

const defaultDJson: DJson = {
  self: null,
  contacts: [],
  rooms: [],
  messages: [],
}

export class DataStore {
  private static db: Low<DJson>;

  private static async init () {
    const dir = path.join(rootPath, './db');
    const file = path.join(dir, 'db.json');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(file, JSON.stringify({}), 'utf-8');
    const adapter = new JSONFile<DJson>(file);
    this.db = new Low(adapter);
    await this.db.read();
    this.db.data = defaultDJson;
    await this.db.write();
    return this.db;
  }

  public static get = async () => {
    if (!this.db) { 
      console.time('DataStore json file init:');
      await this.init();
      console.timeEnd('DataStore json file init:');
    }
    return this.db;
  }
}
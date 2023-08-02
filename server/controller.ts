import { DB } from './db';

export default class Controller {
    db: DB;

    public constructor(db: DB) {
        this.db = db;
    }

    public async getData() {
        return this.db.getData();
    }
}

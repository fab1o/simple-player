import { DB, LocalDB, MongoDB } from './db';

class Controller {
    db: DB;

    public constructor(config?: { username: string; password: string }) {
        if (config?.username && config?.password) {
            this.db = new MongoDB(config);
        } else {
            this.db = new LocalDB();
        }
    }

    public async getData() {
        return this.db.getData();
    }
}

export default Controller;

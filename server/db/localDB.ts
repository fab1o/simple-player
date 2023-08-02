import { DB } from '.';

import testFiles from './testFiles.items.json';

/**
 * @desc Serves data locally
 */
export class LocalDB implements DB {
    public constructor() {
        console.log('Setting up Local database...');
    }

    public async getData() {
        console.dir(testFiles, { depth: null });

        return Promise.resolve(testFiles);
    }
}

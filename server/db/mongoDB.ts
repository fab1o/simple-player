import { MongoClient, ServerApiVersion } from 'mongodb';

import { DB, Data } from '.';

/**
 * @desc Serves data from MongoDB server
 */
export class MongoDB implements DB {
    client: MongoClient;

    public constructor(config: { username: string; password: string }) {
        const { username, password } = config;

        const uri = `mongodb+srv://${username}:<${password}>@cluster0.jnjhbj6.mongodb.net`;

        console.log(`Setting up MongoDB: ${uri}`);

        this.client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
        });
    }

    public async getData() {
        try {
            await this.client.connect();

            const data = await this.client
                .db('admin')
                .collection<Data>('testFiles')
                .find({})
                .toArray();

            console.dir(data, { depth: null });

            return data;
        } catch (ex) {
            console.log(ex.message);
        } finally {
            await this.client.close();
        }
    }
}

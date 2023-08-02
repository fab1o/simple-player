import { createServer, IncomingMessage, ServerResponse } from 'http';

import Controller from './server/controller';

let port = 3000;

const username = process.env.npm_config_username;
const password = process.env.npm_config_password;

const controler = new Controller({ username, password });

const server = createServer(
    async (request: IncomingMessage, response: ServerResponse) => {
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'GET');

        if (request.url === '/data' && request.method === 'GET') {
            console.log('\nGET: /data');

            try {
                const data = await controler.getData();

                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify(data));
            } catch (ex) {
                response.writeHead(500, { 'Content-Type': 'text/plain' });
                response.end(ex.message);
            } finally {
                return;
            }
        }

        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Not found');
    }
);

function listen() {
    server.listen(port, () => {
        console.log(`\nServer listening on port ${port}`);
    });
}

listen();

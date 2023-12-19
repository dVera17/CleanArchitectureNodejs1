import express, { Router } from 'express';

interface Options {
    host: string;
    port: number;
    routes: Router;
}

export class Server {

    public readonly app = express();
    private readonly port: number;
    private readonly host: string;
    private readonly routes: Router;

    constructor(options: Options) {
        const { port = 3000, host = 'localhost', routes } = options;

        this.port = port;
        this.host = host;
        this.routes = routes;
    }

    async start() {
        this.app.use(express.json());

        this.app.use(this.routes);

        this.app.listen(this.port, this.host, () => {
            console.log(`Server is running on http://${this.host}:${this.port}\n`);
        });
    }
}
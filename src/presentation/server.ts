import express from 'express';

interface Options {
    host: string;
    port: number;
}

export class Server {

    public readonly app = express();
    private readonly port: number;
    private readonly host: string;

    constructor(options: Options) {
        this.port = options.port;
        this.host = options.host;
    }

    async start() {
        this.app.listen(this.port, this.host, () => {
            console.log(`\nServer is running on http://${this.host}:${this.port}`);
        });
    }
}
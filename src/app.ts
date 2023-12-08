import { Server } from './presentation/server';
import { envs } from './config';

(() => {
    main();
})()

async function main() {
    new Server({
        port: envs.PORT,
        host: envs.HOST,
    })
        .start()
}
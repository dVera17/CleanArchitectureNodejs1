import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
    PORT: get('PORT_SERVER').required().asPortNumber(),
    HOST: get('HOST_SERVER').required().asString(),
    MONGO_URL: get('MONGO_URL').required().asString(),
    MONGO_DB_NAME: get('MONGO_DB_NAME').required().asString(),
}
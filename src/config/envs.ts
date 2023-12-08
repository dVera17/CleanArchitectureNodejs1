import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
    PORT: get('PORT_SERVER').required().asPortNumber(),
    HOST: get('HOST_SERVER').required().asString(),
}
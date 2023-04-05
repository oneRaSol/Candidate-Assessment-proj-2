import { commonEnv } from "./environment.common";

export const environment = {
    ...commonEnv,
    production: true,
    apiurl: 'http://prod.api.com',
};

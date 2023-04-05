import { commonEnv } from "./environment.common";

export const environment = {
    ...commonEnv,
    production: false,
    apiurl: 'http://staging.api.com',
};

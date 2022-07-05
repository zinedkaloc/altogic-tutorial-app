import { createClient } from "altogic";

let envUrl = "https://app.c1-na.altogic.com";
let clientKey = "e574fee1fb2b4435ac2a8598ca68b7d8";

const altogic = createClient(envUrl, clientKey);

export { altogic };

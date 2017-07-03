"use strict";

const Hs100Api = require("hs100-api");

let status = false;

if (process.argv[2].toUpperCase() === "ON") {
  status = true;
}
else {
  status = false;
}

const client = new Hs100Api.Client();
const plug = client.getPlug({host: '192.168.1.143'});
plug.setPowerState(status);

client.socket.close();

import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: "1549212",
  key: "0fca604d2e340c509eba",
  secret: "f9c9b2c7ec909dbbef78",
  cluster: "us2",
  useTLS: true,
});

export const clientPusher = new ClientPusher("0fca604d2e340c509eba", {
  cluster: "us2",
  forceTLS: true,
});

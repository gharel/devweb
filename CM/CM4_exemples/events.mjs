import { EventEmitter } from "node:events";
import { setTimeout } from "node:timers/promises";

const emitter1 = new EventEmitter();
const emitter2 = new EventEmitter();
emitter1.last = Date.now();
emitter2.last = Date.now();

emitter1.on("ping", async function pingListener(value, time) {
  console.info(`[1] received ${value}@+${time - emitter1.last}`);
  emitter1.last = time;
  await setTimeout(Math.random() * 1000);
  emitter2.emit("ping", value + 1, Date.now());
});

emitter2.on("ping", async function pongListener(value, time) {
  console.info(`[2] received ${value}@+${time - emitter2.last}`);
  emitter2.last = time;
  await setTimeout(Math.random() * 100);
  emitter1.emit("ping", value + 1, Date.now());
});

emitter1.emit("ping", 0, Date.now());


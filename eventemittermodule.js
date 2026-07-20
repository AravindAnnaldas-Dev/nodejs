import EventEmitter from "events";

const event = new EventEmitter();

event.on("greet", (name) => {
  console.log(`Hello World! ${name}`);
});

event.once("greet", () => {
  console.log("Hello World!");
});

event.emit("greet", "Aravind");
event.emit("greet");

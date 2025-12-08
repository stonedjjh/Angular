export function whatsMyType<T>(argument: T): T {
  return argument;
}

const amIString = whatsMyType<string>("Hello World");
const amINumber = whatsMyType<number>(100);
const amIBoolean = whatsMyType<boolean>(true);
const amIArray = whatsMyType<string[]>(["A", "B", "C"]);

console.log({ amIString, amINumber, amIBoolean, amIArray });

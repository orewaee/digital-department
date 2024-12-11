import * as transport from "./transport";

const owner: transport.Transport.OwnerImpl = new transport.Transport.OwnerImpl(
    "a",
    "b",
    "c",
    new Date(),
    transport.Transport.DocType.PASSPORT,
    "0A",
    "1B"
);

owner.print();

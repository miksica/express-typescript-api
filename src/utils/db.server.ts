// check to se if a connection already exists, if so return it, if not than make new

import { PrismaClient } from "@prisma/client";

let db: PrismaClient;

declare global {
    var __db: PrismaClient | undefined;
}

if (!global.__db) {
    global.__db = new PrismaClient();
}

db = global.__db;
export { db };

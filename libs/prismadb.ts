import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined //type undefined
}
//create client
const client = globalThis.prisma || new PrismaClient() //stop hot reload creating multiple clients since globalthis is not affected by hot reload
if (process.env.NODE_ENV !== "production") globalThis.prisma = client //environment check

export default client;

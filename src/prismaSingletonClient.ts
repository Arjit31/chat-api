import { PrismaClient } from "@prisma/client";

function prismaSingletonClient(){
    return new PrismaClient();
}

// specific to typescript not available in javascript
declare global {
    //defining type of prismaGlobal
    var prismaGlobal: undefined | ReturnType<typeof prismaSingletonClient>;
}

export let prisma : ReturnType<typeof prismaSingletonClient>;

if(globalThis.prismaGlobal){
    prisma = globalThis.prismaGlobal;
}
else {
    prisma = prismaSingletonClient();
}

if(process.env.NODE_ENV === "development") globalThis.prismaGlobal = prisma;
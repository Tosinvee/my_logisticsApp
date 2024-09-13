/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { registerAs } from "@nestjs/config";

export default registerAs('database', ()=>({ // this includes the namespace and function that returns the config objet
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT) || 5432,
    user: process.env.DATABASE_USER || 'postgres',
    password:String(process.env.DATABASE_PASSWORD) || 123456,
    name: process.env.DATABASE_NAME,
    synchronize: process.env.DATABASE_SYNC === 'true' ? true : false,
    autoLoadEntities: process.env.DATABASE_AUTOLOAD === 'true' ? true : false,  
}))
// for postgre sql connection  via drizzle orm in that we used neon 
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';
const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
export const db = drizzle(sql,{schema});

// we will also add this in package.json in order to push and see the date 
// "db:push": "npx drizzle-kit push", to push
// "db:studio": "npx drizzle-kit studio" to see
// /** @type { import("drizzle-kit").Config } */ 
// export default {
//   schema:'./utils/schema.js',  
//   dialect: "postgresql",
//   dbCredentials: {
//     url: "postgresql://neondb_owner:Tze8qr3gQAFM@ep-falling-leaf-a529a5nd.us-east-2.aws.neon.tech/srivix?sslmode=require",
//   }
// };
// console.log('Schema Path:', './utils/schema.js');
import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema:'./utils/schema.js',
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:Tze8qr3gQAFM@ep-falling-leaf-a529a5nd.us-east-2.aws.neon.tech/srivix?sslmode=require",
  }
})
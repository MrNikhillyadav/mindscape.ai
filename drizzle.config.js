/** @type { import("drizzle-kit").Config } */
export default  {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_SO9rdoUK2gMv@ep-lingering-bread-a8jgk6po-pooler.eastus2.azure.neon.tech/neondb?sslmode=require',
    }
  };
  
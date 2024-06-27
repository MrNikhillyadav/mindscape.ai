import { serial, text, pgTable, varchar } from "drizzle-orm/pg-core";
export const ChatConversation=pgTable('chatconversation',{
    id:serial('id').primaryKey(),  //this 'id' is the 'column name' in Database
    stateDesc:varchar('stateDesc').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt'),
    mockId:varchar('mockId').notNull()

    
})  
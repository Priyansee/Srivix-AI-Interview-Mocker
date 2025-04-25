import { pgTable, serial, varchar, text } from "drizzle-orm/pg-core";

export const MockInterview=pgTable('mockInterview',{
// serial from pg core
    id:serial('id').primaryKey(),
    jsonMockResp:text('jsonMockResp').notNull(),
//    varchar also select from pg core
    jobPosition:varchar('jobPosition').notNull(),
    jobDesc:varchar('jobDesc').notNull(),
    jobExperience:varchar('jobExperience').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt:varchar('createdAt'),
    mockId: varchar('mockId').notNull(),

})

export const UserAnswer=pgTable('userAnswer',{
    id:serial('id').primaryKey(),
    mockIdRef: varchar('mockId').notNull(),
    question:varchar('question').notNull(),
    correctAns:text('correctAns'),
    userAns:text('userAns'),
    feedback:text('feedback'),
    rating:varchar('rating'),
    userEmail:varchar('userEmail'),
    createdAt:varchar('createdAt'),
 
})    
import { relations } from 'drizzle-orm';
import { boolean, integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

// Define the 'users' table using Firebase Auth UID as unique identifier
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  uid: text('uid').notNull().unique(),
  email: text('email').notNull(),
  displayName: text('display_name').notNull().default('NIMCET Aspirant'),
  daysLeft: integer('days_left').notNull().default(45),
  hoursPerDay: integer('hours_per_day').notNull().default(6),
  xp: integer('xp').notNull().default(1450),
  streakDays: integer('streak_days').notNull().default(12),
  completedChaptersJson: text('completed_chapters_json').notNull().default('["math-vectors","math-probability"]'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Define the 'mock_attempts' table with a foreign key to 'users.id'
export const mockAttempts = pgTable('mock_attempts', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .references(() => users.id)
    .notNull(),
  title: text('title').notNull(),
  totalNormalizedScore: integer('total_normalized_score').notNull(),
  rawScore: integer('raw_score').notNull(),
  maxRawScore: integer('max_raw_score').notNull(),
  accuracyPercent: integer('accuracy_percent').notNull(),
  predictedCollege: text('predicted_college').notNull(),
  predictedRankBand: text('predicted_rank_band').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

// Define the 'forum_posts' table for community doubt resolution
export const forumPosts = pgTable('forum_posts', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .references(() => users.id)
    .notNull(),
  authorName: text('author_name').notNull(),
  authorTargetNit: text('author_target_nit').notNull().default('Target: NIT Trichy (AIR < 50)'),
  subjectId: text('subject_id').notNull().default('mathematics'),
  chapterTitle: text('chapter_title').notNull().default('Vectors & 3D Geometry'),
  questionTitle: text('question_title').notNull(),
  questionBody: text('question_body').notNull(),
  upvotes: integer('upvotes').notNull().default(1),
  createdAt: timestamp('created_at').defaultNow(),
});

// Define the 'forum_replies' table for peer solutions
export const forumReplies = pgTable('forum_replies', {
  id: serial('id').primaryKey(),
  postId: integer('post_id')
    .references(() => forumPosts.id)
    .notNull(),
  userId: integer('user_id')
    .references(() => users.id)
    .notNull(),
  authorName: text('author_name').notNull(),
  badge: text('badge').notNull().default('Peer Solver'),
  replyText: text('reply_text').notNull(),
  isVerifiedSolution: boolean('is_verified_solution').notNull().default(false),
  createdAt: timestamp('created_at').defaultNow(),
});

// Define relationships
export const usersRelations = relations(users, ({ many }) => ({
  mockAttempts: many(mockAttempts),
  forumPosts: many(forumPosts),
  forumReplies: many(forumReplies),
}));

export const mockAttemptsRelations = relations(mockAttempts, ({ one }) => ({
  user: one(users, {
    fields: [mockAttempts.userId],
    references: [users.id],
  }),
}));

export const forumPostsRelations = relations(forumPosts, ({ one, many }) => ({
  author: one(users, {
    fields: [forumPosts.userId],
    references: [users.id],
  }),
  replies: many(forumReplies),
}));

export const forumRepliesRelations = relations(forumReplies, ({ one }) => ({
  post: one(forumPosts, {
    fields: [forumReplies.postId],
    references: [forumPosts.id],
  }),
  author: one(users, {
    fields: [forumReplies.userId],
    references: [users.id],
  }),
}));

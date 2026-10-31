import { db } from './index.ts';
import { users, mockAttempts } from './schema.ts';
import { desc, eq } from 'drizzle-orm';

export async function getOrCreateUser(
  uid: string,
  email: string,
  displayName?: string
) {
  try {
    const safeName = displayName && displayName.trim() ? displayName.trim() : email.split('@')[0] || 'NIMCET Aspirant';
    const result = await db
      .insert(users)
      .values({
        uid,
        email,
        displayName: safeName,
      })
      .onConflictDoUpdate({
        target: users.uid,
        set: {
          email,
          updatedAt: new Date(),
        },
      })
      .returning();

    return result[0];
  } catch (error) {
    console.error('Database query failed in getOrCreateUser:', error);
    throw new Error('Failed to synchronize user profile. Please try again later.', {
      cause: error,
    });
  }
}

export async function updateUserProgress(
  uid: string,
  payload: {
    daysLeft?: number;
    hoursPerDay?: number;
    xp?: number;
    streakDays?: number;
    completedChapters?: string[];
  }
) {
  try {
    const updateValues: Partial<typeof users.$inferInsert> = {
      updatedAt: new Date(),
    };
    if (typeof payload.daysLeft === 'number') {
      updateValues.daysLeft = payload.daysLeft;
    }
    if (typeof payload.hoursPerDay === 'number') {
      updateValues.hoursPerDay = payload.hoursPerDay;
    }
    if (typeof payload.xp === 'number') {
      updateValues.xp = payload.xp;
    }
    if (typeof payload.streakDays === 'number') {
      updateValues.streakDays = payload.streakDays;
    }
    if (Array.isArray(payload.completedChapters)) {
      updateValues.completedChaptersJson = JSON.stringify(payload.completedChapters);
    }

    const updated = await db
      .update(users)
      .set(updateValues)
      .where(eq(users.uid, uid))
      .returning();

    return updated[0] || null;
  } catch (error) {
    console.error('Database query failed in updateUserProgress:', error);
    throw new Error('Failed to save study progress. Please try again later.', {
      cause: error,
    });
  }
}

export async function recordUserMockAttempt(
  uid: string,
  email: string,
  attempt: {
    title: string;
    totalNormalizedScore: number;
    rawScore: number;
    maxRawScore: number;
    accuracyPercent: number;
    predictedCollege: string;
    predictedRankBand: string;
  }
) {
  try {
    const userRecord = await getOrCreateUser(uid, email);
    const inserted = await db
      .insert(mockAttempts)
      .values({
        userId: userRecord.id,
        title: attempt.title,
        totalNormalizedScore: Math.round(attempt.totalNormalizedScore),
        rawScore: Math.round(attempt.rawScore),
        maxRawScore: Math.round(attempt.maxRawScore),
        accuracyPercent: Math.round(attempt.accuracyPercent),
        predictedCollege: attempt.predictedCollege,
        predictedRankBand: attempt.predictedRankBand,
      })
      .returning();

    return inserted[0];
  } catch (error) {
    console.error('Database query failed in recordUserMockAttempt:', error);
    throw new Error('Failed to record mock test attempt. Please try again later.', {
      cause: error,
    });
  }
}

export async function getUserMockAttempts(uid: string) {
  try {
    const rows = await db
      .select({
        id: mockAttempts.id,
        title: mockAttempts.title,
        totalNormalizedScore: mockAttempts.totalNormalizedScore,
        rawScore: mockAttempts.rawScore,
        maxRawScore: mockAttempts.maxRawScore,
        accuracyPercent: mockAttempts.accuracyPercent,
        predictedCollege: mockAttempts.predictedCollege,
        predictedRankBand: mockAttempts.predictedRankBand,
        createdAt: mockAttempts.createdAt,
      })
      .from(mockAttempts)
      .innerJoin(users, eq(mockAttempts.userId, users.id))
      .where(eq(users.uid, uid))
      .orderBy(desc(mockAttempts.createdAt));

    return rows;
  } catch (error) {
    console.error('Database query failed in getUserMockAttempts:', error);
    throw new Error('Failed to load mock test history. Please try again later.', {
      cause: error,
    });
  }
}

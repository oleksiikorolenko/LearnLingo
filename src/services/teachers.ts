import { ref, get, query, limitToFirst, startAfter} from 'firebase/database';
import { database } from './firebase';
import type { Teacher } from '../types/teacher.ts';

export const getTeachers = async (limit = 4, lastKey?: string): Promise<Teacher[]> => {
  const teachersRef = ref(database, 'teachers');

  const q = lastKey
  ? query(teachersRef, startAfter(lastKey), limitToFirst(limit))
  : query(teachersRef, limitToFirst(limit));

  const snapshot = await get(q);

  if (!snapshot.exists()) {
    return [];
  }

  return Object.entries(snapshot.val()).map(([id, data]) => ({
    id,
    ...(data as Omit<Teacher, 'id'>),
  }) satisfies Teacher
);
};
'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function addTodo(value: string) {
  await prisma.tasks.create({
    data: {
      title: value,
      done: false,
    },
  });

  revalidatePath('/todolist');
}

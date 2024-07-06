'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function addTodo(value: string): Promise<void> {
  await prisma.tasks.create({
    data: {
      title: value,
      done: false,
    },
  });

  revalidatePath('/todolist');
}

export async function toggleTask(id: number): Promise<void> {
  const task = await prisma.tasks.findUnique({
    where: {
      id,
    },
  });

  if (task === null) return;

  await prisma.tasks.update({
    where: {
      id,
    },
    data: {
      done: !task.done,
    },
  });

  revalidatePath('/todolist');
}

export async function deleteTask(id: number): Promise<void> {
  await prisma.tasks.delete({
    where: {
      id,
    },
  });

  revalidatePath('/todolist');
}

'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { TableCell, TableRow } from '@/components/ui/table';
import { deleteTask, toggleTask } from '@/lib/actions/todolist';
import { Tasks } from '@prisma/client';
import { FaTrashAlt } from 'react-icons/fa';

type Props = {
  task: Tasks;
};

export default function Task({ task }: Props) {
  return (
    <TableRow key={task.id}>
      <TableCell className="font-medium flex justify-start items-center">
        <Checkbox onClick={() => toggleTask(task.id)} checked={task.done} />
      </TableCell>
      <TableCell className={task.done ? 'line-through' : ''}>
        {task.title}
      </TableCell>
      <TableCell className="text-right">
        <button
          className="text-red-500 hover:scale-110"
          onClick={() => deleteTask(task.id)}>
          <FaTrashAlt />
        </button>
      </TableCell>
    </TableRow>
  );
}

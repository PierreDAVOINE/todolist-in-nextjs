'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { TableCell, TableRow } from '@/components/ui/table';
import { deleteTask, toggleTask } from '@/lib/actions/todolist';
import { Tasks } from '@prisma/client';
import { useState } from 'react';
import { FaEdit, FaSave, FaTrashAlt } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';

type Props = {
  task: Tasks;
};

export default function Task({ task }: Props) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <TableRow key={task.id}>
      {isEditing && (
        <>
          <TableCell className="font-medium flex justify-start items-center">
            <Checkbox onClick={() => toggleTask(task.id)} checked={task.done} />
          </TableCell>
          <TableCell className={task.done ? 'line-through' : ''}>
            {task.title}
          </TableCell>
          <TableCell className="text-right">
            <button
              className="hover:scale-110 pt-1 mr-2"
              onClick={() => deleteTask(task.id)}>
              <FaEdit size={24} />
            </button>
            <button
              className="text-red-500 hover:scale-110"
              onClick={() => deleteTask(task.id)}>
              <FaTrashAlt size={23} />
            </button>
          </TableCell>
        </>
      )}
      {!isEditing && (
        <>
          <TableCell colSpan={2}>
            <div className="flex gap-1">
              <Input value={task.title} className="" />
              <button className="text-primary">
                <FaSave size={30} />
              </button>
              <button className="text-red-400">
                <MdOutlineCancel size={33} />
              </button>
            </div>
          </TableCell>
        </>
      )}
    </TableRow>
  );
}

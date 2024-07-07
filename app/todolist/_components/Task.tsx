'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { TableCell, TableRow } from '@/components/ui/table';
import { deleteTask, toggleTask, updateTask } from '@/lib/actions/todolist';
import { zodResolver } from '@hookform/resolvers/zod';
import { Tasks } from '@prisma/client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEdit, FaSave, FaTrashAlt } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';
import { z } from 'zod';

type Props = {
  task: Tasks;
};

const FormSchema = z.object({
  task: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

export default function Task({ task }: Props) {
  const [isEditing, setIsEditing] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      task: task.title,
    },
  });

  const handleCancelUpdate = () => {
    form.reset();
    setIsEditing(false);
  };

  const onSubmit = async (data: z.infer<typeof FormSchema>): Promise<void> => {
    console.log(data);
    updateTask(task.id, data.task);
    setIsEditing(false);
  };

  return (
    <TableRow key={task.id}>
      {!isEditing && (
        <>
          <TableCell>
            <Checkbox
              onCheckedChange={() => toggleTask(task.id)}
              checked={task.done}
            />
          </TableCell>
          <TableCell className={task.done ? 'line-through' : ''}>
            {task.title}
          </TableCell>
          <TableCell className="text-right">
            <button
              className="hover:scale-110 pt-1 mr-2"
              onClick={() => setIsEditing(true)}>
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
      {isEditing && (
        <>
          <TableCell colSpan={3} className="">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="">
                <div className="flex gap-1">
                  <FormField
                    control={form.control}
                    name="task"
                    render={({ field }) => <Input {...field} className="" />}
                  />
                  <button type="submit" className="text-primary">
                    <FaSave size={30} />
                  </button>
                  <button className="text-red-400">
                    <MdOutlineCancel
                      onClick={() => handleCancelUpdate()}
                      size={33}
                    />
                  </button>
                </div>
              </form>
            </Form>
          </TableCell>
        </>
      )}
    </TableRow>
  );
}

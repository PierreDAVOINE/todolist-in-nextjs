'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type Props = {};

const formSchema = z.object({
  task: z.string().min(2, {
    message: 'Ta tâche doit comporter au moins 2 caractères !',
  }),
});

export default function TodoForm({}: Props) {
  const [tasks, setTasks] = useState<string[]>(['']);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setTasks([...tasks, values.task]);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="task"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nouvelle tâche</FormLabel>
                <FormControl>
                  <Input placeholder="Apprendre NextJS" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button type="submit">Ajouter</Button>
          </div>
        </form>
      </Form>

      <div>
        <ul>
          {tasks.map((task, index) => (
            <li className="px-6 py-4" key={index}>
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

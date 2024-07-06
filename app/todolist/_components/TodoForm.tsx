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
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { addTodo } from '../../../lib/actions/todolist';

type Props = {};

const formSchema = z.object({
  task: z.string().min(2, {
    message: 'Ta tâche doit comporter au moins 2 caractères !',
  }),
});

export default function TodoForm({}: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await addTodo(values.task);
    form.reset();
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
    </div>
  );
}

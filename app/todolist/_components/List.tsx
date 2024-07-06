import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { prisma } from '@/lib/prisma';
import Task from './Task';

type Props = {};

export default async function List({}: Props) {
  const tasks = await prisma.tasks.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">Status</TableHead>
          <TableHead className="text-center">Tâches</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </TableBody>
    </Table>
  );
}

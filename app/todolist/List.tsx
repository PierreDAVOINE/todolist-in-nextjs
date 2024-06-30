import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { prisma } from '@/lib/prisma';

type Props = {};

export default async function List({}: Props) {
  const tasks = await prisma.tasks.findMany();

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
          <TableRow key={task.id}>
            <TableCell className="font-medium flex justify-start items-center">
              <Checkbox id="test" checked={task.done} />
            </TableCell>
            <TableCell>{task.title}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

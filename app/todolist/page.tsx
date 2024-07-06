import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import List from './_components/List';
import TodoForm from './_components/TodoForm';

type Props = {};

export default function todo({}: Props) {
  return (
    <div className="h-screen font-sans flex justify-center items-center">
      <Card className="w-[500px] shadow-md">
        <CardHeader>
          <CardTitle>To do list</CardTitle>
        </CardHeader>
        <CardContent>
          <TodoForm />
          <List />
        </CardContent>
      </Card>
    </div>
  );
}

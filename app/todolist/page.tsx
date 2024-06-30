import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import List from './List';
import TodoForm from './TodoForm';

type Props = {};

export default function todo({}: Props) {
  return (
    <div className="h-screen font-sans flex justify-center items-center">
      <Card className="w-96 shadow-md">
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

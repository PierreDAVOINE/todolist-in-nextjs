import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TodoForm from './TodoForm';

type Props = {};

export default function todo({}: Props) {
  return (
    <div className="h-screen font-sans flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>To do list</CardTitle>
        </CardHeader>
        <CardContent>
          <TodoForm />
        </CardContent>
      </Card>
    </div>
  );
}

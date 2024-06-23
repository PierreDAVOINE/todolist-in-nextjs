import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaArrowCircleRight } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="h-screen flex flex-col gap-6 justify-center items-center font-sans">
      <h1 className="text-2xl ">Welcome to the best todo list app !</h1>
      <Button className="text-3xl py-9 px-9" asChild>
        <Link href="/todolist">
          Go to my todo-list
          <FaArrowCircleRight className="ml-6" />
        </Link>
      </Button>
    </main>
  );
}

import AddTodo from "@/components/shared/AddTodo";
import Todo from "@/components/shared/Todo";
import { prisma } from "@/utils/prisma";


async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc"
    },
  });
  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-3xl font-extrabold uppercase">
        To-Do-app
      </span>
      <h1 className="text-3xl font-extrabold uppercase mb-5 mx-auto">
        CRUD {" "}
        <span className="text-orange-700">Prisma-MongoDb</span>
      </h1>
      <div className="flex justify-center flex-col items-center w-[1000px] px-8 rounded-xl">
      <AddTodo/>
      <div className="flex flex-col gap-5 items-center justify-center mb-10 px-8 ">
        {data.map((todo, id)=>(
          <div className="flex w-full px-8 mt-3 
          " key={id}>
            <Todo todo={todo}/>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

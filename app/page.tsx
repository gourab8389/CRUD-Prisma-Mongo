import AddTodo from "@/components/shared/AddTodo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-3xl font-extrabold uppercase">
        To-Do-app
      </span>
      <h1 className="text-3xl font-extrabold uppercase mb-5 mx-auto">
        CRUD {" "}
        <span className="text-orange-700">Prisma-MongoDb</span>
      </h1>
      <div className="flex justify-center flex-col items-center w-[1000px]">
      <AddTodo/>
      </div>
    </div>
  );
}

import { AiOutlineCheckCircle } from "react-icons/ai"
import Button from "../ui/Button"
import Input from "../ui/Input"
import { changeStatus } from "@/app/actions/todoAction"
import { todoType } from "@/types/todoTypes"


const ChangeTodo = ({todo}: {todo: todoType}) => {
  return (
    <form action={changeStatus}>
       <Input
       name="inputId"
       value={todo.id}
       type="hidden"
       /> 
       <Button actionButton  type="submit" text={<AiOutlineCheckCircle/>} />
    </form>
  )
}

export default ChangeTodo

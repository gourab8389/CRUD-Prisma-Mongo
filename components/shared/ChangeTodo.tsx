import { AiOutlineCheckCircle } from "react-icons/ai"
import Button from "../ui/Button"
import Input from "../ui/Input"
import { changeStatus } from "@/app/actions/todoAction"


const ChangeTodo = ({todo}) => {
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

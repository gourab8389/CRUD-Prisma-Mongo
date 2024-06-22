import React from 'react'
import Form from '../ui/Form'
import { deleteTodo } from '@/app/actions/todoAction'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { BsFillTrashFill } from 'react-icons/bs'
import { todoType } from '@/types/todoTypes'

const DeleteTodo = ({todo}:{todo: todoType}) => {
  return (
   <Form
   action={deleteTodo}
   >
    <Input
    type='hidden'
    name='inputId'
    value={todo.id}
    />

    <Button
    actionButton
    text={<BsFillTrashFill/>}
     type ="submit"  
    />
   </Form>
  )
}

export default DeleteTodo

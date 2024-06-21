import Form from '../ui/Form'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { create } from '@/app/actions/todoAction'

const AddTodo = () => {
  return (
    <Form action={create} className='w-1/2 m-auto px-8'>
        <div className="flex">
            <Input name='input' type='text' placeholder='Add Todo..'/>
            <Button type='submit' text="Add"/>
        </div>
    </Form>
  )
}

export default AddTodo

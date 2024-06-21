"use client"

import { ReactNode, useRef } from "react"

interface FromProps {
  children: ReactNode;
  action: (formData: FormData)=> Promise<void | boolean>;
  className?: string;
  onSubmit?: ()=> void;

}

const Form = ({children, action, className, onSubmit}:FromProps) => {
  const ref = useRef<HTMLFormElement>(null)
  return (
    <form
    className={className}
    onSubmit={onSubmit}
    ref={ref}
    action={async (formData) => {
      await action(formData)
      ref.current?.reset()
    }}
     >
      {children}
      </form>
  )
}

export default Form

"use ckient"
import clsx from "clsx"
import { ReactNode } from "react"
import { FiMenu } from "react-icons/fi"

interface ButtonProps {
  type? : "button" | "submit" | "reset"
  text: string | ReactNode
  onClick?: () => void
  actionButton?: boolean


}

const Button = ({type, text, onClick,actionButton }: ButtonProps) => {
  return (
    <>
    <button onClick={onClick} type={type} className={clsx(
      actionButton && "bg-orange-700 rounded-full p-2 text-white ",
      "bg-orange-700 px-2 text-white rounded-md"
    )}>
      {text}
    </button>
    </>
    
  )
}

export default Button

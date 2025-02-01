/* eslint-disable prettier/prettier */
import { cn } from '@/app/lib/utils'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'bg-secondary border border-primary py-3 px-4 rounded-lg text-primary flex justify-center items-center gap-2 hover:bg-primary hover:text-secondary transition-all disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </button>
 
)
}
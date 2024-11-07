import React, { useState } from 'react';
import FormModal from '../FormModal';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showForm?: boolean;
}

const variants = {
  primary: 'bg-primary text-white hover:bg-primary/90',
  secondary: 'bg-secondary text-white hover:bg-secondary/90',
  outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
};

const sizes = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-4 text-base',
  lg: 'h-11 px-8 text-lg'
};

const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, asChild = false, variant = 'primary', size = 'md', className = '', showForm = false, onClick, ...props }, ref) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (showForm) {
        e.preventDefault();
        setIsModalOpen(true);
      }
      onClick?.(e);
    };

    return (
      <>
        <button
          ref={ref}
          onClick={handleClick}
          className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
          {...props}
        >
          {children}
        </button>
        <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </>
    );
  }
);

Button.displayName = 'Button';

export { Button };
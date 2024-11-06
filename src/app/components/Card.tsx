import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className = '', children }: CardProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
}

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export function CardHeader({ className = '', children }: CardHeaderProps) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

export function CardTitle({ className = '', children }: CardTitleProps) {
  return <h3 className={`text-2xl font-semibold ${className}`}>{children}</h3>;
}

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

export function CardContent({ className = '', children }: CardContentProps) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
}

interface CardDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

export function CardDescription({ className = '', children }: CardDescriptionProps) {
  return <p className={`text-sm text-gray-500 dark:text-gray-400 ${className}`}>{children}</p>;
}

// New CardFooter component
interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
}

export function CardFooter({ className = '', children }: CardFooterProps) {
  return <div className={`p-6 pt-0 border-t border-gray-200 dark:border-gray-700 ${className}`}>{children}</div>;
}

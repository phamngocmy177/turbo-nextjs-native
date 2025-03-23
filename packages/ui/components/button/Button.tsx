import * as React from 'react'
import { Button as TamaguiButton } from 'tamagui'

interface SimpleButtonProps {
  title?: string;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ title, className, onClick }: SimpleButtonProps) => {
  return (
    <TamaguiButton 
      className={className} 
      onPress={onClick}
    >
      {title}
    </TamaguiButton>
  );
}

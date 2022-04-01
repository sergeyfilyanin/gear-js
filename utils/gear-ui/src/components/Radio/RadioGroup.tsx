import { InputHTMLAttributes } from 'react';
import { Radio, RadioProps } from './Radio';

interface RadioGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  buttons: RadioProps[];
}

const RadioGroup = ({ buttons, value, ...attrs }: RadioGroupProps) => {
  const getButtons = () =>
    buttons.map((button, index) => {
      const checked = value === button.value;
      const buttonAttrs = value ? { ...button, checked } : button;

      return <Radio key={index} {...{ ...buttonAttrs, ...attrs }} />;
    });

  return <>{getButtons()}</>;
};

export { RadioGroup, RadioGroupProps };
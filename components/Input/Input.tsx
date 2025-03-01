import React from "react";
import { styled } from "../../stitches.config";
import Label from "../Label";

type LabelProps = Parameters<typeof Label>[0];
type InputContainerProps = Omit<Parameters<typeof InputContainer>[0], 'css' | 'error'>

export interface IInputProps extends InputContainerProps, LabelProps {
}

const Input = ({ label, description, required, error, ...props }: IInputProps) => {
  return (
    <Label 
      label={label} 
      description={description}
      required={required}
      error={error}
    >
      <InputContainer 
        {...props }
        error={!!error}
      />
    </Label>
  );
}

const InputContainer = styled("input", {
  fontFamily: "$sans",
  display: "flex",
  flex: 1,
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "$forest",
  height: '$10',
  py: 0,
  px: '$3',
  fontSize: "$base",
  color: "$forest",
  outline: "none",
  transition: "all 0.2s ease-in-out",
  background: "transparent",
  "&:focus": {
    boxShadow: "0px 0px 0px 1px $colors$forest",
  },
  "&::placeholder": {
    color: "$forest",
    fontStyle: "italic",
    opacity: 0.75,
    fontWeight: 200,
  },
  variants: {
    disabled: {
      true: {
        borderColor: "$wheat",
        cursor: "not-allowed",
        backgroundColor: "#FFEED9",
        "&:focus": {
          boxShadow: "none",
        },
      },
    },
    error: {
      true: {
        borderColor: "#FF0000",
        "&:focus": {
          boxShadow: "0px 0px 0px 1px #FF0000",
        },
      },
    },
  },
});

export default Input;

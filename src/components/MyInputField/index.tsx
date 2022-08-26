import { FormLabel, makeStyles, TextField } from "@material-ui/core";
import React from "react";

type MyInputFieldProps = {
  labelText: string;
  labelClass: string;
  name: string;
  value?: string;
  width?: string;
  helperText: string;
  error: boolean;
  required: boolean;
  textFieldClass: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const useStyles = makeStyles({
  LeftLevel: {
    gridColumn: "1/2",
    color: "black",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
    width: "100px",
  },
  RightLevel: {
    gridColumn: "6/7",
    color: "black",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
  },
  inputField: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "2/4",
  },
  inputFieldLarge: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "2/6",
  },
  inputFieldRight: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "7/9",
  },
  errorMessage: {
    Color: "red",
    padding: "10px",
  },
});

const MyInputField: React.FC<MyInputFieldProps> = (props) => {
  const {
    labelText,
    labelClass,
    name,
    value,
    width,
    required,
    error,
    helperText,
    textFieldClass,
    handleChange,
  } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <FormLabel className={labelClass}>{labelText}</FormLabel>
      <TextField
        name={name}
        value={value}
        required={required}
        InputProps={{
          disableUnderline: true,
          style: { fontSize: "12px", padding: "0px 10px" },
        }}
        className={textFieldClass}
        onChange={handleChange}
        helperText={helperText}
        error={error}
      />
    </React.Fragment>
  );
};

export default MyInputField;

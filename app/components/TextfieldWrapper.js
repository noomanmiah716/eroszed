import { TextField } from "@mui/material";
import { useField, ErrorMessage } from "formik";

function TextfieldWrapper({ name, ...props }) {
  const [field, meta] = useField(name);

  const configTextfield = {
    ...field,
    ...props,
    fullWidth: true,
    variant: "outlined",
    // variant: "filled",
    color: "warning",
    // helperText: helpertext,
  };

  // if (meta && meta.touched && meta.error) {
  //   configTextfield.error = true;
  //   configTextfield.helperText = meta.error;
  // }

  return (
    <TextField
      {...configTextfield}
      className="bg-white rounded"
      InputProps={{
        style: {
          height: "42px", // Custom height
        },
      }}
      sx={{
        "& label.Mui-focused": {
          color: "#f3b917",
        },
        "& .MuiInputBase-input": {
          padding: "20px 10px", // Adjust padding inside the input
        },
        "& .MuiInputLabel-root": {
          top: "8px", // Adjust placeholder's vertical position
          left: "18px", // Adjust placeholder's horizontal position
        },
        "& .MuiInputLabel-shrink": {
          transform: "translate(0, -4px) scale(0.75)", // Adjust when focused or filled
        },
      }}
    />
  );

  // <p className="absolute -bottom-4 text-red-600 text-xs">
  //         <ErrorMessage {...props} />
  //       </p>
}

export default TextfieldWrapper;

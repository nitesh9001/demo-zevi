import { CircularProgress } from "@mui/material";
import React from "react";

const Spinner = () => {
  return (
    <div>
      <CircularProgress
        style={{
          position: 'fixed',
          left: '50%',
          top: '50%',
          color: "black"
        }}
      />
    </div>
  );
};
export default Spinner;
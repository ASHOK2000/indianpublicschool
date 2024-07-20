import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export default function Alerts({ message, type }) {
  const alertType = type || "error";

  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity={alertType}>
        <AlertTitle>
          {alertType.charAt(0).toUpperCase() + alertType.slice(1)}
        </AlertTitle>
        {message}
      </Alert>
    </Stack>
  );
}

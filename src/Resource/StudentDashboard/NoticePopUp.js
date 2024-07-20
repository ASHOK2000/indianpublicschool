import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
} from "mdb-react-ui-kit";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
export default function NoticeModel({
  title = "",
  description = "",
  CentredModal = "",
}) {
  const [centredModal, setCentredModal] = useState(false);

  const toggleOpen = () => setCentredModal(!centredModal);

  useEffect(() => {
    toggleOpen();
  }, [CentredModal]);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 128,
        },
      }}>
      <MDBBtn
        onClick={toggleOpen}
        style={{ maxHeight: "35px", maxWidth: "28rem" }}>
        {title}
      </MDBBtn>

      <MDBModal tabIndex="-1" open={centredModal} setOpen={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{title}</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <Paper elevation={3}>
        <p>
          {description}
          LinkContainerfdjsdklfjdakfjdsafkjskdjfklaLinkContainerfdjsdklfjdakfjdsafkjskdjfklaLinkContainerfdjsdklfjdakfjdsafkjskdjfklaLinkContainerfdjsdklfjdakfjdsafkjskdjfklaLinkContainerfdjsdklfjdakfjdsafkjskdjfklaLinkContainerfdjsdklfjdakfjdsafkjskdjfklaLinkContainerfdjsdklfjdakfjdsafkjskdjfklaLinkContainerfdjsdklfjdakfjdsafkjskdjfkla
        </p>
      </Paper>
    </Box>
  );
}

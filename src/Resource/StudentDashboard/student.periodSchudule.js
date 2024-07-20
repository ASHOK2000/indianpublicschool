import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
} from "mdb-react-ui-kit";

export default function PeriodSchedule() {
  const [justifyActive, setJustifyActive] = useState("");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <div
      className="gradient-custom-2  shadow p-1 mb-1 bg-white rounded "
      style={{ minHeight: "40rem" }}>
      <MDBRow
        style={{ backgroundColor: "#365486", color: "#f0f0f0" }}
        className="justify-content-center align-items-center rounded p-1 h4">
        Directory
      </MDBRow>{" "}
      <>
        <MDBTabs justify className="mb-1  shadow   bg-white rounded ">
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab1")}
              active={justifyActive === "tab1"}>
              Monday
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab2")}
              active={justifyActive === "tab2"}>
              Tuesday
            </MDBTabsLink>
          </MDBTabsItem>

          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab3")}
              active={justifyActive === "tab3"}>
              Wednesday{" "}
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab4")}
              active={justifyActive === "tab4"}>
              thursday{" "}
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab5")}
              active={justifyActive === "tab5"}>
              Friday{" "}
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab6")}
              active={justifyActive === "tab6"}>
              saturday{" "}
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        {
          <MDBRow className="justify-content-center align-items-center rounded p-1 h4">
            No Data Found
          </MDBRow>
        }
        {/* <MDBTabsContent>
          <MDBTabsPane open={justifyActive === "tab1"}>
            Tab 1 contab 1 contab 1 contab 1 contab 1 contab 1 contab 1 contab 1
            contab 1 contab 1 contab 1 contab 1 contab 1 contab 1 contab 1
            contab 1 content
          </MDBTabsPane>
          <MDBTabsPane open={justifyActive === "tab2"}>
            Tab 1{" "}
            <MDBRow className="h3  mt-5 gray justify-content-center  text-monospace text-secondary">
              No Period schedule available.
            </MDBRow>
            content
          </MDBTabsPane>
          <MDBTabsPane open={justifyActive === "tab3"}>
            Tab 2 content
          </MDBTabsPane>
          <MDBTabsPane open={justifyActive === "tab4"}>
            Tab 1 content
          </MDBTabsPane>
          <MDBTabsPane open={justifyActive === "tab5"}>
            Tab 2 content
          </MDBTabsPane>
          <MDBTabsPane open={justifyActive === "tab6"}>
            Tab 3 content
          </MDBTabsPane>
        </MDBTabsContent> */}
      </>{" "}
    </div>
  );
}

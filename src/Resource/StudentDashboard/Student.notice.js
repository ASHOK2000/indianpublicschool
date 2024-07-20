import React, { useEffect, useState } from "react";
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBModalContent,
  MDBModalDialog,
  MDBModalTitle,
} from "mdb-react-ui-kit";
import ListGroup from "react-bootstrap/ListGroup";

import { NoticeRequest } from "../../Interface/Request/INoticeRequest";
import CommonService from "../../CommonService/CommonService";
import { Container } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import ListSkeleton from "../../Loaders/ListSkeleton";
import "../../css/Notice.Student.css";
import { MDBModalHeader } from "mdbreact";

function StudentNotice() {
  const [notice, setNotice] = useState(NoticeRequest);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await CommonService.findAll("notice/getAll");
        setNotice(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    return () => {};
  }, []);

  async function updateNotice(uuid) {
    try {
      const NoticeByUuid = await CommonService.findById("notice", uuid);

      navigate("/admin/notice-post", { state: { NoticeByUuid } });
    } catch (error) {
      console.log(error, "Error fetching");
    }
  }

  return (
    <>
      <MDBListGroup light className="NoticeList">
        {notice && notice.results ? (
          notice.results.map((item, index) => (
            <ListGroup as="ol" key={index}>
              <ListGroup.Item as="li">{item.title}</ListGroup.Item>{" "}
            </ListGroup>
          ))
        ) : (
          <div style={{ width: "100%" }}>
            {/* Pass the variants array as a prop */}
            <ListSkeleton />
          </div>
        )}
      </MDBListGroup>
    </>
  );
}

export default StudentNotice;

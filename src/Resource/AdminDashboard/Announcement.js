import React, { useEffect, useState } from "react";
import { MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { NoticeRequest } from "../../Interface/Request/INoticeRequest";
import CommonService from "../../CommonService/CommonService";
import { Container } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import ReadMoreText from "../../CommonService/ReadMore";
import { useNavigate } from "react-router-dom";
import ListSkeleton from "../../Loaders/ListSkeleton";

function Announcement() {
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

  async function DeleteNotice(uuid) {
    try {
      const DeleteNotice = await CommonService.delete("notice", uuid);
      console.log(DeleteNotice, "notice Deleted by Id");
      if (DeleteNotice) {
        alert("Notice deleted");
      }
    } catch (error) {
      console.error(error, "Error deleting Notice");
    }
  }

  return (
    <Container>
      <div className="searchbar">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 1,
            m: 1,
            // bgcolor: "background.paper",
            borderRadius: 1,
          }}>
          <p> </p>
          {/* added a blank space for align right */}
          <div>
            <Button
              component={Link}
              to="/admin/notice-post"
              variant="contained"
              onClick={() => {}}
              startIcon={<AddIcon />}>
              Announcement
            </Button>
          </div>
        </Box>
      </div>

      <MDBListGroup style={{ minWidth: "15rem" }} light>
        {notice && notice.results ? (
          notice.results.map((item, index) => (
            <MDBListGroupItem className="mb-2" key={index}>
              <div className="row">
                <div className="col-10">
                  <div>
                    <div className="fw-bold">{item.title}</div>

                    <div className="">
                      <ReadMoreText text={item.description} wordLimit={18} />
                    </div>
                  </div>
                </div>
                <div className="col-2 d-flex">
                  <div className="p-4">
                    <EditIcon onClick={() => updateNotice(item.uuid)} />
                  </div>
                  {/* <div className="p-4">
                    <VisibilityIcon />
                  </div> */}
                  <div className="p-4">
                    <DeleteIcon onClick={() => DeleteNotice(item.uuid)} />
                  </div>
                </div>
              </div>
            </MDBListGroupItem>
          ))
        ) : (
          <div style={{ width: "100%" }}>
            {/* Pass the variants array as a prop */}
            <ListSkeleton />
          </div>
        )}
      </MDBListGroup>
    </Container>
  );
}

export default Announcement;

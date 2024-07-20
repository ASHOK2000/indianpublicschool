import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "react-bootstrap";
import { tabsClasses } from "@mui/material/Tabs";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const paragraphText = `
<ol>
  <li>Complete the online application form.</li>
  <li>
    Please ensure that the following documents are uploaded while filling the online application form :
    <ul>
      <li>* Photocopy of the student’s birth certificate and Aadhaar Card (if applicable).</li>
      <li>* School leaving certificate (can be submitted later if not currently available).</li>
      <li>* UDISE Number (Unified District Information System for Education) from the current school.</li>
      <li>* Photocopy of the previous and current class Report Card.</li>
      <li>* Photocopy of Address proof and Parent's Pan Card.</li>
      <li>* Passport size photograph of the student.</li>
    <li></li>
      </ul>
  </li>
  <li>
    After submitting the online application form, if there are seats available in the standard that you have applied in, an email with a payment link for the first term fees will be sent to you. Parents are requested to make the necessary payment online.
  </li>
</ol>
`;

export default function AdmissionProcess() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          // allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}>
          <Tab label="Online Admission Process" {...a11yProps(0)} />
          <Tab label="Offline Admission Process" {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <p dangerouslySetInnerHTML={{ __html: paragraphText }} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <p dangerouslySetInnerHTML={{ __html: paragraphText }} />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}

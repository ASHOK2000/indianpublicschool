import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

function TypographyDemo(props) {
  const { loading = false, variants } = props;

  return (
    <div style={{ width: "100%" }}>
      {variants.map((variant) => (
        <Typography
          component="div"
          key={variant}
          variant={variant}
          style={{ width: "100%" }}>
          {<Skeleton />}
        </Typography>
      ))}
    </div>
  );
}

TypographyDemo.propTypes = {
  loading: PropTypes.bool,
  variants: PropTypes.array.isRequired,
};

export default function ListSkeleton() {
  // Specify the variants you want to use in this component
  const myVariants = ["h3", "h3", "h3", "h3", "h3"];
  return (
    <div style={{ width: "100%" }}>
      {/* Pass the variants array as a prop */}
      <TypographyDemo loading variants={myVariants} />
    </div>
  );
}

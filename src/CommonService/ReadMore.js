import React, { useState } from "react";

const ReadMoreText = ({ text = "", wordLimit }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const words = text.split(" ");
  const truncatedText = isTruncated
    ? words.slice(0, wordLimit).join(" ")
    : text;
  const shouldShowReadMore = words.length > wordLimit;

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div>
      <span>{truncatedText}&nbsp;&nbsp;&nbsp;</span>
      {shouldShowReadMore && (
        <a
          onClick={toggleTruncate}
          style={{ color: "blue", cursor: "pointer" }}>
          {isTruncated ? "read more..." : "read less..."}
        </a>
      )}
    </div>
  );
};

export default ReadMoreText;

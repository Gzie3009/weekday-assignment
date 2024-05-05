import React, { useState } from "react";

const ReadMore = ({ text }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div>
      {isTruncated ? (
        <div className="relative">
          <p className="z-0">{text && text.slice(0, 370)}</p>
          <button
            className="py-4 pt-20 -mt-20 w-full bottom-10 text-blue-500 bg-gradient-to-t from-white via-white to-transparent"
            onClick={toggleTruncate}
          >
            View Job
          </button>
        </div>
      ) : (
        <>
          <p className="py-4">
            {text}{" "}
            <button className="text-blue-500" onClick={toggleTruncate}>
              Read less
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default ReadMore;

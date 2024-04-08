import React from "react";
import Image from "next/image";
import Background from "../../public/e-background.png";

function header() {
  return (
    <>
      <div>
        <div>
          <Image
            src={Background}
            alt="background"
            style={{
              width: "100%",
              height: "auto",
            }}
            objectFit="cover"
          />
        </div>
      </div>
    </>
  );
}

export default header;

import React from "react";
import Header from "./header";
import Form from "./Form";

export default function JeSuisCentre() {
  return (
    <>
      <div className="flex flex-col">
        <div className="">
          <Header></Header>
        </div>
        <div className="">
          <Form></Form>
        </div>
      </div>
    </>
  );
}

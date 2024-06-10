import React from "react";
import BackProf from "./section1";
import Formprof from "./Formprof";

const Form = () => {
  return (
    <div>
      <div className="mb-36">
        <BackProf />{" "}
      </div>
      <div className="bg-Apropo p-16 m-12 rounded-xl">
        <Formprof />
      </div>
    </div>
  );
};

export default Form;

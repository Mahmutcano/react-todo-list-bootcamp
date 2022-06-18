import React from "react";

const Title = (props) => {
  return (
    <>
      <p className="mt-2 text-center text-xl font-bold text-brand-pink">
        {props.title}
      </p>
    </>
  );
};

export default Title;

import React from "react";
import Body from "../../components/Body";
export default function SmarterWay({ data }) {
  return (
    <>
      <Body data={data.header} />

      <div>
        <h3 className="text-2xl sm:text-3xl font-light mb-10">
          Here is what we provide:
        </h3>
      </div>

      {data.providedValues.map((data, i) => (
        <Body key={i} data={data} />
      ))}
    </>
  );
}

import React from "react";
import Body from "../../components/Body";
export default function SmarterWay({ data }) {
  return (
    <>
      <Body data={data.header} />

      <div>
        <h3 className="text-2xl  sm:text-3xl font-medium mb-4">
          {data.text}
        </h3>
      </div>

      <div className="" >
        {data.providedValues.map((data, i) => (
          <Body key={i} data={data} />
        ))}
      </div>
    </>
  );
}

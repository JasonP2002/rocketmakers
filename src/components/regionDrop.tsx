import * as React from "react";

interface IOption {
  value: string;
  label: string;
}

export const RegionDrop = () => {
  const [region, setRegion] = React.useState("EUW2");

  const options: IOption[] = [
    { value: "Select", label: "Select..." },
    { value: "EUW2", label: "EUW2" }
  ];

  return (
    <div className="region-layout">
      <label htmlFor="Region">Choose a Region: </label>
      <select
        className="region"
        name="region"
        id="region"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      >
        {options.map((o) => (
          <option value={o.value}>{o.label}</option>
        ))}
      </select>{" "}
    </div>
  );
};

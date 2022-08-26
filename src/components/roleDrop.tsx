import "../styles.css";
import * as React from "react";

interface IOption {
  value: string;
  label: string;
}

interface IRoleDrop {
  roleIndex: number;
  roles: string[];
  setRoles: (x: string[]) => void;
}

export const RoleDrop = (props: IRoleDrop) => {
  const options: IOption[] = [
    { value: "Top", label: "Top" },
    { value: "Mid", label: "Mid" },
    { value: "Carry", label: "Carry" },
    { value: "Support", label: "Support" },
    { value: "Jungle", label: "Jungle" }
  ];

  const replaceItemsAtIndex = (
    items: string[],
    newIndex: number,
    newItem: string
  ) => {
    return items.map((item, idx) => (idx === newIndex ? newItem : item));
  };

  return (
    <div>
      <label htmlFor="Role">Role:</label>
      <select
        className="role"
        name="role"
        id="role"
        value={props.roles[props.roleIndex]}
        onChange={(e) =>
          props.setRoles(
            replaceItemsAtIndex(props.roles, props.roleIndex, e.target.value)
          )
        }
      >
        {options.map((o) => (
          <option value={o.value}>{o.label}</option>
        ))}
      </select>{" "}
    </div>
  );
};

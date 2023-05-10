import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
export default function DropDown() {
  const options = ["one", "two", "three"];
  return (
    <div className="container-dropdown">
      <label className="select-dropdown">
        <select className="select-option">
          <option value="option-1">Option 1</option>
          <option value="option-2">Option 2</option>
          <option value="option-3">Option 3</option>
          <option value="option-4">Option 4</option>
          <option value="option-5">Option 5</option>
        </select>
      </label>
    </div>
  );
}

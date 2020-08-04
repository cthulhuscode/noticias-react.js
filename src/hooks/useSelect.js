import React, { useState } from "react";

const useSelect = (initialState, options) => {
  // State
  const [state, setState] = useState(initialState);

  const SelectNews = () => (
    <select
      className="browser-default"
      onChange={(e) => setState(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );

  return [state, SelectNews];
};

export default useSelect;

import React, { useRef } from "react";
import Input from "../UI/Input/input";

const MealItemForm = ({id}) => {
  const inputref = useRef(null);

  return (
    <form>
      <button>+</button>
      <Input
        ref={inputref}
        input={{
          id: "amount_" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>-</button>
    </form>
  );
};

export default MealItemForm;

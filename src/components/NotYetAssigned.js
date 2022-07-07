import React from "react";

const NotYetAssigned = ({ registry }) => {
  return (
    <div className="sticky">
      <h1>Not Yet Assigned:</h1>
      {registry.map((item) => {
        return (
          <div key={item.id}>{!item.assignedTo && <p>{item.name}</p>}</div>
        );
      })}
    </div>
  );
};

export default NotYetAssigned;

import React from "react";

const AssignedList = ({ registry }) => {
  return (
    <div className="sticky">
      <h1>Assigned:</h1>
      {registry.map((item) => {
        return (
          <div key={item.id}>
            {item.assignedTo && (
              <p className="is-assigned">
                {item.name} - {item.assignedTo}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AssignedList;

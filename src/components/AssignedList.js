import React from "react";

const AssignedList = ({ registry }) => {
  return (
    <div className="sticky">
      <h1>Assigned to:</h1>
      {registry.map((item) => {
        return (
          <div key={item.id}>
            {item.assignedTo && (
              <>
                <p>
                  {item.name} - {item.assignedTo}
                </p>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AssignedList;

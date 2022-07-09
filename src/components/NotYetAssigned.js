import React from "react";

const NotYetAssigned = ({ registry }) => {
  const sortedByName = [...registry].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="sticky">
      <h1>Not Yet Assigned:</h1>
      {sortedByName.map((item) => {
        const price = item.price.toFixed(2);
        return (
          <div className="flex" key={item.id}>
            {!item.assignedTo && (
              <p className="not-assigned">
                {item.name} - ${price}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default NotYetAssigned;

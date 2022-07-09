import React from "react";
import AttendeeList from "./AttendeeList";

const ItemList = ({ items, assignees, handleAssign }) => {
  return (
    <>
      <div className="item-list">
        {items.map((item) => {
          const price = item.price.toFixed(2);
          return (
            <div
              key={item.id}
              className={
                item.assignedTo
                  ? "assigned item-list__container"
                  : "item-list__container"
              }
            >
              <p className="item-list__name">{item.name}</p>
              <p className="item-list__price">${price}</p>
              <AttendeeList
                item={item}
                assignees={assignees}
                handleAssign={handleAssign}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemList;

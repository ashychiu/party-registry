import React from "react";

const ItemList = ({ items, assignees, handleAssign }) => {
  return (
    <>
      <h1>Items</h1>
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
              <p>{item.name}</p>
              <p>${price}</p>
              <select
                name="attendee"
                id="attendee"
                onChange={(event) => handleAssign(item, event)}
              >
                <option defaultValue>Attendee - Budget Room</option>
                {assignees.map((assignee) => {
                  const budgetLeft =
                    assignee.budget - (assignee.budgetUsed || 0);
                  return (
                    <option key={assignee.id} value={assignee.name}>
                      {assignee.name} - ${budgetLeft}
                    </option>
                  );
                })}
              </select>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemList;

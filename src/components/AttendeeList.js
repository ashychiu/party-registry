import React from "react";

const AttendeeList = ({ item, assignees, handleAssign }) => {
  return (
    <>
      <select
        name="attendee"
        id="attendee"
        onChange={(event) => handleAssign(item, event)}
        disabled={!!item.assignedTo}
      >
        <option defaultValue>Attendee - Available Fund</option>
        {assignees.map((assignee) => {
          const budgetLeft = assignee.budget - (assignee.budgetUsed || 0);
          return (
            <option key={assignee.id} value={assignee.name}>
              {assignee.name} - ${budgetLeft}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default AttendeeList;

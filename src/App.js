import React, { useState } from "react";
import "./styles/global.scss";

import AssignedList from "./components/AssignedList";
import NotYetAssigned from "./components/NotYetAssigned";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";

const items = [
  {
    id: 0,
    name: "Disposable camera",
    price: 30.0,
  },
  {
    id: 1,
    name: "Party hats",
    price: 18.0,
  },
  {
    id: 2,
    name: "Soft drinks",
    price: 15.0,
  },
  {
    id: 3,
    name: "Speaker",
    price: 45.0,
  },
  {
    id: 4,
    name: "Cake",
    price: 20.0,
  },
  {
    id: 5,
    name: "Plates",
    price: 10.0,
  },
  {
    id: 6,
    name: "Spoons",
    price: 10.0,
  },
  {
    id: 7,
    name: "Balloons",
    price: 15.0,
  },
  {
    id: 8,
    name: "Confetti",
    price: 5.0,
  },
  {
    id: 9,
    name: "Board game",
    price: 21.0,
  },
  {
    id: 10,
    name: "Hot dogs",
    price: 16.0,
  },
];

const attendees = [
  {
    id: "0",
    name: "Alys",
    budget: 40.0,
  },
  {
    id: "1",
    name: "Soleil",
    budget: 20.0,
  },
  {
    id: "3",
    name: "Tea",
    budget: 80.0,
  },
  {
    id: "4",
    name: "Skyler",
    budget: 30.0,
  },
  {
    id: "5",
    name: "Dracien",
    budget: 28.0,
  },
  {
    id: "6",
    name: "Jude",
    budget: 12.0,
  },
];

function App() {
  const [registry, setRegistry] = useState(items);
  const [assignees, setAssignees] = useState(attendees);

  const handleAssign = (assignedItem, event) => {
    const assignee = assignees.find((attendee) => {
      return attendee.name === event.target.value;
    });
    const budgetRoom = assignee.budget - (assignee.budgetUsed || 0);

    if (assignedItem.price > budgetRoom) {
      alert(
        `${JSON.stringify(assignedItem.name)} is over ${JSON.stringify(
          assignee.name
        )}'s budget!`
      );
      event.target.selectedIndex = 0;
    } else {
      setRegistry((prev) =>
        prev.map((item) => {
          if (item.id === assignedItem.id) {
            const itemCopy = { ...item };
            itemCopy.assignedTo = event.target.value;
            return itemCopy;
          } else {
            return item;
          }
        })
      );
      setAssignees((prev) =>
        prev.map((attendee) => {
          if (attendee.id === assignee.id) {
            const attendeeCopy = { ...attendee };
            attendeeCopy.budgetUsed
              ? (attendeeCopy.budgetUsed += assignedItem.price)
              : (attendeeCopy.budgetUsed = assignedItem.price);
            return attendeeCopy;
          } else {
            return attendee;
          }
        })
      );
    }
  };

  return (
    <>
      <Header />
      <div className="App">
        <ItemList
          items={registry}
          assignees={assignees}
          handleAssign={handleAssign}
        />
        <AssignedList registry={registry} />
        <NotYetAssigned registry={registry} />
      </div>
      <Footer />
    </>
  );
}

export default App;

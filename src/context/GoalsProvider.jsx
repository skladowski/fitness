import { useState } from "react";
import { goalContext } from "./goalContext";
import { Goals } from "../mocks/GoalsData";
export function GoalsProvider({ children }) {
  const [goal, setGoal] = useState(
    localStorage.getItem("goals")
      ? JSON.parse(localStorage.getItem("goals"))
      : Goals,
  );
  return (
    <goalContext.Provider value={{ goal, setGoal }}>
      {children}
    </goalContext.Provider>
  );
}

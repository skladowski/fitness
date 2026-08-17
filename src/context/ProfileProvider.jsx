import { profileContext } from "./ProfileContext";
import { useState } from "react";
import { ProfileData } from "../mocks/ProfileData";
export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(
    localStorage.getItem("profile")
      ? JSON.parse(localStorage.getItem("profile"))
      : ProfileData,
  );
  return (
    <profileContext.Provider value={{ profile, setProfile }}>
      {children}
    </profileContext.Provider>
  );
}

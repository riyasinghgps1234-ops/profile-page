import { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import EditForm from "./EditForm";

/**
 * @typedef {Object} Profile
 * @property {string} name
 * @property {number} age
 * @property {string} profession
 * @property {string} image
 */

export default function App() {
  /** @type {[Profile, Function]} */
  const [profile, setProfile] = useState({
    name: "Riya Singh",
    age: 21,
    profession: "Frontend Developer",
    image: "https://via.placeholder.com/150",
  });

  const [edit, setEdit] = useState(false);

  // 🔥 LOAD DATA FROM localStorage (runs once)
  useEffect(() => {
    const saved = localStorage.getItem("profile");
    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  // 🔥 SAVE DATA TO localStorage (runs on change)
  useEffect(() => {
    localStorage.setItem("profile", JSON.stringify(profile));
  }, [profile]);

  return (
    <div className="container">
      {edit ? (
        <EditForm 
          profile={profile} 
          setProfile={setProfile} 
          setEdit={setEdit} 
        />
      ) : (
        <ProfileCard 
          profile={profile} 
          onEdit={() => setEdit(true)} 
        />
      )}
    </div>
  );
}
export default function ProfileCard({ profile, onEdit }) {
  return (
    <div className="card">
      <h1>👤 My Profile</h1>

      <img src={profile.image} alt="profile" className="profile-img" />

      <p><b>Name:</b> {profile.name}</p>
      <p><b>Age:</b> {profile.age}</p>
      <p><b>Profession:</b> {profile.profession}</p>

      <button onClick={onEdit}>✏️ Edit Profile</button>
    </div>
  );
}
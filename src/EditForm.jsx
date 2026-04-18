import { useState } from "react";

export default function EditForm({ profile, setProfile, setEdit }) {
  const [form, setForm] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: name === "age" ? Number(value) : value,
    });
  };

  // 🔥 IMAGE UPLOAD HANDLER
  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file); // create preview URL

      setForm({
        ...form,
        image: imageUrl,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(form);
    setEdit(false);
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Edit Profile</h2>

      <input name="name" value={form.name} onChange={handleChange} />
      <input name="age" type="number" value={form.age} onChange={handleChange} />
      <input name="profession" value={form.profession} onChange={handleChange} />

      {/* 🔥 Upload Image */}
      <input type="file" accept="image/*" onChange={handleImageUpload} />

      {/* Preview */}
      {form.image && (
        <img src={form.image} alt="preview" className="profile-img" />
      )}

      <button type="submit">Save</button>
    </form>
  );
}
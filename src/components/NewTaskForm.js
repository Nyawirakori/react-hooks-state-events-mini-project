import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    category: categories.find((cat) => cat !== "All") || "", // Initialize with the first category other than "All"
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit(formData);
    setFormData({
      text: "",
      category: categories.find((cat) => cat !== "All") || "", // Reset the form
    });
  };

  const categoryOptions = categories
    .filter((category) => category !== "All")
    .map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ));

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

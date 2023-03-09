import React, { ChangeEvent, FormEvent, useState } from "react";

const initialFormData = {
  title: "",
  description: "",
  jobType: "",
  postedBy: "",
  salary: "",
  experienceLevel: "",
  city: "",
};

const JobForm = () => {
  const [formData, setFormData] = useState(initialFormData);

  const {
    title,
    description,
    jobType,
    postedBy,
    salary,
    experienceLevel,
    city,
  } = formData;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted");
  };
  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <label htmlFor="title" className="job-form__label">
        Title
      </label>
      <input
        className="job-form__input"
        type="text"
        value={title}
        name="title"
        placeholder="Enter title"
        onChange={handleInputChange}
      />

      <label htmlFor="description" className="job-form__label">
        Description
      </label>
      <textarea
        className="job-form__input"
        value={description}
        name="description"
        placeholder="Enter job description"
        onChange={handleTextAreaChange}
      />

      <label htmlFor="jobType" className="job-form__label">
        Job Type
      </label>
      <input
        className="job-form__input"
        value={jobType}
        type="text"
        name="jobType"
        placeholder="Enter job type"
        onChange={handleInputChange}
      />

      <label htmlFor="postedBy" className="job-form__label">
        Posted By
      </label>
      <input
        className="job-form__input"
        type="text"
        value={postedBy}
        name="postedBy"
        placeholder="Enter poster's name"
        onChange={handleInputChange}
      />

      <label htmlFor="salary" className="job-form__label">
        Salary
      </label>
      <input
        className="job-form__input"
        type="text"
        value={salary}
        name="salary"
        placeholder="Enter salary"
        onChange={handleInputChange}
      />

      <label htmlFor="experienceLevel" className="job-form__label">
        Experience Level
      </label>
      <select
        className="job-form__select"
        value={experienceLevel}
        name="experienceLevel"
        onChange={handleSelectChange}
      >
        <option value="entry">Entry</option>
        <option value="intermediate">Intermediate</option>
        <option value="senior">Senior</option>
      </select>

      <label htmlFor="city" className="job-form__label">
        City
      </label>
      <input
        className="job-form__input"
        type="text"
        value={city}
        name="city"
        placeholder="Enter city"
        onChange={handleInputChange}
      />

      <button className="job-form__button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default JobForm;

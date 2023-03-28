import React, { ChangeEvent, FormEvent, useState } from "react";

const initialFormData = {
  keyword: "",
  classification: "",
  city: "",
};

const JobPostSearchForm = () => {
  const [formData, setFormData] = useState(initialFormData);

  const { keyword, classification, city } = formData;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted");
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-form__input"
        name="keyword"
        value={keyword}
        type="text"
        placeholder="Enter keywords"
        onChange={handleInputChange}
      />
      <input
        className="search-form__input"
        name="classification"
        value={classification}
        type="text"
        placeholder="Any classification"
        onChange={handleInputChange}
      />
      <input
        className="search-form__input"
        name="city"
        value={city}
        type="text"
        placeholder="Enter city"
        onChange={handleInputChange}
      />
      <button className="search-form__button" type="submit">
        Search
      </button>
    </form>
  );
};

export default JobPostSearchForm;

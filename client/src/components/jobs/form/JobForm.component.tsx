import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom/";
import { JobFormValues } from "../../../app/models/job.model";
import {
  addJobLoading,
  fetchJobByIdLoading,
  updateJobLoading,
} from "../../../app/stores/jobs/job.action";
import { v4 as uuid } from "uuid";
import "./jobForm.styles.css";
import { selectJobFormData } from "../../../app/stores/jobs/job.selector";
import './jobForm.styles.css'

const JobForm = () => {
  const [formData, setFormData] = useState<JobFormValues>(new JobFormValues());

  const jobFormData = useSelector(selectJobFormData);

  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.id) {
      let newJob = {
        ...formData,
        id: uuid(),
      };

      await dispatch(addJobLoading(newJob)); // Wait for dispatch to complete

      navigate(`/browse-jobs/${newJob.id}`); // Navigate after dispatch is complete
    } else {
      if (id) {
        dispatch(updateJobLoading(formData));
        navigate(`/browse-jobs/${id}`);
      }
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchJobByIdLoading(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (jobFormData) {
      setFormData(new JobFormValues(jobFormData));
    }
  }, [jobFormData]);

  return (
    <div className="job-form-card">
      <div className="job-form-card__header">Job Details</div>
      <div className="job-form-card__content">
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
            <option value="">--- Select Experience Level ---</option>
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
      </div>
    </div>
  );
};

export default JobForm;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/";
import { JobFormValues } from "../../../app/models/job.model";
import { Formik } from "formik";
import {
  addJobLoading,
  fetchJobByIdLoading,
  updateJobLoading,
} from "../../../app/stores/jobs/job.action";
import { v4 as uuid } from "uuid";
import "./jobForm.styles.css";
import { selectJobFormData } from "../../../app/stores/jobs/job.selector";
import "./jobForm.styles.css";
import MyTextInput from "../../../app/common/form/MyTextInput.common";
import MyTextArea from "../../../app/common/form/MyTextArea.common";
import MySelectInput from "../../../app/common/form/MySelectInput.common";
import { experienceLevelOptions } from "../../../app/common/options/experienceLevelOptions.common";

const JobForm = () => {
  const [formData, setFormData] = useState<JobFormValues>(new JobFormValues());

  const jobFormData = useSelector(selectJobFormData);

  const { id } = useParams();

  const dispatch = useDispatch();

  const handleFormSubmit = (job: JobFormValues) => {
    if (!formData.id) {
      let newJob = {
        ...job,
        id: uuid(),
      };

      dispatch(addJobLoading(newJob));
    } else {
      if (id) {
        dispatch(updateJobLoading(job));
      }
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchJobByIdLoading(id));
    }
  }, [id]);

  useEffect(() => {
    if (jobFormData) {
      setFormData(new JobFormValues(jobFormData));
    }
  }, [jobFormData]);

  useEffect(() => {
    setFormData(new JobFormValues());
  }, []);

  return (
    <div className="job-form-card">
      <div className="job-form-card__header">Job Details</div>
      <div className="job-form-card__content">
        <Formik
          enableReinitialize
          initialValues={formData}
          onSubmit={(values) => handleFormSubmit(values)}
        >
          {({ handleSubmit }) => (
            <form
              className="job-form"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <MyTextInput
                name="title"
                placeholder="Enter Title"
                label="Job Title"
                formtype="job-form"
              />

              <MyTextArea
                name="description"
                placeholder="Enter Description"
                label="Job Description"
                formtype="job-form"
                rows={4}
              />

              <MyTextInput
                name="jobType"
                placeholder="Enter Job Type"
                label="Job Type"
                formtype="job-form"
              />

              <MyTextInput
                name="postedBy"
                placeholder="Posted By"
                label="Posted By"
                formtype="job-form"
              />

              <MyTextInput
                name="salary"
                placeholder="Enter Salary"
                label="Job Salary"
                formtype="job-form"
              />

              <MySelectInput
                name="experienceLevel"
                options={experienceLevelOptions}
                placeholder="Experience Level"
                formtype="job-form"
                label="Experience Level"
              />

              <MyTextInput
                name="city"
                placeholder="Enter Location"
                label="Job Location"
                formtype="job-form"
              />

              <button className="job-form__button" type="submit">
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default JobForm;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/";
import { JobFormValues } from "../../../app/models/job.model";
import { Formik, Form } from "formik";
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
import MySubmitButton from "../../../app/common/form/MySubmitButton.common";
import { jobFormValidation } from "../../../app/utils/jobFormValidation.util";

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
    <div className="job-form__container">
      <div className="job-form-card">
        <div className="job-form-card__content">
          <Formik
            enableReinitialize
            validationSchema={jobFormValidation}
            initialValues={formData}
            onSubmit={(values) => handleFormSubmit(values)}
          >
            {({ handleSubmit, isSubmitting, dirty, isValid }) => (
              <Form
                className="job-form"
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <div className="job-form__heading">
                  <div className="job-form__header">Job Details</div>
                  <MySubmitButton
                    buttonType="job-form"
                    label="Submit"
                    disabled={isSubmitting || !dirty || !isValid}
                  />
                </div>
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
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default JobForm;

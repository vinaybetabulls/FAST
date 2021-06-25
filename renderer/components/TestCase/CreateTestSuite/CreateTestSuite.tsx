import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button } from "antd";
import { SubmitButton, Input, Form, Select, FormItem } from "formik-antd";

const validationSchema = Yup.object().shape({
  shortName: Yup.string().required("This field is required"),
  state: Yup.string().required("This field is required"),
  description: Yup.string().required("This field is required"),
});

const initialValues = {
  shortName: "",
  state: "open",
  description: "",
};

type Props = {
  onSubmit: (values: any) => void;
  setOpen: () => void;
};

const CreateTestSuite = (props: Props) => {
  const { onSubmit, setOpen } = props;
  const formikConfig = {
    initialValues,
    validationSchema,
    onSubmit: (values, formikHelpers) => {
      console.log({ onsubmitvalues: values });
      onSubmit(values);
      formikHelpers.setSubmitting(false);
    },
  };
  return (
    <div>
      <Formik {...formikConfig}>
        {({ isSubmitting, values }) => (
          <Form>
            <div className="form-section">
              <FormItem name="shortName">
                <label>
                  <span className="required">*</span> ShortName
                </label>
                <Input name="shortName" className="inputField" />
              </FormItem>
            </div>
            <div className="form-section">
              <FormItem name="state">
                <label>
                  <span className="required">*</span> State
                </label>
                <Input
                  name="state"
                  className="inputField"
                  disabled
                  value={values.state}
                />
              </FormItem>
            </div>
            <div className="form-section">
              <FormItem name="description">
                <label>
                  <span className="required">*</span> Description
                </label>
                <Input.TextArea
                  autoSize={false}
                  rows={4}
                  cols={5}
                  name="description"
                  className="textArea1"
                />
              </FormItem>
            </div>
            <div className="btn-actions" style={{ justifyContent: "flex-end" }}>
              <Button style={{ marginRight: "15px" }} onClick={setOpen}>
                Cancel
              </Button>
              <SubmitButton type="primary" disabled={isSubmitting}>
                OK
              </SubmitButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateTestSuite;

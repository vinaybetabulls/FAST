import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button } from "antd";
import {
  SubmitButton,
  Input,
  Form,
  Select,
  FormItem,
} from "formik-antd";

const validationSchema = Yup.object().shape({
  description: Yup.string().required("Please enter description"),
});

const initialValues = {
  description: "",
  status: "",
  category: ""
};

type Props = {
  onSubmit: (values: any) => void;
  setOpen: () => void;
};

const CreateTestCase = (props: Props) => {
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
  function handleChange() {
    console.log("handleChange called....");
  }
  return (
    <div>
      <Formik {...formikConfig}>
        {({ isSubmitting, values }) => (
          <Form>
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
            <div className="form-section">
              <FormItem name="category">
                <label>Category</label>
                <Select
                  defaultValue="heading"
                  style={{ width: "100%" }}
                  name="heading"
                  onChange={handleChange}
                >
                  <Select.Option value="heading">Heading</Select.Option>
                  <Select.Option value="comment">Comment</Select.Option>
                  <Select.Option value="system">System Test</Select.Option>
                  <Select.Option value="component">
                    Component Test
                  </Select.Option>
                  <Select.Option value="integration">
                    Integration Test
                  </Select.Option>
                  <Select.Option value="performance">
                    Performance Test
                  </Select.Option>
                  <Select.Option value="load">Load Test</Select.Option>
                  <Select.Option value="uat">
                    User Acceptance Test
                  </Select.Option>
                </Select>
              </FormItem>
            </div>
            <div className="form-section">
              <FormItem name="status">
                <label>Status</label>
                <Select
                  defaultValue="draft"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  name="status"
                >
                  <Select.Option value="draft">draft</Select.Option>
                  <Select.Option value="proposed">proposed</Select.Option>
                  <Select.Option value="reviewed">reviewed</Select.Option>
                  <Select.Option value="released">released</Select.Option>
                  <Select.Option value="approved">approved</Select.Option>
                  <Select.Option value="rejected">rejected</Select.Option>
                  <Select.Option value="deferred">deferred</Select.Option>
                  <Select.Option value="replaced">replaced</Select.Option>
                </Select>
              </FormItem>
            </div>
            <div className="form-section">
              <FormItem name="priority">
                <label>Priority</label>
                <Input.TextArea
                  autoSize={false}
                  rows={4}
                  cols={5}
                  name="priority"
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

export default CreateTestCase;

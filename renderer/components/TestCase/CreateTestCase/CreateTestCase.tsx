import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Input, Button } from "antd";
const { TextArea } = Input;
import { Select } from 'antd';

const { Option } = Select;

const validationSchema = Yup.object().shape({
  description: Yup.string().trim().required("Please enter description"),
});

const initialValues = {
  description: "",
};

type Props = {
  onSubmit: () => void;
};

const CreateTestCase = (props: Props) => {
  const { onSubmit } = props;
  const formikConfig = {
    initialValues,
    validationSchema,
    onSubmit,
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
              <label><span className="required">*</span> Description</label>
              <TextArea autoSize={false} rows={4} cols={5} name="description" className="textArea1" />
            </div>
            <div  className="form-section">
              <label>Category</label>
              <Select defaultValue="heading" style={{ width: '100%' }} onChange={handleChange}>
                <Option value="heading">Heading</Option>
                <Option value="comment">Comment</Option>
                <Option value="system">System Test</Option>
                <Option value="component">Component Test</Option>
                <Option value="integration">Integration Test</Option>
                <Option value="performance">Performance Test</Option>
                <Option value="load">Load Test</Option>
                <Option value="uat">User Acceptance Test</Option>
              </Select>
            </div>
            <div className="form-section">
              <label>Status</label>
              <Select defaultValue="draft" style={{ width: '100%' }} onChange={handleChange}>
                <Option value="draft">draft</Option>
                <Option value="proposed">proposed</Option>
                <Option value="reviewed">reviewed</Option>
                <Option value="released">released</Option>
                <Option value="approved">approved</Option>
                <Option value="rejected">rejected</Option>
                <Option value="deferred">deferred</Option>
                <Option value="replaced">replaced</Option>
              </Select>
            </div>
            <div className="form-section">
              <label>Priority</label>
              <TextArea autoSize={false} rows={4} cols={5} name="description" className="textArea1" />
            </div>
            {/* <div className="btn-actions">
            <Button>Cancel</Button>
            <Button type="primary">OK</Button>
            </div> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateTestCase;

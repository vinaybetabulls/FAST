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
  parameterName: Yup.string().required("This field is required"),
  description: Yup.string().required("Please enter description"),

});

const initialValues = {
  parameterName: "",
  description: "",
  pickListType: "Pick List"
};

type Props = {
  onSubmit: (values: any) => void;
  setOpen: () => void;
};

const CreateParametersForm = (props: Props) => {
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
              <FormItem name="parameterName">
                <label>
                  <span className="required"> * </span> Parameter Name
                </label>
                <Input name="parameterName" className="inputField" />
              </FormItem>
            </div>
            <div className="form-section">
              <FormItem name="description">
                <label>Description</label>
                <Input name="description" className="inputField" />
              </FormItem>
            </div>
            <div className="form-section">
              <FormItem name="pickListType">
                <label>Type</label>
                <Select
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  name="pickListType"
                >
                  <Select.Option value="Pick List">Pick List</Select.Option>
                  <Select.Option value="String">String</Select.Option>
                </Select>
              </FormItem>
            </div>
            <div className="form-section">
              <FormItem name="priority">
                <label>Values</label>
                <Input name="parameterValues" className="inputField" />
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

export default CreateParametersForm;

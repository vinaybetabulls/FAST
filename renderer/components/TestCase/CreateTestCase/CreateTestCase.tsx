import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Input } from "antd";
const { TextArea } = Input;

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
  return (
    <div>
      <h1>Editing name</h1>
      <Formik {...formikConfig}>
        {({ isSubmitting, values }) => (
          <Form>
            Text Area
            <TextArea autoSize={false} rows={4} cols={5} name="description" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateTestCase;

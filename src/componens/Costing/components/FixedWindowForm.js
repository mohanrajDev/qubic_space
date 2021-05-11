import React, { Fragment } from "react";
import Form, {
  ErrorMessage,
  HelperMessage,
  Field,
  FormFooter,
  ValidMessage,
} from "@atlaskit/form";
import Textfield from "@atlaskit/textfield";
import { Row, Col } from "react-bootstrap";

const formFields = [
  {
    name: "frame",
    label: "Frame Model nale",
    placeholder: "frame model name",
    type: "text",
  },
  {
    name: "frame_price",
    label: "Frame Price",
    placeholder: "price/sqft",
    type: "number",
  },
  {
    name: "beading_frame",
    label: "Beading",
    placeholder: "frame model name",
    type: "text",
  },
  {
    name: "beading_frame_price",
    label: "Beading Price",
    placeholder: "price/sqft",
    type: "number",
  },
  {
    name: "re-enforcement",
    label: "Re-Enforcement",
    placeholder: "price/sqft",
    type: "number",
  },
  {
    name: "louver_cap",
    label: "Louver Cap",
    placeholder: "price/sqft",
    type: "number",
  },
];

const FixedWindowForm = () => {
  const handleSubmit = (formState) => {
    console.log("form state", formState);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {({ formProps }) => (
        <form {...formProps}>
          <Row>
            {formFields.map((formField) => (
              <Col md={3}>
                <Field
                  label={formField.label}
                  isRequired
                  name={formField.name}
                  defaultValue=""
                >
                  {({ fieldProps, error, meta: { valid } }) => (
                    <Fragment>
                      <Textfield
                        {...fieldProps}
                        type={formField.type}
                        placeholder={formField.placeholder}
                      />
                    </Fragment>
                  )}
                </Field>
              </Col>
            ))}
          </Row>
        </form>
      )}
    </Form>
  );
};

export default FixedWindowForm;

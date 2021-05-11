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
    name: "re-enforcement",
    label: "Re-Enforcement",
    placeholder: "price/sqft",
    type: "number",
  },
  {
    name: "guide_rate",
    label: "Guide Rate",
    placeholder: "price/sqft",
    type: "number",
  },
];

const sutterFormFields = [
  {
    name: "sutter_frame",
    label: "Sutter Frame",
    placeholder: "frame model name",
    type: "text",
  },
  {
    name: "sutter_frame_price",
    label: "Sutter Frame Price",
    placeholder: "price/sqft",
    type: "number",
  },
  {
    name: "sutter_beating",
    label: "Sutter Beating",
    placeholder: "frame model name",
    type: "text",
  },
  {
    name: "sutter_beating_price",
    label: "Sutter Beating Price",
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
    name: "guide_rate",
    label: "Guide Rate",
    placeholder: "price/sqft",
    type: "number",
  },
];

const messFormFields = [
  {
    name: "mess_frame",
    label: "Mess Frame",
    placeholder: "frame model name",
    type: "text",
  },
  {
    name: "mess_frame_price",
    label: "Mess Frame Price",
    placeholder: "price/sqft",
    type: "number",
  },
  {
    name: "mess_casecate",
    label: "Mess Casecate",
    placeholder: "price/sqft",
    type: "number",
  },
  {
    name: "re-enforcement",
    label: "Re-Enforcement",
    placeholder: "price/sqft",
    type: "number",
  },
];

const SlidingWindowForm = () => {
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
          <Row>
            <Col md={12}>
              <h4 class="mt-4">Sutter / Sash</h4>
            </Col>
            {sutterFormFields.map((formField) => (
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
          <Row>
            <Col md={12}>
              <h4 class="mt-4">Mess</h4>
            </Col>
            {messFormFields.map((formField) => (
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

export default SlidingWindowForm;

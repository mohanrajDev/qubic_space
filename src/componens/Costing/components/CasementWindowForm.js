import React, { Fragment, useState, useEffect } from "react";
import Form, {
  ErrorMessage,
  HelperMessage,
  Field,
  FormFooter,
  ValidMessage,
} from "@atlaskit/form";
import Textfield from "@atlaskit/textfield";
import { Row, Col } from "react-bootstrap";
import { useIndexedDB } from "react-indexed-db";

const formFields = [
  {
    name: "frame_name",
    label: "Frame Model Name",
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
    name: "beading",
    label: "Beading",
    placeholder: "frame model name",
    type: "text",
  },
  {
    name: "beading_price",
    label: "Beading Price",
    placeholder: "price/sqft",
    type: "number",
  },
  {
    name: "re_enforcement",
    label: "Re-Enforcement",
    placeholder: "price/sqft",
    type: "number",
  },
  {
    name: "gasket",
    label: "gasket",
    placeholder: "price/sqft",
    type: "number",
  },
];

const sutterFormFields = [
  {
    name: "frame_name",
    label: "Sutter Frame",
    placeholder: "frame model name",
    type: "text",
  },
  {
    name: "frame_price",
    label: "Sutter Frame Price",
    placeholder: "price/sqft",
    type: "number",
  },
  {
    name: "beating",
    label: "Sutter Beating",
    placeholder: "frame model name",
    type: "text",
  },
  {
    name: "beating_price",
    label: "Sutter Beating Price",
    placeholder: "price/sqft",
    type: "number",
  },
  {
    name: "re_enforcement",
    label: "Re-Enforcement",
    placeholder: "price/sqft",
    type: "number",
  },
  {
    name: "gasket",
    label: "Shutter Gasket",
    placeholder: "price/sqft",
    type: "number",
  },
];

const CasementWindowForm = ({ id }) => {
  const handleSubmit = (formState) => {
    console.log("form state", formState);
  };

  const { update, getByID } = useIndexedDB("hardwares");
  const [hardware, setHardware] = useState(null);

  useEffect(() => {
    getByID(id).then((hardwareData) => {
      setHardware(hardwareData);
    });
  }, []);

  const [casementWindow, setCasementWindow] = useState({
    frame: {
      frame_name: null,
      frame_price: null,
      beading: null,
      beading_price: null,
      re_enforcement: null,
      gasket: null,
    },
    sutter: {
      frame_name: null,
      frame_price: null,
      beating: null,
      beating_price: null,
      re_enforcement: null,
      gasket: null,
    },
  });

  useEffect(() => {
    if (hardware) {
      let currentHardware = hardware;
      currentHardware["casement_window"] = casementWindow;
      update(currentHardware).then(
        (id) => {
          console.log("Updated: ", id);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, [casementWindow]);

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
                  name={`frame_${formField.name}`}
                  defaultValue={casementWindow["frame"][formField.name]}
                >
                  {({ fieldProps, error, meta: { valid } }) => (
                    <Fragment>
                      <Textfield
                        {...fieldProps}
                        type={formField.type}
                        placeholder={formField.placeholder}
                        onChange={({ target: { value } }) => {
                          setCasementWindow({
                            ...casementWindow,
                            frame: {
                              ...casementWindow.frame,
                              [formField.name]: value,
                            },
                          });
                        }}
                      />
                    </Fragment>
                  )}
                </Field>
              </Col>
            ))}
          </Row>
          <Row>
            <Col md={12}>
              <h4 class="mt-4">Sutter</h4>
            </Col>
            {sutterFormFields.map((formField) => (
              <Col md={3}>
                <Field
                  label={formField.label}
                  isRequired
                  name={`sutter_${formField.name}`}
                  defaultValue={casementWindow["sutter"][formField.name]}
                >
                  {({ fieldProps, error, meta: { valid } }) => (
                    <Fragment>
                      <Textfield
                        {...fieldProps}
                        type={formField.type}
                        placeholder={formField.placeholder}
                        onChange={({ target: { value } }) => {
                          setCasementWindow({
                            ...casementWindow,
                            sutter: {
                              ...casementWindow.sutter,
                              [formField.name]: value,
                            },
                          });
                        }}
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

export default CasementWindowForm;

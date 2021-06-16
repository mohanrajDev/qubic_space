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

const VentilationWindowForm = ({ id }) => {
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

  const [ventilationWindow, setVentilationWindow] = useState({
    frame_name: null,
    frame_price: null,
    beading: null,
    beading_price: null,
    re_enforcement: null,
    gasket: null,
  });

  useEffect(() => {
    if (hardware) {
      let currentHardware = hardware;
      currentHardware["ventilation_window"] = ventilationWindow;
      update(currentHardware).then(
        (id) => {
          console.log("Updated: ", id);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, [ventilationWindow]);

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
                  defaultValue={ventilationWindow[formField.name]}
                >
                  {({ fieldProps, error, meta: { valid } }) => (
                    <Fragment>
                      <Textfield
                        {...fieldProps}
                        type={formField.type}
                        placeholder={formField.placeholder}
                        onChange={({ target: { value } }) => {
                          setVentilationWindow({
                            ...ventilationWindow,
                            [formField.name]: value,
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

export default VentilationWindowForm;

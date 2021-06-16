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
    name: "re_enforcement",
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
    name: "guide_rate",
    label: "Guide Rate",
    placeholder: "price/sqft",
    type: "number",
  },
];

const messFormFields = [
  {
    name: "frame_name",
    label: "Mess Frame",
    placeholder: "frame model name",
    type: "text",
  },
  {
    name: "frame_price",
    label: "Mess Frame Price",
    placeholder: "price/sqft",
    type: "number",
  },
  {
    name: "casecate",
    label: "Mess Casecate",
    placeholder: "price/sqft",
    type: "number",
  },
  {
    name: "re_enforcement",
    label: "Re-Enforcement",
    placeholder: "price/sqft",
    type: "number",
  },
];

const SlidingWindowForm = ({ trackerOptions, id }) => {
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

  const [slidingWindow, setSlidingWindow] = useState({
    track_2: {
      frame_name: null,
      frame_price: null,
      re_inforcement: null,
      guide_rate: null,
    },
    track_2_5: {
      frame_name: null,
      frame_price: null,
      re_inforcement: null,
      guide_rate: null,
    },
    track_3: {
      frame_name: null,
      frame_price: null,
      reinforcement: null,
      guide_rate: null,
    },
    sutter_sash: {
      frame_name: null,
      frame_price: null,
      beating: null,
      beating_price: null,
      re_enforcement: null,
      guide_rate: null,
    },
    mess: {
      frame_name: null,
      frame_price: null,
      casecate: null,
      re_enforcement: null,
    },
  });

  useEffect(() => {
    if (hardware) {
      let currentHardware = hardware;
      currentHardware["sliding_window"] = slidingWindow;
      update(currentHardware).then(
        (id) => {
          console.log("Updated: ", id);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, [slidingWindow]);

  return (
    <Form onSubmit={handleSubmit}>
      {({ formProps }) => (
        <form {...formProps}>
          <>
            {trackerOptions.map((item) => (
              <Row>
                <Col md="12 mt-4">
                  <h4>{item.label}</h4>
                </Col>
                {formFields.map((formField) => (
                  <Col md={3}>
                    <Field
                      label={formField.label}
                      isRequired
                      name={`${item.name}_${item.value}_${formField.name}`}
                      defaultValue={slidingWindow[item.name][formField.name]}
                    >
                      {({ fieldProps, error, meta: { valid } }) => (
                        <Fragment>
                          <Textfield
                            {...fieldProps}
                            type={formField.type}
                            placeholder={formField.placeholder}
                            onChange={({ target: { value } }) => {
                              setSlidingWindow({
                                ...slidingWindow,
                                [item.name]: {
                                  ...slidingWindow[item.name],
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
            ))}
          </>
          <Row>
            <Col md={12}>
              <h4 class="mt-4">Sutter / Sash</h4>
            </Col>
            {sutterFormFields.map((formField) => (
              <Col md={3}>
                <Field
                  label={formField.label}
                  isRequired
                  name={`sutter_${formField.name}`}
                  defaultValue={slidingWindow.sutter_sash[formField.name]}
                >
                  {({ fieldProps, error, meta: { valid } }) => (
                    <Fragment>
                      <Textfield
                        {...fieldProps}
                        type={formField.type}
                        placeholder={formField.placeholder}
                        onChange={({ target: { value } }) => {
                          setSlidingWindow({
                            ...slidingWindow,
                            sutter_sash: {
                              ...slidingWindow.sutter_sash,
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
              <h4 class="mt-4">Mess</h4>
            </Col>
            {messFormFields.map((formField) => (
              <Col md={3}>
                <Field
                  label={formField.label}
                  isRequired
                  name={`mess_${formField.name}`}
                  defaultValue={slidingWindow.mess[formField.name]}
                >
                  {({ fieldProps, error, meta: { valid } }) => (
                    <Fragment>
                      <Textfield
                        {...fieldProps}
                        type={formField.type}
                        placeholder={formField.placeholder}
                        onChange={({ target: { value } }) => {
                          setSlidingWindow({
                            ...slidingWindow,
                            mess: {
                              ...slidingWindow.mess,
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

export default SlidingWindowForm;

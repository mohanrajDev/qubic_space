import React, { useState, Fragment, useEffect } from "react";
import Form, {
  ErrorMessage,
  HelperMessage,
  Field,
  FormFooter,
  ValidMessage,
} from "@atlaskit/form";
import Button from "@atlaskit/button";
import Textfield from "@atlaskit/textfield";
import { Row, Col } from "react-bootstrap";
import Modal, { ModalTransition } from "@atlaskit/modal-dialog";
import { AutoDismissFlag, FlagGroup } from "@atlaskit/flag";
import SuccessIcon from "@atlaskit/icon/glyph/check-circle";
import { G500 } from "@atlaskit/theme/colors";
import { useIndexedDB } from "react-indexed-db";
import { useParams } from "react-router-dom";
import _ from "lodash";

const HardwareDetail = ({ history }) => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);
  const [showMessage, setShowMessage] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (formState) => {
    close();
    setShowMessage(true);
    history.push("/");
  };

  const onHideMessage = () => {
    setShowMessage(false);
    history.push("/");
  };

  const { update, getByID } = useIndexedDB("hardwares");
  const [hardware, setHardware] = useState(null);

  useEffect(() => {
    if (id) {
      getByID(id).then((hardwareData) => {
        setHardware(hardwareData);
      });
    }
  }, [id]);

  const slidingHardwareForm = [
    {
      name: "drainage_caps",
      label: "Drainage Caps",
      type: "number",
      placeholder: "per/piece",
    },
    {
      name: "fastner_screws",
      label: "Fastner screws",
      type: "number",
      placeholder: "per/piece",
    },
    {
      name: "touch_lock",
      label: "Touch lock",
      type: "number",
      placeholder: "per/set",
    },
    {
      name: "popup_handle",
      label: "Popup Handle",
      type: "number",
      placeholder: "per/piece",
    },
    {
      name: "rollers",
      label: "Rollers",
      type: "number",
      placeholder: "per/piece",
    },
    {
      name: "wuoofile",
      label: "Wuoofile",
      type: "number",
      placeholder: "per/meter",
    },
    {
      name: "sf_stopper",
      label: "Sf Stopper",
      type: "number",
      placeholder: "per/piece",
    },
    {
      name: "stopper",
      label: "Stopper",
      type: "number",
      placeholder: "per/piece",
    },
    {
      name: "faster_cap",
      label: "Faster cap",
      type: "number",
      placeholder: "per/piece",
    },
    {
      name: "silicon",
      label: "Silicon",
      type: "number",
      placeholder: "per/bottle",
    },
    {
      name: "rubber_gasket",
      label: "Rubber Gasket",
      type: "number",
      placeholder: "price/sqft",
    },
    {
      name: "inter_lock",
      label: "Inter Lock",
      type: "number",
      placeholder: "per/foot",
    },
  ];

  const casementHardwareForm = [
    {
      name: "frictionstry",
      label: "Frictionstry",
      type: "number",
      placeholder: "per/set",
    },
    {
      name: "espaq",
      label: "Espaq",
      type: "number",
      placeholder: "per/piece",
    },
    {
      name: "rubber_gasket",
      label: "Rubber Gasket",
      type: "number",
      placeholder: "per/meter",
    },
    {
      name: "casment_handle",
      label: "Casment Handle",
      type: "number",
      placeholder: "per/piece",
    },
  ];

  const ventilationHardwareForm = [
    {
      name: "glass_holder_cap",
      label: "Glass holder Cap",
      type: "number",
      placeholder: "per/piece",
    },
  ];

  const [hardwarePrice, setHardwarePrice] = useState({
    sliding_hardware: {
      drainage_caps: null,
      fastner_screws: null,
      touch_lock: null,
      popup_handle: null,
      rollers: null,
      wuoofile: null,
      sf_stopper: null,
      stopper: null,
      faster_cap: null,
      silicon: null,
      rubber_gasket: null,
      inter_lock: null,
    },
    casement_hardware: {
      frictionstry: null,
      espaq: null,
      rubber_gasket: null,
      casment_handle: null,
    },
    ventilation_hardware: {
      glass_holder_cap: null,
    },
  });

  useEffect(() => {
    if (hardware) {
      let tempHardware = hardware;
      tempHardware["hardware_price"] = hardwarePrice;

      update(tempHardware).then(
        (id) => {
          console.log("Updated: ", id);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, [hardwarePrice]);

  useEffect(() => {
    if (hardware) {
      let tempHardware = hardware;
      tempHardware["name"] = name;
      tempHardware["label"] = name;
      tempHardware["status"] = 1;

      update(tempHardware).then(
        (id) => {
          console.log("Updated: ", id);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, [name]);

  return (
    <>
      {hardware && (
        <>
          <Form onSubmit={handleSubmit}>
            {({ formProps }) => (
              <form {...formProps}>
                <Row>
                  <Col md={12}>
                    <h4 class="mt-4">Sliding Window Hardware</h4>
                  </Col>
                  {slidingHardwareForm.map((formField) => (
                    <Col md={3}>
                      <Field
                        label={formField.label}
                        isRequired
                        name={`sliding_${formField.name}`}
                        defaultValue={
                          hardwarePrice["sliding_hardware"][formField.name]
                        }
                      >
                        {({ fieldProps, error, meta: { valid } }) => (
                          <Fragment>
                            <Textfield
                              {...fieldProps}
                              type={formField.type}
                              placeholder={formField.placeholder}
                              onChange={({ target: { value } }) => {
                                setHardwarePrice({
                                  ...hardwarePrice,
                                  sliding_hardware: {
                                    ...hardwarePrice.sliding_hardware,
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
                    <h4 class="mt-4">Casement Hardware</h4>
                  </Col>
                  {casementHardwareForm.map((formField) => (
                    <Col md={3}>
                      <Field
                        label={formField.label}
                        isRequired
                        name={`casement_${formField.name}`}
                        defaultValue={
                          hardwarePrice["casement_hardware"][formField.name]
                        }
                      >
                        {({ fieldProps, error, meta: { valid } }) => (
                          <Fragment>
                            <Textfield
                              {...fieldProps}
                              type={formField.type}
                              placeholder={formField.placeholder}
                              onChange={({ target: { value } }) => {
                                setHardwarePrice({
                                  ...hardwarePrice,
                                  casement_hardware: {
                                    ...hardwarePrice.casement_hardware,
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
                    <h4 class="mt-4">Wentilation Window Hardware</h4>
                  </Col>
                  {ventilationHardwareForm.map((formField) => (
                    <Col md={3}>
                      <Field
                        label={formField.label}
                        isRequired
                        name={`ventilation_${formField.name}`}
                        defaultValue={
                          hardwarePrice["ventilation_hardware"][formField.name]
                        }
                      >
                        {({ fieldProps, error, meta: { valid } }) => (
                          <Fragment>
                            <Textfield
                              {...fieldProps}
                              type={formField.type}
                              placeholder={formField.placeholder}
                              onChange={({ target: { value } }) => {
                                setHardwarePrice({
                                  ...hardwarePrice,
                                  ventilation_hardware: {
                                    ...hardwarePrice.ventilation_hardware,
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
                <Row className="mt-4">
                  <Col md={{ span: 2, offset: 10 }} className="text-right">
                    <Button appearance="primary" onClick={open}>
                      Save
                    </Button>
                  </Col>
                </Row>
              </form>
            )}
          </Form>
          <ModalTransition>
            {isOpen && (
              <Modal
                actions={[
                  { text: "Save", onClick: handleSubmit },
                  { text: "Cancle", onClick: close },
                ]}
                onClose={close}
                heading="Save Hardware Details"
              >
                <Row>
                  <Col md="12">
                    <Field label="Hardware Name" name="hardware_name">
                      {({ fieldProps }) => (
                        <Textfield
                          placeholder="Ex. economy hardware"
                          type="text"
                          value={name}
                          onInput={({ target: { value } }) => setName(value)}
                          {...fieldProps}
                        />
                      )}
                    </Field>
                  </Col>
                </Row>
              </Modal>
            )}
          </ModalTransition>
          {showMessage && (
            <FlagGroup>
              <AutoDismissFlag
                isAutoDismiss={true}
                id={`sucess-message`}
                icon={
                  <SuccessIcon
                    label="Success"
                    size="medium"
                    primaryColor={G500}
                  />
                }
                key={`sucess-message`}
                title={`Hardware saved sucessfully...`}
                description=""
                onDismissed={onHideMessage}
              />
            </FlagGroup>
          )}
        </>
      )}
    </>
  );
};

export default HardwareDetail;

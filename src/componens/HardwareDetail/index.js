import React, { useState, Fragment } from "react";
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
import { G500 } from '@atlaskit/theme/colors';

const HardwareDetail = () => {
  const [hardware, setHardware] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (formState) => {
    console.log("form state", formState);
    close();
    setShowMessage(true);
  };

  const onHideMessage = () => {
    setShowMessage(false);
  };

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

  const wentilationHardwareForm = [
    {
      name: "glass_holder_cap",
      label: "Glass holder Cap",
      type: "number",
      placeholder: "per/piece",
    },
  ];

  return (
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
                <h4 class="mt-4">Casement Hardware</h4>
              </Col>
              {casementHardwareForm.map((formField) => (
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
                <h4 class="mt-4">Wentilation Window Hardware</h4>
              </Col>
              {wentilationHardwareForm.map((formField) => (
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
              { text: "Cancle" },
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
            icon={<SuccessIcon label="Success" size="medium" primaryColor={G500}/>}
            key={`sucess-message`}
            title={`Hardware saved sucessfully...`}
            description=""
            onDismissed={onHideMessage}
          />
        </FlagGroup>
      )}
    </>
  );
};

export default HardwareDetail;

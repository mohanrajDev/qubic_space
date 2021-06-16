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
import "./index.scss";
import Button from "@atlaskit/button/standard-button";
import { format } from "date-fns";

const clientForm = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "enter name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "enter email",
  },
  {
    name: "phone",
    type: "phone",
    label: "Phone",
    placeholder: "enter phone",
  },
  {
    name: "address",
    label: "Address",
    type: "text",
    placeholder: "enter address",
  },
];
const Quotation = ({ history }) => {
  const { add, getByID, update } = useIndexedDB("clients");

  const [client, setClient] = useState({
    name: null,
    email: null,
    phone: null,
    address: null,
    created_at: null,
  });

  const handleSubmit = (formState) => {
    console.log("form state", formState);
  };

  return (
    <>
      <Row>
        <Form onSubmit={handleSubmit}>
          {({ formProps }) => (
            <form {...formProps}>
              <Row>
                <Col md={12}>
                  <h4 class="mt-4">Client Details</h4>
                </Col>
                {clientForm.map((formField) => (
                  <Col md={3}>
                    <Field
                      label={formField.label}
                      isRequired
                      name={`client_${formField.name}`}
                      defaultValue={client[formField.name]}
                    >
                      {({ fieldProps, error, meta: { valid } }) => (
                        <Fragment>
                          <Textfield
                            {...fieldProps}
                            type={formField.type}
                            placeholder={formField.placeholder}
                            onChange={({ target: { value } }) => {
                              setClient({
                                ...client,
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
      </Row>
      {client.name && client.email && client.phone && client.address && (
        <Row className="mt-4">
          <Col md={{ span: 2, offset: 10 }} className="text-right">
            <Button
              appearance="primary"
              onClick={() => {
                add({
                  name: client.name,
                  email: client.email,
                  phone: client.phone,
                  address: client.address,
                  created_at: format(new Date(), "dd-MM-yyyy hh:mm:ss"),
                }).then(
                  (id) => {
                    console.log("ID Generated: ", id);
                    history.push(`quotation/${id}`);
                  },
                  (error) => {
                    console.log(error);
                  }
                );
              }}
            >
              Next
            </Button>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Quotation;

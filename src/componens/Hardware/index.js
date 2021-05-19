import React, { useRef, useState } from "react";
import { Row, Col, Table } from "react-bootstrap";
import Button from "@atlaskit/button";
import AddIcon from "@atlaskit/icon/glyph/add";
import Modal, { ModalTransition } from "@atlaskit/modal-dialog";
import { WindowProfile } from "../../model";
import { Field } from "@atlaskit/form";
import Textfield from "@atlaskit/textfield";
import { Radio } from "@atlaskit/radio";
import Select from "@atlaskit/select";
import CurrencyFormat from "react-currency-format";
import { Capitalize } from "react-lodash";
import TrashIcon from "@atlaskit/icon/glyph/trash";
import uuid from "react-uuid";

const Hardware = ({ history }) => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);
  const focusRef = useRef();

  const [lists, setLists] = useState([]);
  const [form, setForm] = useState({
    type: "glass",
    model_name: null,
    cost_per_sqft: null,
    profile: null,
    price: null,
  });

  const onAdd = () => {
    setLists([...lists, { ...form, id: uuid() }]);
    setForm({
      type: "glass",
      model_name: null,
      cost_per_sqft: null,
      profile: null,
      price: null,
    });
    close();
  };

  const onDelete = (id) => {
    const tempLists = lists.filter((item) => item.id !== id);
    setLists([...tempLists]);
  };

  return (
    <>
      <Row>
        <Col md="12">
          <Button
            onClick={open}
            appearance="primary"
            iconBefore={<AddIcon label="Add Glass / Mess" size="small" />}
          >
            Add Glass / Mess
          </Button>
        </Col>
        <Col md="12 mt-4">
          <Table striped bordered hover>
            <thead>
              <th>Type</th>
              <th>Model Name</th>
              <th>Model Price (per sqft)</th>
              <th>Profile Type</th>
              <th>Model Price</th>
              <th>Action</th>
            </thead>
            <tbody>
              {lists.map((item) => (
                <tr>
                  <td>
                    <Capitalize string={item.type} />
                  </td>
                  <td>{item.model_name}</td>
                  <td>
                    <CurrencyFormat
                      value={item.price_for_sqft}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₹"}
                    />
                  </td>
                  <td>{item.profile && item.profile.label}</td>
                  <td>
                    <CurrencyFormat
                      value={item.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₹"}
                    />
                  </td>
                  <td>
                    <Button
                      onClick={(e) => onDelete(item.id)}
                      appearance="danger"
                      iconBefore={<TrashIcon label="Delete" size="small" />}
                    ></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={{ span: 2, offset: 10 }} className="text-right">
          <Button
            appearance="primary"
            onClick={() => history.push("/hardware-details")}
          >
            Generate Hardware
          </Button>
        </Col>
      </Row>
      <ModalTransition>
        {isOpen && (
          <Modal
            actions={[
              { text: "Add", onClick: onAdd },
              { text: "Cancle", onClick: close },
            ]}
            onClose={close}
            heading="Add Glass / Mess"
          >
            <Row>
              <Col md="4" xs="6">
                <Radio
                  value="glass"
                  label="Glasss"
                  name="type"
                  testId="radio-glass"
                  isChecked={form.type === "glass"}
                  onChange={({ target: { value } }) => {
                    setForm({
                      ...form,
                      type: value,
                    });
                  }}
                />
              </Col>
              <Col md="4" xs="6">
                <Radio
                  value="mess"
                  label="Mess"
                  name="type"
                  testId="radio-mess"
                  isChecked={form.type === "mess"}
                  onChange={({ target: { value } }) => {
                    setForm({
                      ...form,
                      type: value,
                    });
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Field label="Model Name" name="model_name">
                  {({ fieldProps }) => (
                    <Textfield
                      ref={focusRef}
                      placeholder="Ex. model name"
                      type="text"
                      value={form.model_name}
                      onInput={({ target: { value } }) =>
                        setForm({
                          ...form,
                          model_name: value,
                        })
                      }
                      {...fieldProps}
                    />
                  )}
                </Field>
              </Col>
              <Col md="6">
                <Field label="Price Per Sqft" name="price_for_sqft">
                  {({ fieldProps }) => (
                    <Textfield
                      ref={focusRef}
                      type="number"
                      placeholder="price/sqft"
                      {...fieldProps}
                      value={form.price_for_sqft}
                      onChange={({ target: { value } }) =>
                        setForm({
                          ...form,
                          price_for_sqft: value,
                        })
                      }
                    />
                  )}
                </Field>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Field label="Profile" name="proffile">
                  {({ fieldProps }) => (
                    <Select
                      className="single-select"
                      classNamePrefix="react-select"
                      options={WindowProfile}
                      placeholder="Choose a Profile"
                      onChange={(profile) =>
                        setForm({
                          ...form,
                          profile: profile,
                        })
                      }
                    />
                  )}
                </Field>
              </Col>
              <Col md="6">
                <Field label="Price" name="price">
                  {({ fieldProps }) => (
                    <Textfield
                      ref={focusRef}
                      type="number"
                      placeholder="price/sqft"
                      {...fieldProps}
                      value={form.price}
                      onChange={({ target: { value } }) =>
                        setForm({
                          ...form,
                          price: value,
                        })
                      }
                    />
                  )}
                </Field>
              </Col>
            </Row>
          </Modal>
        )}
      </ModalTransition>
    </>
  );
};

export default Hardware;

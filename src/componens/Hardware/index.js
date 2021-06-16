import React, { useRef, useState, useEffect } from "react";
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
import { useIndexedDB } from "react-indexed-db";
import { useParams } from "react-router-dom";

const Hardware = ({ history }) => {
  const { id } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);
  const focusRef = useRef();

  const { update, getByID } = useIndexedDB("hardwares");
  const [hardware, setHardware] = useState(null);

  useEffect(() => {
    if (id) {
      getByID(id).then((hardwareData) => {
        setHardware(hardwareData);
      });
    }
  }, [id]);

  const [form, setForm] = useState({
    type: "glass",
    model_name: null,
    cost_per_sqft: null,
  });

  const onAdd = () => {
    const tempHardware = hardware;
    let tempList = Array.isArray(tempHardware.glass_mess)
      ? tempHardware.glass_mess
      : [];
    tempList = [...tempList, { ...form, id: uuid() }];
    tempHardware["glass_mess"] = tempList;
    update(tempHardware).then(
      (id) => {
        console.log("Updated: ", id);
      },
      (error) => {
        console.log(error);
      }
    );

    setForm({
      type: "glass",
      model_name: null,
      cost_per_sqft: null,
    });
    close();
  };

  const onDelete = (id) => {
    const tempHardware = hardware;
    let tempList = Array.isArray(tempHardware.glass_mess)
      ? tempHardware.glass_mess
      : [];

    const newLists = tempList.filter((item) => item.id !== id);

    tempHardware["glass_mess"] = newLists;
    update(tempHardware).then(
      (id) => {
        console.log("Updated: ", id);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <>
      {hardware && (
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
                  <th>Action</th>
                </thead>
                <tbody>
                  {hardware.glass_mess &&
                    hardware.glass_mess.map((item) => (
                      <tr>
                        <td>
                          <Capitalize string={item.type} />
                        </td>
                        <td>{item.model_name}</td>
                        <td>
                          <CurrencyFormat
                            value={item.cost_per_sqft}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₹"}
                          />
                        </td>
                        <td>
                          <Button
                            onClick={(e) => onDelete(item.id)}
                            appearance="danger"
                            iconBefore={
                              <TrashIcon label="Delete" size="small" />
                            }
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
                onClick={() => history.push(`/hardware-details/${id}`)}
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
                              cost_per_sqft: value,
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
      )}
    </>
  );
};

export default Hardware;

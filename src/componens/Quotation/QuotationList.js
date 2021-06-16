import React, { Fragment, useState, useEffect } from "react";
import Form, {
  ErrorMessage,
  HelperMessage,
  Field,
  FormFooter,
  ValidMessage,
} from "@atlaskit/form";
import Textfield from "@atlaskit/textfield";
import { Row, Col, Table } from "react-bootstrap";
import { useIndexedDB } from "react-indexed-db";
import Button from "@atlaskit/button";
import "./index.scss";
import Select from "@atlaskit/select";
import { Checkbox } from "@atlaskit/checkbox";
import Track2Image from "./../../assets/track_2.png";
import Track25Image from "./../../assets/track_2_5.png";
import Track3Image from "./../../assets/track_3.png";
import CasementImage from "./../../assets/casement.jpg";
import FixedImage from "./../../assets/fixed.jpg";
import VentilationImage from "./../../assets/ventilation.jpg";
import "./index.scss";
import { useParams } from "react-router-dom";

const quotationForm = [
  {
    name: "quantity",
    label: "Quantity",
    type: "number",
    placeholder: "enter quantity",
  },
  {
    name: "width",
    label: "Width",
    type: "number",
    placeholder: "enter width",
  },
  {
    name: "height",
    label: "Height",
    type: "number",
    placeholder: "enter height",
  },
  {
    name: "location",
    label: "Window Location",
    type: "text",
    placeholder: "enter window location",
  },
];

const QuotationList = ({ history }) => {
  const { getAll } = useIndexedDB("hardwares");
  const { add, getByID } = useIndexedDB("quotations");
  const [hardwareList, setHardwareList] = useState([]);
  const [glassList, setGlassList] = useState([]);
  const [messList, setMessList] = useState([]);
  const [hardware, setHardware] = useState([]);
  const [mess, setMess] = useState([]);
  const [glass, setGlass] = useState([]);
  const { id } = useParams();

  const [listsOfQuotations, setListOfQuotations] = useState([
    {
      name: "track_2",
      lable: "2 Track",
      image: Track2Image,
      show: true,
    },
    {
      name: "track_2_5",
      lable: "2.5 Track",
      image: Track25Image,
      show: true,
    },
    {
      name: "track_3",
      lable: "3 Track",
      image: Track3Image,
      show: true,
    },
    {
      name: "casement",
      lable: "Casement",
      image: CasementImage,
      show: true,
    },
    {
      name: "fixed",
      lable: "Fixed",
      image: FixedImage,
      show: true,
    },
    {
      name: "ventilation",
      lable: "Ventilation",
      image: VentilationImage,
      show: true,
    },
  ]);

  const [quotation, setQuotation] = useState({
    client: null,
    track_2: {
      quantity: null,
      width: null,
      height: null,
      location: null,
    },
    track_2_5: {
      quantity: null,
      width: null,
      height: null,
      location: null,
    },
    track_3: {
      quantity: null,
      width: null,
      height: null,
      location: null,
    },
    casement: {
      quantity: null,
      width: null,
      height: null,
      location: null,
    },
    fixed: {
      quantity: null,
      width: null,
      height: null,
      location: null,
    },
    ventilation: {
      quantity: null,
      width: null,
      height: null,
      location: null,
    },
  });

  useEffect(() => {
    getAll().then((hardwaresFromDb) => {
      setHardwareList(hardwaresFromDb);
    });
  }, []);

  useEffect(() => {
    getByID(id).then((clientFromDB) => {
      setQuotation({
        ...quotation,
        client: clientFromDB,
      });
    });
  }, [id]);

  useEffect(() => {
    const data_lists = hardware.glass_mess;
    if (Array.isArray(data_lists)) {
      const glass_lists = data_lists
        .filter((item) => item.type === "glass")
        .map((item) => {
          return {
            id: item.id,
            label: item.model_name,
            model_name: item.model_name,
            cost_per_sqft: item.cost_per_sqft,
          };
        });

      const mess_lists = data_lists
        .filter((item) => item.type === "mess")
        .map((item) => {
          return {
            id: item.id,
            label: item.model_name,
            model_name: item.model_name,
            cost_per_sqft: item.cost_per_sqft,
          };
        });
      setGlassList(glass_lists);
      setMessList(mess_lists);
    } else {
      console.log("no....");
    }
  }, [hardware]);

  return (
    <>
      <Row className="mb-4">
        <Col md={4}>
          <Field label="Selct Hardware" name="hardware">
            {({ fieldProps }) => (
              <Select
                className="single-select"
                classNamePrefix="react-select"
                options={hardwareList}
                placeholder="Choose a hardware"
                onChange={(hardware) => setHardware(hardware)}
              />
            )}
          </Field>
        </Col>
        {hardware && (
          <>
            <Col md={4}>
              <Field label="Glass" name="glass">
                {({ fieldProps }) => (
                  <Select
                    className="single-select"
                    classNamePrefix="react-select"
                    options={glassList}
                    placeholder="Choose a glass"
                    onChange={(glasses) => setGlass(glasses)}
                  />
                )}
              </Field>
            </Col>
            <Col md={4}>
              <Field label="Mess" name="mess">
                {({ fieldProps }) => (
                  <Select
                    className="single-select"
                    classNamePrefix="react-select"
                    options={messList}
                    placeholder="Choose a mess"
                    onChange={(messes) => setMess(messes)}
                  />
                )}
              </Field>
            </Col>
          </>
        )}
      </Row>
      <>
        {listsOfQuotations.map((item) => (
          <>
            <Row className="my-4">
              <Col md={12}>
                <h5>
                  <Checkbox
                    value={item.name}
                    label={item.lable}
                    onChange={() => {
                      const listsOfQuotationsTemp = listsOfQuotations;
                      const currentIndex = listsOfQuotationsTemp.findIndex(
                        (current) => current.name === item.name
                      );
                      let currentQuotation = listsOfQuotationsTemp.find(
                        (current) => current.name === item.name
                      );
                      currentQuotation.show = !currentQuotation.show;
                      listsOfQuotationsTemp[currentIndex] = currentQuotation;
                      setListOfQuotations(listsOfQuotationsTemp);
                    }}
                    name={item.name}
                    testId={`${item.name}_id`}
                    isChecked={item.show}
                  />
                </h5>
              </Col>
              <Col md={4} className={`${item.show ? "" : "d-none"}`}>
                <img src={item.image} />
              </Col>
              <Col md={8} className={`${item.show ? "" : "d-none"}`}>
                <Row>
                  {quotationForm.map((formField) => (
                    <Col md={6}>
                      <Field
                        label={formField.label}
                        isRequired
                        name={`${item.name}_${formField.name}`}
                        // defaultValue={quotation[item.name][formField.name]}
                      >
                        {({ fieldProps, error, meta: { valid } }) => (
                          <Fragment>
                            <Textfield
                              {...fieldProps}
                              type={formField.type}
                              placeholder={formField.placeholder}
                              onChange={({ target: { value } }) => {
                                setQuotation({
                                  ...quotation,
                                  [item.name]: {
                                    ...quotation[item.name],
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
              </Col>
            </Row>
            <hr />
          </>
        ))}
      </>
      <Row className="mt-4">
        <Col md={{ span: 2, offset: 10 }} className="text-right">
          <Button
            appearance="primary"
            onClick={() => {
              add({
                ...quotation,
                hardware: hardware,
                mess: mess,
                glass: glass,
              }).then(
                (id) => {
                  console.log("ID Generated: ", id);
                  history.push(`/invoice/${id}`);
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
    </>
  );
};

export default QuotationList;

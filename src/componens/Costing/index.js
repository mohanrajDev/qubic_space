import React, { useState, useEffect } from "react";
import Select from "@atlaskit/select";
import { Row, Col } from "react-bootstrap";
import Button from "@atlaskit/button";
import { Radio } from "@atlaskit/radio";
import uuid from "react-uuid";
import { WindowProfile, WindowType } from "./../../model";
import SlidingWindowForm from "./components/SlidingWindowForm";
import VentilationWindowForm from "./components/VentilationWindowForm";
import FixedWindowForm from "./components/FixedWindowForm";
import CasementWindowForm from "./components/CasementWindowForm";
import { useIndexedDB } from "react-indexed-db";
import { useParams } from "react-router-dom";

const Costing = ({ history }) => {
  const { add, getByID, update } = useIndexedDB("hardwares");
  const [hardwareID, setHardwareID] = useState(null);
  const [hardware, setHardware] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getByID(id).then((hardwareData) => {
        setHardware(hardwareData);
      });
    }
  }, [id]);

  const [windowOption, setWindowOption] = useState({
    type: null,
    profile: null,
  });

  const windowOptions = [
    {
      name: "type",
      placeholder: "Select Window Type",
      options: WindowType,
    },
    {
      name: "profile",
      placeholder: "Select Window Profile",
      options: WindowProfile,
    },
  ];

  const trackerOptions = [
    {
      label: "2 Track",
      name: "track_2",
      value: 2,
    },
    {
      label: "2.5 Track",
      name: "track_2_5",
      value: 2.5,
    },
    {
      label: "3 Track",
      name: "track_3",
      value: 3,
    },
  ];

  return (
    <>
      {hardware && (
        <>
          <Row>
            {windowOptions.map((item) => (
              <Col xs={6} md={3} className="mb-2">
                <Select
                  className="single-select"
                  classNamePrefix="react-select"
                  options={item.options}
                  onChange={(type) => {
                    setWindowOption({
                      ...windowOption,
                      [item.name]: type,
                    });

                    if (item.name === "profile") {
                      let currentHardware = hardware;
                      currentHardware["window_type"] = type.value;
                      update(currentHardware).then(
                        (id) => {
                          console.log("Updated type: ", id);
                        },
                        (error) => {
                          console.log(error);
                        }
                      );
                    }
                  }}
                  isDisabled={item.name === "profile" && !windowOption.type}
                  placeholder={item.placeholder}
                />
              </Col>
            ))}
          </Row>
          <Row>
            {windowOption.type && windowOption.profile && (
              <Col>
                <h4 className="mt-2">
                  {`${windowOption.type && windowOption.type.label} - ${
                    windowOption.profile && windowOption.profile.label
                  } Window Price Details`}
                </h4>
                {windowOption.type && windowOption.type.value === "sliding" && (
                  <SlidingWindowForm trackerOptions={trackerOptions} id={id} />
                )}
                {windowOption.type &&
                  windowOption.type.value === "casement" && (
                    <CasementWindowForm id={id} />
                  )}
                {windowOption.type && windowOption.type.value === "fixed" && (
                  <FixedWindowForm id={id} />
                )}
                {windowOption.type &&
                  windowOption.type.value === "ventilation" && (
                    <VentilationWindowForm id={id} />
                  )}
              </Col>
            )}
          </Row>

          {id && (
            <Row className="mt-4">
              <Col md={{ span: 2, offset: 10 }} className="text-right">
                <Button
                  appearance="primary"
                  onClick={() => history.push(`/hardware/${id}`)}
                >
                  Next
                </Button>
              </Col>
            </Row>
          )}
        </>
      )}
    </>
  );
};

export default Costing;

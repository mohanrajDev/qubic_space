import React, { useState } from "react";
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

const Costing = ({ history }) => {
  const [windowOption, setWindowOption] = useState({
    type: null,
    profile: null,
  });
  const [track, setTrack] = useState(2);

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
      name: "track",
      value: 2,
    },
    {
      label: "2.5 Track",
      name: "track",
      value: 2.5,
    },
    {
      label: "3 Track",
      name: "track",
      value: 3,
    },
  ];

  return (
    <>
      <Row>
        {windowOptions.map((item) => (
          <Col xs={6} md={3} className="mb-2">
            <Select
              className="single-select"
              classNamePrefix="react-select"
              options={item.options}
              onChange={(type) =>
                setWindowOption({
                  ...windowOption,
                  [item.name]: type,
                })
              }
              isDisabled={item.name === "profile" && !windowOption.type}
              placeholder={item.placeholder}
            />
          </Col>
        ))}
      </Row>

      <Row className="mt-4">
        {trackerOptions.map((item) => (
          <Col md={2}>
            <Radio
              value={item.value}
              label={item.label}
              name={item.name}
              testId={uuid()}
              isChecked={item.value === track}
              onChange={({ currentTarget: { value } }) =>
                setTrack(Number(value))
              }
              isDisabled={!windowOption.profile}
            />
          </Col>
        ))}
      </Row>
      <Row>
        {windowOption.type && windowOption.profile && (
          <Col>
            {windowOption.type && windowOption.type.value === "sliding" && (
              <SlidingWindowForm />
            )}
            {windowOption.type && windowOption.type.value === "casement" && (
              <CasementWindowForm />
            )}
            {windowOption.type && windowOption.type.value === "fixed" && (
              <FixedWindowForm />
            )}
            {windowOption.type && windowOption.type.value === "ventilation" && (
              <VentilationWindowForm />
            )}
          </Col>
        )}
      </Row>
      <Row className="mt-4">
        <Col md={{ span: 2, offset: 10 }} className="text-right">
          <Button
            appearance="primary"
            onClick={() => history.push("hardware/")}
          >
            Next
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Costing;

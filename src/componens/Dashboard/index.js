import React, { useEffect, useState } from "react";
import { Row, Col, Table } from "react-bootstrap";
import { useIndexedDB } from "react-indexed-db";
import Button from "@atlaskit/button";
import AddFilledIcon from "@atlaskit/icon/glyph/add";

const Dashboard = ({ history }) => {
  const [hardwareList, setHardwareList] = useState([]);
  const { add, getAll } = useIndexedDB("hardwares");

  useEffect(() => {
    getAll().then((hardwaresFromDB) => {
      setHardwareList(hardwaresFromDB);
    });
  }, []);

  return (
    <>
      <Row className="my-4">
        <Col>
          <Button
            iconBefore={<AddFilledIcon label="add icon" size="small" />}
            appearance="primary"
            onClick={() => {
              add({
                name: `Untitled hardware${Math.random(0, 1000)}`,
                label: null,
                window_type: null,
                sliding_window: null,
                casement_window: null,
                fixed_window: null,
                ventilation_window: null,
                glass_mess: [],
                hardware_price: null,
                status: 0,
              }).then(
                (id) => {
                  console.log("ID Generated: ", id);
                  history.push(`new-hardware/${id}`);
                },
                (error) => {
                  console.log(error);
                }
              );
            }}
          >
            New Hardware Databse
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table>
            <thead>
              <th>Name</th>
              <th>Type</th>
            </thead>
            <tbody>
              {hardwareList
                .filter((item) => item.status === 1)
                .map((hardware) => (
                  <tr>
                    <td>{hardware.name}</td>
                    <td>{hardware.window_type}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;

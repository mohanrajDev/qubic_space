import React, { useState, useEffect, useRef } from "react";
import { useIndexedDB } from "react-indexed-db";
import { useParams } from "react-router-dom";
import { Row, Col, Table } from "react-bootstrap";
import InvoicePage from "./InvoicePage";
import { useReactToPrint } from "react-to-print";
import Button from "@atlaskit/button";

const Invoice = () => {
  const { getByID } = useIndexedDB("quotations");
  const { id } = useParams();

  const [quotation, setQuotation] = useState(null);

  useEffect(() => {
    if (id) {
      getByID(id).then((quotationData) => {
        setQuotation(quotationData);
      });
    }
  }, [id]);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      {quotation && (
        <>
          <Row className="mt-4">
            <Col className="text-center">
              <Button appearance="warning" onClick={handlePrint}>
                Download Invoice
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <InvoicePage ref={componentRef} quotation={quotation} />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="text-center">
              <Button appearance="warning" onClick={handlePrint}>
                Download Invoice
              </Button>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default Invoice;

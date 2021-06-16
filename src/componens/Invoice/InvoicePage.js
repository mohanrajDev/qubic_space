import React, { useMemo } from "react";
import { Row, Table } from "react-bootstrap";
import "./print.scss";

import Track2Image from "./../../assets/track_2.png";
import Track25Image from "./../../assets/track_2_5.png";
import Track3Image from "./../../assets/track_3.png";
import CasementImage from "./../../assets/casement.jpg";
import FixedImage from "./../../assets/fixed.jpg";
import VentilationImage from "./../../assets/ventilation.jpg";
import CurrencyFormat from "react-currency-format";

class InvoicePage extends React.PureComponent {
  render() {
    const {
      quotation: {
        mess,
        glass,
        track_2,
        track_2_5,
        track_3,
        fixed,
        casement,
        ventilation,
        hardware,
      },
    } = this.props;

    return (
      <div className="my-4">
        <Row>
          <Table bordered hover>
            <thead>
              <th>Sales Line</th>
              <th>Details</th>
              <th>Qty</th>
              <th>Rate</th>
              <th>Price</th>
            </thead>
            <tbody>
              {track_2.width && track_2.height && track_2.quantity && (
                <tr>
                  <td>
                    <img src={Track2Image} />
                  </td>
                  <td>
                    <p>
                      <b>Windows name: </b>Track 2 Window
                    </p>
                    <p>
                      <b>Width: </b>
                      {track_2.width}
                    </p>
                    <p>
                      <b>Height: </b>
                      {track_2.height}
                    </p>
                    <p>
                      <b>Area: </b>
                      {track_2.width * track_2.height}
                    </p>
                    <p>
                      <b>Window location: </b>
                      {track_2.location}
                    </p>
                    <p>
                      <b>Mess: </b>
                      {mess.model_name}
                    </p>
                    <p>
                      <b>Glass: </b>
                      {glass.model_name}
                    </p>
                  </td>
                  <td>{track_2.quantity}</td>
                  <td>
                    <Cost
                      hardware={hardware}
                      type="sliding"
                      subtype="track2"
                      width={track_2.width}
                      height={track_2.height}
                      mess_price={mess.cost_per_sqft}
                      glass_price={mess.cost_per_sqft}
                    />
                  </td>
                  <td>
                    <Cost
                      hardware={hardware}
                      quantity={track_2.quantity}
                      type="sliding"
                      subtype="track2"
                      width={track_2.width}
                      height={track_2.height}
                      mess_price={mess.cost_per_sqft}
                      glass_price={mess.cost_per_sqft}
                    />
                  </td>
                </tr>
              )}

              {track_2_5.width && track_2_5.height && track_2_5.quantity && (
                <tr>
                  <td>
                    <img src={Track25Image} />
                  </td>
                  <td>
                    <p>
                      <b>Windows name: </b>Track 2.5 Window
                    </p>
                    <p>
                      <b>Width: </b>
                      {track_2_5.width}
                    </p>
                    <p>
                      <b>Height: </b>
                      {track_2_5.height}
                    </p>
                    <p>
                      <b>Area: </b>
                      {track_2_5.width * track_2_5.height}
                    </p>
                    <p>
                      <b>Window location: </b>
                      {track_2_5.location}
                    </p>
                    <p>
                      <b>Mess: </b>
                      {mess.model_name}
                    </p>
                    <p>
                      <b>Glass: </b>
                      {glass.model_name}
                    </p>
                  </td>
                  <td>{track_2_5.quantity}</td>
                  <td>
                    <Cost
                      hardware={hardware}
                      type="sliding"
                      subtype="track25"
                      width={track_2_5.width}
                      height={track_2_5.height}
                      mess_price={mess.cost_per_sqft}
                      glass_price={mess.cost_per_sqft}
                    />
                  </td>
                  <td>
                    <Cost
                      hardware={hardware}
                      quantity={track_2_5.quantity}
                      type="sliding"
                      subtype="track25"
                      width={track_2_5.width}
                      height={track_2_5.height}
                      mess_price={mess.cost_per_sqft}
                      glass_price={mess.cost_per_sqft}
                    />
                  </td>
                </tr>
              )}

              {track_3.width && track_3.height && track_3.quantity && (
                <tr>
                  <td>
                    <img src={Track3Image} />
                  </td>
                  <td>
                    <p>
                      <b>Windows name: </b>Track 3 Window
                    </p>
                    <p>
                      <b>Width: </b>
                      {track_3.width}
                    </p>
                    <p>
                      <b>Height: </b>
                      {track_3.height}
                    </p>
                    <p>
                      <b>Area: </b>
                      {track_3.width * track_3.height}
                    </p>
                    <p>
                      <b>Window location: </b>
                      {track_3.location}
                    </p>
                    <p>
                      <b>Mess: </b>
                      {mess.model_name}
                    </p>
                    <p>
                      <b>Glass: </b>
                      {glass.model_name}
                    </p>
                  </td>
                  <td>{track_3.quantity}</td>
                  <td>
                    <Cost
                      hardware={hardware}
                      type="sliding"
                      subtype="track3"
                      width={track_3.width}
                      height={track_3.height}
                      mess_price={mess.cost_per_sqft}
                      glass_price={mess.cost_per_sqft}
                    />
                  </td>
                  <td>
                    <Cost
                      hardware={hardware}
                      quantity={track_3.quantity}
                      type="sliding"
                      subtype="track3"
                      width={track_3.width}
                      height={track_3.height}
                      mess_price={mess.cost_per_sqft}
                      glass_price={mess.cost_per_sqft}
                    />
                  </td>
                </tr>
              )}

              {casement.width && casement.height && casement.quantity && (
                <tr>
                  <td>
                    <img src={CasementImage} />
                  </td>
                  <td>
                    <p>
                      <b>Windows name: </b>Casemnet Window
                    </p>
                    <p>
                      <b>Width: </b>
                      {casement.width}
                    </p>
                    <p>
                      <b>Height: </b>
                      {casement.height}
                    </p>
                    <p>
                      <b>Area: </b>
                      {casement.width * casement.height}
                    </p>
                    <p>
                      <b>Window location: </b>
                      {casement.location}
                    </p>
                    <p>
                      <b>Glass: </b>
                      {glass.model_name}
                    </p>
                  </td>
                  <td>{casement.quantity}</td>
                  <td>
                    <Cost
                      hardware={hardware}
                      type="casement"
                      width={casement.width}
                      height={casement.height}
                    />
                  </td>
                  <td>
                    <Cost
                      hardware={hardware}
                      quantity={casement.quantity}
                      type="casement"
                      width={casement.width}
                      height={casement.height}
                    />
                  </td>
                </tr>
              )}

              {fixed.width && casement.height && casement.quantity && (
                <tr>
                  <td>
                    <img src={FixedImage} />
                  </td>
                  <td>
                    <p>
                      <b>Windows name: </b>Fixed Window
                    </p>
                    <p>
                      <b>Width: </b>
                      {fixed.width}
                    </p>
                    <p>
                      <b>Height: </b>
                      {fixed.height}
                    </p>
                    <p>
                      <b>Area: </b>
                      {fixed.width * fixed.height}
                    </p>
                    <p>
                      <b>Window location: </b>
                      {fixed.location}
                    </p>
                    <p>
                      <b>Glass: </b>
                      {glass.model_name}
                    </p>
                  </td>
                  <td>{fixed.quantity}</td>
                  <td>
                    <Cost
                      hardware={hardware}
                      type="fixed"
                      width={fixed.width}
                      height={fixed.height}
                    />
                  </td>
                  <td>
                    <Cost
                      hardware={hardware}
                      quantity={fixed.quantity}
                      type="fixed"
                      width={fixed.width}
                      height={fixed.height}
                    />
                  </td>
                </tr>
              )}

              {ventilation.width && ventilation.height && ventilation.quantity && (
                <tr>
                  <td>
                    <img src={VentilationImage} />
                  </td>
                  <td>
                    <p>
                      <b>Windows name: </b>Ventilation Window
                    </p>
                    <p>
                      <b>Width: </b>
                      {ventilation.width}
                    </p>
                    <p>
                      <b>Height: </b>
                      {ventilation.height}
                    </p>
                    <p>
                      <b>Area: </b>
                      {ventilation.width * ventilation.height}
                    </p>
                    <p>
                      <b>Window location: </b>
                      {ventilation.location}
                    </p>
                    <p>
                      <b>Glass: </b>
                      {glass.model_name}
                    </p>
                  </td>
                  <td>{ventilation.quantity}</td>
                  <td>
                    <Cost
                      hardware={hardware}
                      type="ventilation"
                      width={ventilation.width}
                      height={ventilation.height}
                    />
                  </td>
                  <td>
                    <Cost
                      hardware={hardware}
                      quantity={ventilation.quantity}
                      type="ventilation"
                      width={ventilation.width}
                      height={ventilation.height}
                    />
                  </td>
                </tr>
              )}
              {/* <tr>
                <td colSpan={4} className="text-right">
                  <b>Total</b>
                </td>
                <td>
                  <TotalCost
                    hardware={hardware}
                    mess={mess}
                    glass={glass}
                    ttrack_2={track_2}
                    ttrack_2_5={track_2_5}
                    ttrack_3={track_3}
                    fixed={fixed}
                    casement={casement}
                    ventilation={ventilation}
                  />
                </td>
              </tr> */}
            </tbody>
          </Table>
        </Row>
      </div>
    );
  }
}

const Cost = ({
  hardware,
  quantity = 1,
  type = "",
  subtype = "",
  width,
  height,
  glass_price = 0,
  mess_price = 0,
}) => {
  const {
    casement_window,
    fixed_window,
    ventilation_window,
    sliding_window: { mess, sutter_sash, track_2, track_2_5, track_3 },
    hardware_price: {
      casement_hardware,
      sliding_hardware,
      ventilation_hardware,
    },
  } = hardware;

  const cost = useMemo(() => {
    let hardwarePrice = 0;
    let framePrice = 0;

    const wm = Number(width) / 1000;
    const wh = Number(height) / 1000;
    const m2 = wm * wh;
    const peri = wm + wm + wh + wh;

    const gp = glass_price * m2;
    const mp = mess_price * m2;

    framePrice += gp + mp;

    if (type === "sliding") {
      Object.keys(sliding_hardware).forEach((key) => {
        hardwarePrice += Number(sliding_hardware[key]);
      });

      const wsp = Number(sutter_sash.frame_price) * peri;
      const wsrp = Number(sutter_sash.re_enforcement) * peri;
      const wsb = Number(sutter_sash.beating_price) * peri;
      const wsgrp = Number(sutter_sash.guide_rate) * peri;

      framePrice += wsp + wsrp + wsb + wsgrp;

      if (subtype == "track2") {
        const wfp = Number(track_2.frame_price) * peri;
        const wfrp = Number(track_2.re_enforcement) * peri;
        const wfgrp = Number(track_2.guide_rate) * peri;
        framePrice += wfp + wfrp + wfgrp;
      }
      if (subtype == "track25") {
        const wfp = Number(track_2_5.frame_price) * peri;
        const wfrp = Number(track_2_5.re_enforcement) * peri;
        const wfgrp = Number(track_2_5.guide_rate) * peri;
        framePrice += wfp + wfrp + wfgrp;
      }
      if (subtype == "track3") {
        const wfp = Number(track_3.frame_price) * peri;
        const wfrp = Number(track_3.re_enforcement) * peri;
        const wfgrp = Number(track_3.guide_rate) * peri;
        framePrice += wfp + wfrp + wfgrp;
      }
    }

    if (type === "casement") {
      Object.keys(casement_hardware).forEach((key) => {
        hardwarePrice += Number(casement_hardware[key]);
      });
      const { frame, sutter } = casement_window;
      const cfp = Number(frame.frame_price) * peri;
      const cbp = Number(frame.beading_price) * peri;
      const cgp = Number(frame.gasket) * peri;
      const cfrp = Number(frame.re_enforcement) * peri;

      const csfp = Number(sutter.frame_price) * peri;
      const csbp = Number(sutter.beating_price) * peri;
      const csgp = Number(sutter.gasket) * peri;
      const csfrp = Number(sutter.re_enforcement) * peri;

      framePrice += cfp + cbp + cgp + cfrp + csfp + csbp + csgp + csfrp;
    }

    if (type === "ventilation") {
      Object.keys(ventilation_hardware).forEach((key) => {
        hardwarePrice += Number(ventilation_hardware[key]);
      });
      const vbp = Number(ventilation_window.beading_price) * peri;
      const vfp = Number(ventilation_window.frame_price) * peri;
      const vg = Number(ventilation_window.gasket) * peri;
      const vrp = Number(ventilation_window.re_enforcement) * peri;
      framePrice += vbp + vfp + vg + vrp;
    }

    if (type === "fixed") {
      const fbp = Number(fixed_window.beading_price) * peri;
      const ffp = Number(fixed_window.frame_price) * peri;
      const flcp = Number(fixed_window.louver_cap) * peri;
      const frp = Number(fixed_window.re_enforcement) * peri;
      framePrice += fbp + ffp + flcp + frp;
    }

    return hardwarePrice + framePrice;
  }, [hardware]);

  return (
    <CurrencyFormat
      value={cost * quantity}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"₹"}
    />
  );
};

// const TotalCost = ({
//   hardware,
//   mess,
//   glass,
//   ttrack_2,
//   ttrack_2_5,
//   ttrack_3,
//   fixed,
//   casement,
//   ventilation,
// }) => {
//   const {
//     casement_window,
//     fixed_window,
//     ventilation_window,
//     sliding_window: { sutter_sash, track_2, track_2_5, track_3 },
//     hardware_price: {
//       casement_hardware,
//       sliding_hardware,
//       ventilation_hardware,
//     },
//   } = hardware;

//   const cost = useMemo(() => {
//     let hardwarePrice = 0;
//     let framePrice = 0;

//     const swm = Number(ttrack_2.width) / 1000;
//     const swh = Number(ttrack_2.height) / 1000;
//     const sm2 = swm * swh;
//     const speri = swm + swm + swh + swh;

//     const cwm = Number(width) / 1000;
//     const cwh = Number(height) / 1000;
//     const cm2 = cwm * cwh;
//     const cperi = cwm + cwm + cwh + cwh;

//     const fwm = Number(width) / 1000;
//     const fwh = Number(height) / 1000;
//     const fm2 = fwm * fwh;
//     const fperi = fwm + fwm + fwh + fwh;

//     const vwm = Number(width) / 1000;
//     const vwh = Number(height) / 1000;
//     const vm2 = vwm * vwh;
//     const vperi = vwm + vwm + vwh + vwh;

//     const mp = mess_price * sm2;
//     const sgp = glass_price * sm2;
//     const cgp = glass_price * cm2;
//     const fgp = glass_price * fm2;
//     const vgp = glass_price * vm2;

//     framePrice += sgp + mp;

//     Object.keys(sliding_hardware).forEach((key) => {
//       hardwarePrice += Number(sliding_hardware[key]);
//     });

//     const wsp = Number(sutter_sash.frame_price) * speri;
//     const wsrp = Number(sutter_sash.re_enforcement) * speri;
//     const wsb = Number(sutter_sash.beating_price) * speri;
//     const wsgrp = Number(sutter_sash.guide_rate) * speri;

//     framePrice += wsp + wsrp + wsb + wsgrp;

//     const wfp2 = Number(track_2.frame_price) * speri;
//     const wfrp2 = Number(track_2.re_enforcement) * speri;
//     const wfgrp2 = Number(track_2.guide_rate) * speri;
//     framePrice += wfp2 + wfrp2 + wfgrp2;

//     const wfrp25 = Number(track_2_5.frame_price) * speri;
//     const wfrp25 = Number(track_2_5.re_enforcement) * speri;
//     const wfgrp25 = Number(track_2_5.guide_rate) * speri;
//     framePrice += wfp25 + wfrp25 + wfgrp25;

//     const wfp3 = Number(track_3.frame_price) * speri;
//     const wfrp3 = Number(track_3.re_enforcement) * speri;
//     const wfgrp3 = Number(track_3.guide_rate) * speri;
//     framePrice += wfp3 + wfrp3 + wfgrp3;

//     Object.keys(casement_hardware).forEach((key) => {
//       hardwarePrice += Number(casement_hardware[key]);
//     });
//     const { frame, sutter } = casement_window;
//     const cfp = Number(frame.frame_price) * cperi;
//     const cbp = Number(frame.beading_price) * cperi;
//     const cgp = Number(frame.gasket) * cperi;
//     const cfrp = Number(frame.re_enforcement) * cperi;

//     const csfp = Number(sutter.frame_price) * cperi;
//     const csbp = Number(sutter.beating_price) * cperi;
//     const csgp = Number(sutter.gasket) * cperi;
//     const csfrp = Number(sutter.re_enforcement) * cperi;

//     framePrice += cfp + cbp + cgp + cfrp + csfp + csbp + csgp + csfrp;

//     Object.keys(ventilation_hardware).forEach((key) => {
//       hardwarePrice += Number(ventilation_hardware[key]);
//     });
//     const vbp = Number(ventilation_window.beading_price) * vperi;
//     const vfp = Number(ventilation_window.frame_price) * vperi;
//     const vg = Number(ventilation_window.gasket) * vperi;
//     const vrp = Number(ventilation_window.re_enforcement) * vperi;
//     framePrice += vbp + vfp + vg + vrp;

//     const fbp = Number(fixed_window.beading_price) * fperi;
//     const ffp = Number(fixed_window.frame_price) * fperi;
//     const flcp = Number(fixed_window.louver_cap) * fperi;
//     const frp = Number(fixed_window.re_enforcement) * fperi;
//     framePrice += fbp + ffp + flcp + frp;

//     return hardwarePrice + framePrice;
//   }, [hardware]);

//   return (
//     <CurrencyFormat
//       value={cost * quantity}
//       displayType={"text"}
//       thousandSeparator={true}
//       prefix={"₹"}
//     />
//   );
// };

export default InvoicePage;

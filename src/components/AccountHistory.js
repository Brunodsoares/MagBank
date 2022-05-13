import React from "react";
import { Col, Table } from "react-bootstrap";

const AccountHistory = ({ data }) => {
  
const { history } = data;
  return (
    <Col xs={12} lg={8} className="mt-lg-5 pt-lg-5">
      <h3 className="mt-4">Extrato de conta corrente</h3>
      <Table>
        <tbody>
          {history.map(({data, description, value, entry, key}) => (
            <tr key={key}>
              <td>
                <h2>{entry}</h2>
              </td>
              <th>{data}</th>
              <th>{description}</th>
              <th>{value}</th>
            </tr>
          ))}
        </tbody>
      </Table>
    </Col>
  );
};

export default AccountHistory;

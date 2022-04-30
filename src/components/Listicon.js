import React from "react";
import {Row, Col} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Listicon = ({
    icon,
    size = '1',
    color ='#fff',
    textClassName = '',
    className = '',
    children,
    onclick,
}) => (
    <Row className={`d-flex align-items-center ${className}`} onclick={onclick} >
        <Col xs={size} className="d-flex justify-content-center">
            <FontAwesomeIcon icon={icon} size={`${size}x`} color={color} />
        </Col>
        <Col xs={11 - size} className={textClassName}>
            {children}
        </Col>
    </Row>
);

export default Listicon;
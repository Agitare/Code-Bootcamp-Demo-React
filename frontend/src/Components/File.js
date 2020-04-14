import React from "react";
import PropTypes from 'prop-types';
import "./File.css";

export default function Fruit(props) {
    return <div className={`fruit ${props.type}`}>
        {props.children}
        <button onClick={event => props.onDelete()}>X</button>
    </div>
};

Fruit.propTypes = {                         //PropTypes should be defined.
    type: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    onDelete: PropTypes.func
}
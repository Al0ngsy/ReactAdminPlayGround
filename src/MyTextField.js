import React from 'react';

const MyTextField = ({ record = {}, source }) =>
    <p>{record[source]}</p>;

export default MyTextField;
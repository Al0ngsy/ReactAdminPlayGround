import React from 'react';
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';
// Own Custom Field
import MyTextField from "./MyTextField"
import MyUrlField from './MyUrlField';

export const UserList = props => (
    // <List> component, responsible for grabbing the information from the API
    //      displaying the page title, and handling pagination
    <List {...props}>
        {/**<Datagrid> component, it renders a table with one row for each record */}
        <Datagrid rowClick="edit">
            {/**Each Field component maps a different field in the API response, specified by the source prop 
                it's possible to write your own Field
                here:   TextField == MyTextField (with optinal styling)
                        UrlField == MyUrlField (with optinal styling)
            */}
            <TextField source="id" />
            <MyTextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="phone" />
            <MyUrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);
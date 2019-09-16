import React from 'react';
import {
    List,
    Edit,
    Create,
    Filter,
    Datagrid,
    TextField,
    ReferenceField,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    EditButton,
    DisabledInput,
    TextInput,
    LongTextInput,
    Responsive
} from 'react-admin';

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const PostList = props => (
    <List title={<span>Posts List</span>} filters={<PostFilter />} {...props}>
        <Responsive
            /*
            small={
                // List for small Screen with example <SimpleList>
            }
            */
            medium={
                <Datagrid>
                    <TextField source="id" />
                    {/**ReferenceField make a reference to another Field
                            e.g. fetches the reference data, and passes it as a record to its child component
                    */}
                    <ReferenceField source="userId" reference="users">
                        {/**And display whatever we want from the referenced Field name, username, id etc. */}
                        <TextField source="name" />
                    </ReferenceField>
                    <TextField source="title" />
                    <EditButton></EditButton>
                </Datagrid>
            }
        ></Responsive>
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Post {record && `"${record.title}"`}</span>
}

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            {/**ReferenceInput is similar to ReferenceField */}
            <ReferenceInput source="userId" reference="users">
                {/**<SelectInput> renders as a <select> tag in HTML */}
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);
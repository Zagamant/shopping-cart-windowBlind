import * as React from 'react';
import {
    Datagrid,
    ImageField,
    List,
    NumberField,
    TextField,
    TextInput,
    NumberInput,
    SimpleForm,
    Edit,
    Create,
    Toolbar,
    SaveButton,
    DeleteButton,
} from 'react-admin';

export const WindowBlindList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="model" />
            <NumberField source="height" />
            <NumberField source="width" />
            <NumberField source="price" />
            <TextField source="description" />
            <ImageField source="photoLink" />
        </Datagrid>
    </List>
);

export const WindowBlindEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm toolbar={<CustomToolbar />}>
                <TextInput disabled source="id" />
                <TextInput source="model" />
                <NumberInput source="height" />
                <NumberInput source="width" />
                <NumberInput source="price" />
                <TextInput source="description" />
                <TextInput source="photoLink" />
            </SimpleForm>
        </Edit>
    );
};

export const WindowBlindCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="model" />
            <NumberInput source="height" />
            <NumberInput source="width" />
            <NumberInput source="price" />
            <TextInput source="description" />
            <TextInput source="photoLink" />
        </SimpleForm>
    </Create>
);

const CustomToolbar = (props) => (
    <Toolbar {...props}>
        <SaveButton />
        <DeleteButton undoable={false} />
    </Toolbar>
);

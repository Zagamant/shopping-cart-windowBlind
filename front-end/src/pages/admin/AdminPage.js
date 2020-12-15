import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserCreate, UserEdit, UserList } from './components/userList';
import simpleRestProvider from 'ra-data-simple-rest';
import {
    WindowBlindCreate,
    WindowBlindEdit,
    WindowBlindList,
} from './components/windowBlindList';
import CustomDataProvider from './components/CustomDataProvider';

const dataProvider = CustomDataProvider('http://localhost:8080/api/v1');
const dataProvider1 = simpleRestProvider('http://localhost:8080/api/v1');

class AdminPage extends React.Component {
    render() {
        return (
            <Admin dataProvider={dataProvider}>
                <Resource
                    name="windowBlinds"
                    list={WindowBlindList}
                    edit={WindowBlindEdit}
                    create={WindowBlindCreate}
                />
                <Resource
                    name="users"
                    list={UserList}
                    edit={UserEdit}
                    create={UserCreate}
                />
            </Admin>
        );
    }
}

export default AdminPage;

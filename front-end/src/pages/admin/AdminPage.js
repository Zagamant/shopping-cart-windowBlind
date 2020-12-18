import React from 'react';
import { Admin, Resource } from 'react-admin';
import {
    UserCreate,
    UserEdit,
    UserComponets,
} from './components/userComponets';
import {
    WindowBlindCreate,
    WindowBlindEdit,
    WindowBlindList,
} from './components/windowBlindList';
import CustomDataProvider from './components/CustomDataProvider';
import CustomAuthProvider from './components/CustomAuthProvider';
import authTest from './components/authTest';

let dataProvider = CustomDataProvider('http://localhost:8080/api/v1');

class AdminPage extends React.Component {
    render() {
        return (
            <Admin
                dataProvider={dataProvider}
                authProvider={CustomAuthProvider}
                title="Admin Page"
            >
                <Resource
                    name="windowBlinds"
                    list={WindowBlindList}
                    edit={WindowBlindEdit}
                    create={WindowBlindCreate}
                />
                <Resource
                    name="users"
                    list={UserComponets}
                    edit={UserEdit}
                    create={UserCreate}
                />
            </Admin>
        );
    }
}

export default AdminPage;

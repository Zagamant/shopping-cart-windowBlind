import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserCreate, UserEdit, User } from './components/user';
import {
    WindowBlindCreate,
    WindowBlindEdit,
    WindowBlindList,
} from './components/windowBlindList';
import CustomDataProvider from './components/CustomDataProvider';
import CustomAuthProvider from './components/CustomAuthProvider';

let dataProvider = CustomDataProvider(process.env.REACT_APP_SERVER_URL);

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
                    list={User}
                    edit={UserEdit}
                    create={UserCreate}
                />
            </Admin>
        );
    }
}

export default AdminPage;

import React from 'react';
import Layout from '../components/Layout';

class NotFound extends React.Component {
    render() {
        const center = {
            textAlign: 'center',
        };

        return (
            <Layout>
                <div style={center}>
                    <h1>404</h1>
                    <p>This is the 404 Page.</p>
                </div>
            </Layout>
        );
    }
}

export default NotFound;

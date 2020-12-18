import React from 'react';
import Layout from '../components/Layout';
import { GitHubIcon } from '../components/icons';

class About extends React.Component {
    render() {
        return (
            <Layout
                title="О нас"
                description="На это странице вы можете посмотреть информацию о нас"
            >
                <div className="text-center mt-5">
                    <h1>О нас</h1>
                    <p>
                        Проект был выполнен в <strong>обучающих целях</strong> с
                        помощью React.
                    </p>

                    <a
                        className="btn btn-primary"
                        href="https://github.com/Zagamant/shopping-cart-windowBlind"
                    >
                        <GitHubIcon width={'18px'} />{' '}
                        <span className="ml-2 mr-4">Просмотреть код</span>
                    </a>
                </div>
            </Layout>
        );
    }
}

export default About;

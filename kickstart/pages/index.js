import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout'
import { Link } from '../routes';

class CampaignIndex extends React.Component {
    static async getInitialProps(ctx) {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return { campaigns };
    };

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: (
                    <Link route={`/campaigns/${address}`}>
                        <a>View Campaign</a>
                    </Link>
                ),
                fluid: true
            };
        });

        return (
            <Card.Group items={items}/>
        );
    };

    render() {
        return (
            <Layout>
                <div>
                    <link async rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css" />
                    <h3>Open Campaigns</h3>
                    <Link route="/campaigns/new">
                        <a>
                        <Button 
                            floated="right" 
                            content="Create Campaign" 
                            icon="add circle" 
                            primary 
                        />
                        </a>
                    </Link>
                    {this.renderCampaigns()}
                </div>
            </Layout>
        );
    };
};

export default CampaignIndex;
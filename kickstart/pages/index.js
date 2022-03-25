import React from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends React.Component {
    static async getInitialProps(ctx) {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return { campaigns };
    };

    render() {
        return (
            <div>Campaigns Index!</div>
        );
    };
};

export default CampaignIndex;
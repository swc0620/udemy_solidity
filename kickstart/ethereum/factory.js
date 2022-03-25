import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const CAMPAIGNFACTORY_CONTRACT_ADDRESS = '0xC90A5F1f9726D1d1Bf8F1a441d853a654A71b422';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    CAMPAIGNFACTORY_CONTRACT_ADDRESS
);

export default instance;
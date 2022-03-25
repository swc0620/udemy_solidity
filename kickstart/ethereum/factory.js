import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const CAMPAIGNFACTORY_CONTRACT_ADDRESS = '0x14cc33f03C1C36aD06Ec3B88C58B9f135Cd74faD';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    CAMPAIGNFACTORY_CONTRACT_ADDRESS
);

export default instance;
import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const CAMPAIGNFACTORY_CONTRACT_ADDRESS = '0x872DF7B3E3325ba7a70A13b34174A6B086147159';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    CAMPAIGNFACTORY_CONTRACT_ADDRESS
);

export default instance;
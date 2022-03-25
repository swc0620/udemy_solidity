import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const CAMPAIGNFACTORY_CONTRACT_ADDRESS = '0xF2D17d1811281b2173DE48186cCf80707873d701';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    CAMPAIGNFACTORY_CONTRACT_ADDRESS
);

export default instance;
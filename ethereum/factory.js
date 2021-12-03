import web3 from './web3'; //not accessing the web3 library, this is an instance
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x3e04f75aAcC2d2AEef6b7b1a14b5ebE0ae90aC57'
);

export default instance;

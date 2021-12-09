import web3 from './web3'; //not accessing the web3 library, this is an instance
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x9B04732749b13009c9Ba55B1Bf1Dd055D06ACf1D'
);

export default instance;

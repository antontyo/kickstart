const path = require('path');
const solc = require('solc');
const fs = require('fs-extra'); //Give access to file system in local computer

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath); //ensure no directory and then create if not available

//console.log(output);
for(let contract in output){
  let fileName = contract.replace(':', ''); //Windows cannot use ':' as a part of filename
  fs.outputJsonSync(
    path.resolve(buildPath, fileName + '.json'),
    output[contract]
  );
}

const fs = require("fs")




/**
 * Save useful smart contract information deployment in a file
 * @param contractAddress Contract address
 * @param contractName Contract name
 * @param network Network name
 * @param path Path to save the file (default: ./artifacts/deployment-history.txt)
 * 
 * Example of use:
 * ```typescript
 * saveDeployment('0x123456789', 'MyContract', 'rinkeby')
 * ```
 */
function saveDeployment(
	contractAddress = 'No address provided',
	contractName = 'Contract',
	network = 'No network provided',
	path = './artifacts/deployment-history.txt'
) {
	const superiorDivisor ='____________________CONTRACT____________________\n';
	const inferiorDivisor ='________________________________________________\n';
	const deploymentString =
		superiorDivisor +
		`Deployed ${contractName}: ${contractAddress}\nNetwork: ${network}\nDate: ${new Date().toString()}\n` +
		inferiorDivisor;
	fs.appendFileSync(path, deploymentString, { encoding: 'utf-8' });
}

export {
	saveDeployment
}
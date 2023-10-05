
# Deployment history

This npm package contains a util function for storing contract addresses inside artifacts folder in hardhat (can be changed)

## Installation

Install deployment-history as a dev dependency with npm

```bash
  npm install -D deployment-history
```
    

## Usage/Examples

In your scripts/ directory:

```javascript

import { saveDeployment } from "deployment-history";

import { ethers } from 'hardhat';

async function main() {
	const accounts = await ethers.getSigners();
	const network = await ethers.provider.getNetwork();

	console.log('==================================================');

	console.log('Deploying!');
	console.log(`Network: ${network.name}`);

	const YourContractFactory = await ethers.getContractFactory('YourContract');
	const yourContractInstance = await YourContractFactory.deploy();
	const address = await yourContractInstance.getAddress();
	console.log(`Deployed at: ${address}`);
	console.log('==================================================');
	saveDeployment(address,network.name)
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});

```


## Output

The default output file is inside the .gitignored artifacts folder provided by hardhat as deployment-history.txt

```bash

##############################################################################
Deployed: Address
 Network:Network
 Date: Thu Oct 05 2023 15:57:35 GMT-0300 (Brasilia Standard Time) 
##############################################################################
##############################################################################
Deployed: Address
 Network:Network
 Date: Thu Oct 05 2023 15:57:37 GMT-0300 (Brasilia Standard Time) 
##############################################################################


```



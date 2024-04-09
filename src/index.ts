import { appendFileSync } from "node:fs";

type Options = {
	contractAddress?: string;
	contractName?: string;
	network?: string;
	path?: string;
};

/**
 * Write deployment information to a file
 * @param {Options} configuration object
 */
function saveDeployment(
	
	{
		contractAddress = "No address provided",
		contractName = "Contract",
		network = "No network provided",
		path = "./artifacts/deployment-history.txt",
	}: Options
) {
	const superiorDivisor = "____________________CONTRACT____________________\n";
	const inferiorDivisor = "________________________________________________\n";
	const deploymentString =
		superiorDivisor +
		`Deployed ${contractName}: ${contractAddress}\nNetwork: ${network}\nDate: ${new Date().toString()}\n` +
		inferiorDivisor;
	appendFileSync(path, deploymentString, { encoding: "utf-8" });
}

export { saveDeployment,Options };

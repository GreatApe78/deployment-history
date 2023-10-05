const fs = require("fs")


/**
 * @dev saves a deployed contract information
 * @param {string} contractAddress Address of the contract you want to save 
 * @param {string} network The network name
 * @param {string} path The path you want to save
 */
function saveDeployment(contractAddress="No address provided",network="No provided",path="./deployment-history.txt"){
    const divisor = "##############################################################################\n"
    const deploymentString = divisor+`Deployed: ${contractAddress} Network:${network} in ${new Date().toString()} \n` +divisor 
    fs.appendFileSync(path,deploymentString,{encoding:"utf-8"})
    console.log("Deployment saved")
}


module.exports={
    saveDeployment
}
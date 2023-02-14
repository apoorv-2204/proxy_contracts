// this scirpt failed to transfer owner ship
//     - check gas limit
//         - also check nb of runs

async function main() {

    const newOwnerOfTheProxyAdmin = '0x53aD6DDd3962fA9e06c66E7cFaaeADc9ce55EaA8';   // this will be the address of the TimeLock, as we need it to be the owner of the Proxy Admin.

    console.log("Transferring ownership of ProxyAdmin...");       // The owner of the ProxyAdmin can upgrade our contracts
    console.log(await upgrades.admin.transferProxyAdminOwnership(newOwnerOfTheProxyAdmin));

    console.log("Transferred ownership of ProxyAdmin to:", newOwnerOfTheProxyAdmin);

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });


// async function main() {
//     // new admin of proxy admin contract
//     // this will be the address of the TimeLock, as we need it to be the owner of the Proxy Admin.
//     // transfer ownership of proxyadmin contract to time lock instead of deployer
//     // deoployer still admin of time lock controller
//     const timeLockAdminContractAddress = '0xE6A99df82Ef83D519564eD93bd741beBf6C2A52E';// this will be the address of the TimeLock, as we need it to be the owner of the Proxy Admin.

//     console.log("Transferring ownership of ProxyAdmin...");
//     // The owner of the ProxyAdmin can upgrade our contracts

//     // await upgrades.admin.transferProxyAdminOwnership(newOwnerOfTheProxyAdmin = timeLockAdminContractAddress);
//     // await upgrades.admin.transferProxyAdminOwnership(timeLockAdminContractAddress);
//     await upgrades.admin.transferProxyAdminOwnership(timeLockAdminContractAddress);

//     console.log("Transferred ownership of ProxyAdmin to:", newOwnerOfTheProxyAdmin = timeLockAdminContractAddress);

// }

// main()
//     .then(() => process.exit(0))
//     .catch(error => {
//         console.error(error);
//         process.exit(1);
//     });
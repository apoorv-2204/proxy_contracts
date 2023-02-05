
<!-- 0x2904FBa2929fb9b56f2dEb743B4c724E71Cdf34c -->
https://app.safe.global/

- npx hardhat verify --network <netowrk> <contract-address>


```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
npx hardhat run --network mumbai_testnet scripts/upgrade_box_v2.js 


### overview

Time Lock
- public blockchain are immutable
- make sure tx is only executed with safety condition
- ex: proper time of tx execution, like auction contract,tx should be executed in proper time window
- like mint of nft in market place, but astart auction only after next day. so time lock contract
- ime lock functions, until certain time window si reachede it can be executed
- ICO investors, hold ico investors from selling tokens during listing in public to avouid price volaitly  
- represent a time lock: to restrict access to SC function util a predetermined period has lapsed
-  mechanism to delay SC funciton exectuion
- modifer that alter behaviour of certain funciton
-   like time b/w 8 th febraruy and 14 feberaruy
```solidity
    modifier onlyBefore(uint timestamp){
            if(block.timstamp>= timestamp){
                revert/or let go    
            }
    }
 ```
- it is extensively used in dao
   - proposing new poposal
   - and time for voting
   



####
- Proposer
  - maintenance operations +> schedule big fices by calling TLC contractgs 
  - pass address of target contract and pass function arg
  - multisig wallet can trigger TLC
  - ex: mutlisig tx can be used to call contract TLC and upgrade BOX v1 to v2
  -  
- executor 
  - trigger the time lock contract to call the sc once the queued operation have undergone delay period
  - 
  -
  -  
- recap:  
- deploy BOXv1 with proxy,   //deploy v1 and proxy
- https://safe.global/ works on goerli
- recod multisig wallet address
- setup gnosis safe app with owners 
- deploy BOXv1 with proxy on goerli
- setup env variables.
- https://rpc.info/
- deploy time lockController contract
- it will be adminstrator  * By default, this contract is self administered, meaning administration tasks  * have to go through the timelock process. The proposer (resp executor) role * is in charge of proposing (resp executing) operations. A common use case is * to position this {TimelockController} as the owner of a smart contract, with * a multisig or a DAO as the sole proposer.
- nft ico example
- mecnahism to restrict time lock  behavior
- propose, roa with multiisg, and executor ,a ll are contracts
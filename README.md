

### Commands
```shell
npx hardhat run scripts/deploy.js --network  goerli/mumbai/hh
npx hardhat verify --network goerli/mumbai/hh Ox...
npx hardhat run --network mumbai_testnet scripts/upgrade_box_v2.js 
npx hardhat verify --network goerli  0xE6A99df82Ef83D519564eD93bd741beBf6C2A52E  --constructor-args ./argument.js 
```

## overview

Time Lock
- idea: Time lock functions, until certain time window is Reached it cant be executed
- represent a time lock: to restrict access to SC function util a predetermined period has lapsed
- mechanism to delay SC funciton exectuion
- It can be impl with modifer that alter behaviour of certain funciton by putting condtion
- public blockchain are immutable and  to  make sure tx is only executed with safety condition
   - ex: proper time of tx execution, like auction contract,tx should be executed in proper time window
   - like mint of nft in market place, but astart auction only after next day. so time lock contract
   - Hold ICO investors, until ICO is done, or during IPO, during listing in public to avouid price volaitly 
   - transfer owner ship to highest bidder, after auction time has passed,   like time b/w 8 th febraruy and 14 feberaruy
- it is extensively used in dao, bcz proposing new poposal and provide  time for voting, then schedule execution
   
```solidity
    modifier onlyBefore(uint timestamp){
            if(block.timstamp<= timestamp){
                revert/or let go    
            }
    }

    modifier onlyAfter(uint timestamp){
            if(block.timstamp>= timestamp){
                revert/or let go    
            }
    }
 ```




####
- Proposer
- an address (smart contract or EOA) that is in charge of scheduling (and cancelling) operations
  - maintenance operations => schedule improvements/fixes by calling TLC contracts, to upgrade a contract
  - pass address of target contract and pass function arg
  - multisig wallet can trigger TLC
  - ex: mutlisig tx can be used to call contract TLC and upgrade BOX v1 to v2


- Executor 
   - Executor: an address (smart contract or EOA) that is in charge of executing operations once the timelock has expired. 
   - trigger the time lock contract to call the sc once the queued operation have undergone delay period

Admin: 

   - an address (smart contract or EOA) that is in charge of granting the roles of Proposer and Executor. 
   - it will be adminstrator who Deploy time lockController contract
   -  By default, this contract is self administered, meaning administration tasks  * have to go through the timelock process
      The proposer (resp executor) role * is in charge of proposing (resp executing) operations. A common use case is 
      * to position this {TimelockController} as the owner of a smart contract, with * a multisig or a DAO as the sole proposer.
   -example
    - nft ico 
    - mecnahism to restrict time lock  behavior
    - propose, rate o with multiisg, and executor ,a ll are contracts


### Proxy types
Proxies for upgrading SC, patterns:
1) Transparent Proxy Pattern (proxyadmin try to reroute) 
2) Universal upgradable proxy standard, (upgradation in impl contract)
3) Beacon pattern : multiple proxies


### Transparent Proxy patten
- Components: 
   - Proxy (with whom user interacts with, keep track of state variables.,store state) 
   - Implementation contract: logic for sc functionality(but state var stored in proxy) all impl must have all functionailty that previous contract had
   trying to seperate state from logic
   - Proxy Admin, links the proxy and impl contract,(The owner of proxy admin can/will be TIME LOCK COntract)



#### links
 - gnosis chain safe, multi sig wallet =https://app.safe.global/
 - https://docs.openzeppelin.com/defender/guide-timelock-roles

import Web3, { utils } from "web3";
import store from "@/store";
import BigNumber from "bignumber.js";
import Timer from "timer.js";
import _ from "lodash";

import {
  CONTARCT_ETHPRO,

  CONTARCT_DATA,
} from "../config/wallet";

import Cookies from "js-cookie";


export let web3 = null,
  eminfo_update_timer = null;
const contarctData =  require('../config/data.json')
export function getDATA() {

  return contarctData.SAT

}

export function getConfigData() {
  return contarctData.Config;
}


export async function getGasPrice() {
  return new Promise((resolve, reject) => {
  return   new web3.eth.getGasPrice()
        .then((data) => {
          console.log('=================data'+JSON.stringify(data))
          resolve(
            data
          );
          return data
        })
        .catch((error) => {
          reject(error);
        });

 /*   setTimeout(() => {
      reject("timeout");
    }, 200000);*/
  });
}


export async function initConnection() {
  if (store.state.app.is_wallet) {
    const provider = window.ethereum || window.web3.currentProvider;
    web3 = new Web3(provider);
    if (typeof window.ethereum != "undefined") {
      await window.ethereum.enable();
    }
  } else {
    const RPC = getConfigData().rpcUrl;
    web3 = new Web3(RPC);
  }

  return web3;
}

export function initTimer() {
  eminfo_update_timer = new Timer({
    tick: 15,
    ontick: _.throttle(() => {
      updateEmInfo();
      //  alert("ccc = "+getAddress())
    }, 15000),
  });
}

export function startTimer() {
  if (
    eminfo_update_timer != null &&
    eminfo_update_timer.getStatus() != "started"
  ) {
    eminfo_update_timer.start(99999999);
  }
}
export async function getChainId(){
  const chainId =  await window.ethereum.request({ method: 'eth_chainId' });
  if(chainId!=getConfigData().chainId){  // polygon test 80001  polygon main 137
    await switchChain()
    return '';
  }else{
    return '';
  }
}
export async function getChainIdVlaue(){
  const chainId =  await window.ethereum.request({ method: 'eth_chainId' });
   return chainId;
}
export async function   switchChain(){
  let chainId = getConfigData().chainId
  let chainId0x ="0x" + chainId.toString(16);
  try {
    // wasAdded is a boolean. Like any RPC method, an error may be thrown. wallet_switchEthereumChain
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params:[ {
        chainId: chainId0x,
        chainName: 'MATIC',
        nativeCurrency: {
          name: 'MATIC', //137
          symbol: 'MATIC',
          decimals: 18,
        },
        rpcUrls: [ getConfigData().rpcUrl],
        blockExplorerUrls: [  getConfigData().blockExplorerUrls ],
       /* rpcUrls: ['https://polygon-rpc.com/'],
        blockExplorerUrls: ['https://polygonscan.com/'],*/
      }],
    });
   await init();

  /*  if (wasAdded) {

      console.log('Thanks for your interest!');
    } else {
      console.log('Your loss!');
    }*/
  } catch (error) {

    console.log(error);
  }
}

export async function   addSATCoin(){
  const tokenAddress = getDATA().IDO.OG.address;
  const tokenSymbol = getDATA().IDO.OG.symbol;
  const tokenDecimals = 18;
  const tokenImage = '';

  try {
    // wasAdded is a boolean. Like any RPC method, an error may be thrown.
    const wasAdded = await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20', // Initially only supports ERC20, but eventually more!
        options: {
          address: tokenAddress, // The address that the token is at.
          symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
          decimals: tokenDecimals, // The number of decimals in the token
          image: tokenImage, // A string url of the token logo
        },
      },
    });

    if (wasAdded) {
      console.log('Thanks for your interest!');
    } else {
      console.log('Your loss!');
    }
  } catch (error) {
    console.log(error);
  }
}

export async function initData() {
  try {
    await updateEmInfo();
  } catch (e) {
    console.log(e);
  }
}

export async function init() {
  try {
    await initConnection();
    await updateEmInfo();
    initTimer();
    startTimer();
  } catch (e) {
    console.log(e);
  }
}

export function getContract(contract) {
  const contract_info = CONTARCT_DATA[contract];
  return new web3.eth.Contract(contract_info.abi, contract_info.address);
}
export function getContractNew(contract,address) {
  const contract_info = CONTARCT_DATA[contract];
  return new web3.eth.Contract(contract_info.abi, address);
}

export function getContractAddress(contract) {
  const contract_info = CONTARCT_DATA[contract];
  return contract_info.address;
}

export function getContractByAddress(address) {
  let contract_list = [];
  for (const contract in CONTARCT_DATA) {
    if (
      address.toLocaleLowerCase() ==
      CONTARCT_DATA[contract].address.toLocaleLowerCase()
    ) {
      contract_list.push(contract);
    }
  }
  return contract_list;
}

export async function updateEmInfo() {
  let address = getAddress();

  store.commit("SET_DEF_ADDRESS", address);
}

export function isAddress(address) {
  return utils.isAddress(address);
}

export function getAddress() {
  if (!store.state.app.is_wallet) {
    return "";
  }
  let address = "";
  if (typeof window.ethereum != "undefined") {
    address = window.ethereum.selectedAddress;
  } else {
   
  }
  return address;
}

export async function getBlock(number) {
  return await web3.eth.getBlock(number);
}

export async function getTransaction(hash) {
  return await web3.eth.getTransaction(hash);
}

export async function getBlockTimestamp(number) {
  const { timestamp } = await getBlock(number);
  return timestamp;
}

export async function getBalance(address) {
  let balance = 0;
  try {
    balance = await this.web3.eth.getBalance(address);
  } catch (e) {
    console.log(e)
  }
  return balance;
}

export function formatWei(amount) {
  return utils.fromWei(new BigNumber(amount).toFixed(), "ether");
}

export function toWei(amount) {
  return utils.toWei(new BigNumber(amount).toFixed(), "ether");
}

export function toByte(mixed, length = 32) {
  if (!utils.isHexStrict(mixed)) {
    mixed = utils.toHex(mixed);
  }
  return utils.padRight(mixed, length);
}

export function trim(value) {
  return value.trim().replace(/[\0\s]*/g, "");
}

export function isValidCode(code) {
  return new Promise((resolve, reject) => {
    const contract_obj = getContract(CONTARCT_ETHPRO);
    contract_obj.methods
      .isValid(web3.utils.fromAscii(code, 32))
      .call()
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}




///////////////////approve()    //approve  ////////////////////////////

export async function approve(amount, type, approveAddress) {
  return new Promise((resolve, reject) => {
    const contract_obj = getContract(type);
    contract_obj.methods
      .approve(approveAddress, toWei(amount * 1000))
      .send({
        from: getAddress(),
      })
      .then((data) => {
        resolve(data);
        return true;
      })
      .catch((error) => {
        reject(error);
      });

    setTimeout(() => {
      reject("timeout");
    }, 200000);
  });
}


export async function getStakeInfo(pool) {
  let address = getAddress();
  if (address === '')
    address = '0x0000000000000000000000000000000000000000'
  return new Promise((resolve) => {
    const contract_obj = getContract(pool)
    contract_obj.methods
        .getStakeInfo(address)
        .call()
        .then((data) => {
          resolve({
            status: true,
            data: data
          })
        })
        .catch((e) => resolve({
          status: false,
          error: e
        }))
  })
}



export async function withdraw(amount, pool) {
  return new Promise(resolve => {
    const contract_obj = getContract(pool)
    contract_obj.methods
        .withdraw(amount)
        .send({from: getAddress()})
        .then((data) => {
          resolve({
            status: true,
            data: data
          })
        })
        .catch((e) => resolve({
          status: false,
          error: e
        }))
  })
}



export async function getReward(pool) {
  return new Promise(resolve => {
    const contract_obj = getContract(pool)
    contract_obj.methods
        .getReward()
        .send({from: getAddress()})
        .then((data) => {
          resolve({
            status: true,
            data: data
          })
        })
        .catch((e) => {
          resolve({
            status: false,
            error: e
          })
        })
  })
}

export async function balanceOf(token) {
  return new Promise(resolve => {
    const contract_obj = getContract(token)
    contract_obj.methods
        .balanceOf(getAddress())
        .call()
        .then((data) => {
          resolve({
            status: true,
            data,
          });
        })
        .catch((e) => resolve({
          status: false,
          error: e
        }));
  })
}

export async function allowanceOf(type, pool) {
  return new Promise(resolve => {
    const contract_obj = getContract(type);
    const spender = getContractAddress(pool);

    contract_obj.methods
        .allowance(getAddress(), spender)
        .call()
        .then((data) => {
          resolve({
            status: true,
            data
          })
        })
        .catch((e) => resolve({
          status: false,
          error: e
        }));
  });
}

export async function doApprove1(amount, type, spender) {
  return new Promise(resolve => {
    const contract_obj = getContract(type);
    contract_obj.methods
        .approve(getContractAddress(spender), amount   )
        .send({
          from: getAddress(),
        })
        .then((data) => {
          resolve({
            status: true,
            data
          })
        })
        .catch((error) => {
          resolve({
            status: false,
            error: error
          })
        });

    setTimeout(() => {
      resolve({
        status: false,
        error: { message: 'timeout' }
      });
    }, 200000);
  });
}

export async function doApprove2(amount, type, spender) {
  return new Promise(resolve => {
    const contract_obj = getContract(type);
    contract_obj.methods
        .approve(spender, amount   )
        .send({
          from: getAddress(),
        })
        .then((data) => {
          resolve({
            status: true,
            data
          })
        })
        .catch((error) => {
          resolve({
            status: false,
            error: error
          })
        });

    setTimeout(() => {
      resolve({
        status: false,
        error: { message: 'timeout' }
      });
    }, 200000);
  });
}
export function getAllowance( type, spender) {
  return new Promise((resolve, reject) => {
    const contract_obj = getContract(type);
    contract_obj.methods
        .allowance(getAddress(),spender)
        .call()
        .then((data) => {
          resolve({
            status: true,
            data,
          });
        })
        .catch((e) => reject(e));
  });
}

export async function stake(amount, pool) {
  return new Promise((resolve) => {
    const contract_obj = getContract(pool)
    contract_obj.methods
        .stake(amount,getAddress())
        .send({from: getAddress()})
        .then((data) => {
          resolve({
            status: true,
            data: data
          })
        })
        .catch((e) => resolve({
          status: false,
          error: e
        }))
  })
}


export async function unstake(amount, pool) {
  return new Promise((resolve) => {
    const contract_obj = getContract(pool)
    contract_obj.methods
        .unstake(amount,false)
        .send({from: getAddress()})
        .then((data) => {
          resolve({
            status: true,
            data: data
          })
        })
        .catch((e) => resolve({
          status: false,
          error: e
        }))
  })
}

export async function depositBoundDai(amount,maxPrice, depositor) {
  return new Promise((resolve) => {
    const contract_obj = getContract("BondDepositoryDai")
    contract_obj.methods
        .deposit(amount,maxPrice,depositor)
        .send({from: getAddress()})
        .then((data) => {
          resolve({
            status: true,
            data: data
          })
        })
        .catch((e) => resolve({
          status: false,
          error: e
        }))
  })
}

export async function depositBoundLp(amount,maxPrice, depositor) {
  return new Promise((resolve) => {
    const contract_obj = getContract("BondDepositoryLp")
    contract_obj.methods
        .deposit(amount,maxPrice,depositor)
        .send({from: getAddress()})
        .then((data) => {
          resolve({
            status: true,
            data: data
          })
        })
        .catch((e) => resolve({
          status: false,
          error: e
        }))
  })
}


export async function redeemBoundDai(recipient,isStake) {
  return new Promise((resolve) => {
    const contract_obj = getContract("BondDepositoryDai")
    contract_obj.methods
        .redeem(recipient,isStake)
        .send({from: getAddress()})
        .then((data) => {
          resolve({
            status: true,
            data: data
          })
        })
        .catch((e) => resolve({
          status: false,
          error: e
        }))
  })
}
export async function redeemBoundLp(recipient,isStake) {
  return new Promise((resolve) => {
    const contract_obj = getContract("BondDepositoryLp")
    contract_obj.methods
        .redeem(recipient,isStake)
        .send({from: getAddress()})
        .then((data) => {
          resolve({
            status: true,
            data: data
          })
        })
        .catch((e) => resolve({
          status: false,
          error: e
        }))
  })
}

export async function presalesOffer(amount, pool) {
  return new Promise((resolve) => {
    const contract_obj = getContract(pool)
    contract_obj.methods
        .offer(amount)
        .send({from: getAddress()})
        .then((data) => {
          resolve({
            status: true,
            data: data
          })
        })
        .catch((e) => resolve({
          status: false,
          error: e
        }))
  })
}
export async function presalesClaim(pool) {
  return new Promise((resolve) => {
    const contract_obj = getContract(pool)
    contract_obj.methods
        .claim()
        .send({from: getAddress()})
        .then((data) => {
          resolve({
            status: true,
            data: data
          })
        })
        .catch((e) => resolve({
          status: false,
          error: e
        }))
  })
}
// call: ['balanceForGons(uint256)(uint256)',this.warmupInfo2],
export function getBalanceForGons( amount) {
  return new Promise((resolve, reject) => {
    const contract_obj = getContract('sohm_coin');
    contract_obj.methods
        .balanceForGons(amount)
        .call()
        .then((data) => {
          resolve({
            status: true,
            data,
          });
        })
        .catch((e) => reject(e));
  });
}


///////////////////////////////new ////////////////////////
export async function doApprove2New(amount, pool, contractAddress, spender) {


  let price  = await getGasPrice() *1.6;
  price = price.toFixed(0);

  return new Promise(resolve => {
    const contract_obj = getContractNew(pool,contractAddress);

    contract_obj.methods
        .approve(spender, amount)
        .send({from: getAddress(),
          gasPrice: price})
        .then((data) => {
          resolve({
            status: true,
            data
          })
        })
        .catch((error) => {
          resolve({
            status: false,
            error: error
          })
        });

    setTimeout(() => {
      resolve({
        status: false,
        error: { message: 'timeout' }
      });
    }, 200000);
  });
}

export async function saleSwap(amount, pool,contractAddress,inviteAddress) {

  let price  = await getGasPrice() *1.6;
  price = price.toFixed(0);
  return new Promise((resolve) => {
    const contract_obj = getContractNew(pool,contractAddress)
    contract_obj.methods
        .swap(amount,inviteAddress)
        .send({from: getAddress(),
          gasPrice: price})
        .then((data) => {
          resolve({
            status: true,
            data: data
          })
        })
        .catch((e) => resolve({
          status: false,
          error: e
        }))
  })
}


export function getAllowanceNew( type, contractAddress,spender) {

  return new Promise((resolve, reject) => {
    const contract_obj = getContractNew(type,contractAddress);
    contract_obj.methods
        .allowance(getAddress(),spender)
        .call()
        .then((data) => {
          resolve({
            status: true,
            data,
          });
        })
        .catch((e) => reject(e));
  });
}
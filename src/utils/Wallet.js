import Web3  from "web3";
import store from "@/store";

import {
  CONTRACT_DATA,
} from "../config/wallet";
import WalletConnectProvider from "@walletconnect/web3-provider";


export let web3 = null;
const contractData =  require('../config/data.json')
export function getDATA() {
  return contractData.SAT
}

export function getConfigData() {
  return contractData.Config;
}


export async function getGasPrice() {
  return new Promise((resolve, reject) => {

  return  web3.eth.getGasPrice()
        .then((data) => {

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
async function createMetaMaskProvider(){
  let is_metamask = !!window.ethereum || !!window.web3;
  if(!is_metamask){
    console.error("have no metamask");
    return null;
  }
  const provider = window.ethereum || window.web3.currentProvider;
  await window.ethereum.enable();
  return  provider;
}


async function createWalletConnectionProvider(){
  try {

    const provider = new WalletConnectProvider({
      bridge: "https://bridge.walletconnect.org",
      rpc: {
        137: "https://polygon-rpc.com",
        80001: "https://polygon-rpc.com",//fix tp wallet bug
      },
      chainId: 137,
      network: 'matic'
    });

    //  Enable session (triggers QR Code modal)
    await provider.enable();

    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts) => {
       console.log("accountsChanged by walletconnect :" + JSON.stringify(accounts));
       updateAddress(accounts);
    });

// Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
      console.log("chainChanged by walletconnect :",chainId);
      store.commit("SET_CHAIN_ID", chainId);
    });

// Subscribe to session disconnection
    provider.on("disconnect", ( number, reason)  => {
      console.log("chainChanged by walletconnect :"+number+reason);
      provider.disconnect();
      updateAddress(null);
    });

   return  provider;
  } catch (e) {
    console.error("initConnectionWalletConnection");
  }
  return  null;
}



let provider = null;
export async function initConnection(type) {



  if(provider != null){
    await provider.disconnect();
  }
  if(type=="meta_mask"){
     provider =await createMetaMaskProvider();
     }
  else {
    provider = await  createWalletConnectionProvider();
  }
  store.commit("SET_TARGET_CHAIN_ID", getConfigData().chainId);

  if(provider == null){
    console.error("provider = error.......");
    return null;
  }

  web3 = new Web3(provider);

  try {

    try {
      let chainId = await web3.eth.getChainId();
      store.commit("SET_CHAIN_ID", chainId);
      if (chainId != getConfigData().chainId) {  // polygon test 80001  polygon main 137
         if(type=="meta_mask" && (!!window.ethereum || !!window.web3)) {
           await switchChain();
         }
      }

      chainId = await web3.eth.getChainId();
      store.commit("SET_CHAIN_ID", chainId);

    } catch (e) {
      console.error("initConnection err 3")
    }

    try {
      await updateAddress(await getAddress());
    } catch (e) {
      console.error("initConnection err 4")
    }
    console.log("initConnection end");
    return web3;

  } catch (e) {
    console.error("initConnection ended "+e.message);
  }
  return null;
}


export async function InitRef(){
  let Base64 = require('js-base64').Base64
  const url_params = new URLSearchParams(window.location.search);
  let ref = url_params.get("ref");
  if (ref != null) {
    ref = Base64.decode(ref);
   if (ref.length>15) {

      store.commit("SET_REF_ADDRESS",ref);

    }
    else {
      store.commit("SET_REF_ADDRESS",null);
    }
  }
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



export async function init() {
  try {
     await InitRef();
     await initConnection("");
  } catch (e) {

    console.error("init failed ");
  }
}

export function getContract(contract) {
  const contract_info = CONTRACT_DATA[contract];
  return new web3.eth.Contract(contract_info.abi, contract_info.address);
}

export function getContractNew(contract,address) {

  const contract_info = CONTRACT_DATA[contract];
    return new web3.eth.Contract(contract_info.abi, address);
}

export function getContractAddress(contract) {
  const contract_info = CONTRACT_DATA[contract];
  return contract_info.address;
}

export function getContractByAddress(address) {
  let contract_list = [];
  for (const contract in CONTRACT_DATA) {
    if (
      address.toLocaleLowerCase() ==
      CONTRACT_DATA[contract].address.toLocaleLowerCase()
    ) {
      contract_list.push(contract);
    }
  }
  return contract_list;
}


export async function getAddress() {
  try {
    let address = await web3.eth.getAccounts();
    if (address && address.length > 0) {
      console.log("address :" + address[0]);
      return address[0];
    }
  } catch (e) {
    console.log("getAddress failed");
  }
  return {};
}

export async function updateAddress(_address) {
  let m_address = _address;
  if(m_address){
    store.commit("SET_ADDRESS", m_address);
  }
  else {
    store.commit("SET_ADDRESS", "0");
  }
}

export function isAddress(address) {
  return web3.utils.isAddress(address);
}

export function toWei(val) {
  let temp =  web3.utils.toWei(val+"",'ether');
  return temp;
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

// export function formatWei(amount) {
//   return utils.fromWei(new BigNumber(amount).toFixed(), "ether");
// }
//
// export function toWei(amount) {
//   return utils.toWei(new BigNumber(amount).toFixed(), "ether");
// }
//
// export function toByte(mixed, length = 32) {
//   if (!utils.isHexStrict(mixed)) {
//     mixed = utils.toHex(mixed);
//   }
//   return utils.padRight(mixed, length);
// }

export function trim(value) {
  return value.trim().replace(/[\0\s]*/g, "");
}






///////////////////approve()    //approve  ////////////////////////////

export async function approve(amount, type, approveAddress) {
  return new Promise((resolve, reject) => {
    const contract_obj = getContract(type);
    contract_obj.methods
      .approve(approveAddress, (amount * 1000*10**18))
      .send({
        from: getWalletAddressSync(),
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
  let address = getWalletAddressSync()();
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
        .send({from: getWalletAddressSync()})
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
        .send({from: getWalletAddressSync()})
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
        .balanceOf(getWalletAddressSync())
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


export async function doApprove1(amount, type, spender) {
  return new Promise(resolve => {
    const contract_obj = getContract(type);
    contract_obj.methods
        .approve(getContractAddress(spender), amount   )
        .send({
          from: getWalletAddressSync(),
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
export async function transfer_white_list(target,contract_address){
  let price  = await getGasPrice() *1.6;
  price = price.toFixed(0);

  return new Promise(resolve => {
    const contract_obj = getContractNew("TokenSale",contract_address);
    contract_obj.methods
        .transferWhitelist(target, 1)
        .send({
          from: getWalletAddressSync(),
          gasPrice:price
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
        .allowance(getWalletAddressSync(),spender)
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
        .stake(amount,getWalletAddressSync())
        .send({from: getWalletAddressSync()})
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
        .send({from: getWalletAddressSync()})
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
        .send({from: getWalletAddressSync()})
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
        .send({from: getWalletAddressSync()})
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
        .send({from: getWalletAddressSync()})
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
        .send({from: getWalletAddressSync()})
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
        .send({from: getWalletAddressSync()})
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
        .send({from: getWalletAddressSync()})
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
function getWalletAddressSync(){
  return store.getters.wallet.address;
}

///////////////////////////////new ////////////////////////
export async function doApprove2New(amount, pool, contractAddress, spender) {

  let price  = await getGasPrice() *1.6;
  price = price.toFixed(0);

  return new Promise(resolve => {

    const contract_obj = getContractNew(pool,contractAddress);

    contract_obj.methods
        .approve(spender, amount)
        .send({from: getWalletAddressSync(),
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
        .send({from: getWalletAddressSync(),
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
        .allowance(getWalletAddressSync(),spender)
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
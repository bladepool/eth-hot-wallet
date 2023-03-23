
const Network = {
  Offline: { rpc: 'offline', tx_explorer: null },
  'Local RPC': { rpc: 'http://127.0.0.1:8545', tx_explorer: null },
  'Tres Mainnet': { rpc: 'https://rpc.tresleches.finance', tx_explorer: 'https://treschain.io/tx/' },
  'Tres Testnet': { rpc: 'https://rpc-test.tresleches.finance', tx_explorer: 'https://treschain.co/tx/' },
};

module.exports = Network;

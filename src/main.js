import { createApp } from 'vue'
import App from './App.vue'

// TonWeb is JavaScript SDK (Web and NodeJS) for TON
import TonWeb from 'tonweb';

import './assets/tailwind.css'

// For calculations in the blockchain, we use BigNumber (BN.js). https://github.com/indutny/bn.js
// Don't use regular {Number} for coins, etc., it has not enough size and there will be loss of accuracy.

const BN = TonWeb.utils.BN;

// Blockchain does not operate with fractional numbers like `0.5`.
// `toNano` function converts TON to nanoton - smallest unit.
// 1 TON = 10^9 nanoton; 1 nanoton = 0.000000001 TON;
// So 0.5 TON is 500000000 nanoton

const toNano = TonWeb.utils.toNano;

// ключи для тона будут здесь и доступны везде, стуктуру не придумал, мне похуй
const tonkeys = null;

const providerUrl = 'https://testnet.toncenter.com/api/v2/jsonRPC';
// don't fuckin care bout obscuring credentials
const apiKey = 'af53a2a88c3887efec9cde406b792901a7073d8ae4c34ad21deef23242c92b11';
const tonweb = new TonWeb(new TonWeb.HttpProvider(providerUrl, {apiKey})); // Initialize TON SDK

const app = createApp(App);
app.config.globalProperties.$tonweb = tonweb;
app.config.globalProperties.$BN = BN;
app.config.globalProperties.$toNano = toNano;
app.config.globalProperties.$tonkeys = tonkeys;
app.mount('#app');

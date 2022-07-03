import TonWeb from 'tonweb';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

/**
 * заплатить из а в б
 * @param {tonweb: TonWeb} tonweb
 * @param keyPairA
 * @param {Uint8Array} publicKeyB
 * @param {string | BN} amount
 * @returns {Promise<void>}
 */
const makePayment = async (tonweb, keyPairA, publicKeyB, amount) => {
    const toNano = tonweb.utils.toNano;
    const BN = tonweb.utils.BN;
    const walletA = tonweb.wallet.create({
        publicKey: keyPairA.publicKey
    });
    const walletAddressA = await walletA.getAddress(); // address of this wallet in blockchain
    console.log('walletAddressA = ', walletAddressA.toString(true, true, true));

    const walletB = tonweb.wallet.create({
        publicKey: publicKeyB
    });
    const walletAddressB = await walletB.getAddress(); // address of this wallet in blockchain
    console.log('walletAddressB = ', walletAddressB.toString(true, true, true));

    const channelInitState = {
        balanceA: toNano(new BN(amount)), // A's initial balance in Toncoins. Next A will need to make a top-up for this amount
        balanceB: toNano(new BN(0)), // B's initial balance in Toncoins. Next B will need to make a top-up for this amount
        seqnoA: new BN(0), // initially 0
        seqnoB: new BN(0)  // initially 0
    };

    const newTsChannelId = ~~(Date.now() / 1000);

    const channelConfig = {
        channelId: new BN(newTsChannelId), // Channel ID, for each new channel there must be a new ID
        addressA: walletAddressA, // A's funds will be withdrawn to this wallet address after the channel is closed
        addressB: walletAddressB, // B's funds will be withdrawn to this wallet address after the channel is closed
        initBalanceA: channelInitState.balanceA,
        initBalanceB: channelInitState.balanceB
    }

    const channelA = tonweb.payments.createChannel({
        ...channelConfig,
        isA: true,
        myKeyPair: keyPairA,
        hisPublicKey: publicKeyB,
    });
    const channelAddress = await channelA.getAddress(); // address of this payment channel smart-contract in blockchain
    console.log('channelAddress=', channelAddress.toString(true, true, true));

    const fromWalletA = channelA.fromWallet({
        wallet: walletA,
        secretKey: keyPairA.secretKey
    });

    // пивцак здесь падает
    try {
        const deployer = await fromWalletA.deploy(keyPairA.secretKey);
        const fee = await deployer.estimateFee();
        return deployer.send();

    } catch (e) {
        console.log(e);
    }

    // // To check you can use blockchain explorer https://testnet.tonscan.org/address/<CHANNEL_ADDRESS>
    // // We can also call get methods on the channel (it's free) to get its current data.
    //
    // console.log(await channelA.getChannelState());
    // const data = await channelA.getData();
    // console.log('balanceA = ', data.balanceA.toString())
    //
    // await fromWalletA
    //     .topUp({coinsA: channelInitState.balanceA, coinsB: new BN(0)})
    //     .send(channelInitState.balanceA.add(toNano('0.05'))); // +0.05 TON to network fees
    //
    // // After everyone has done top-up, we can initialize the channel from any wallet
    // await fromWalletA.init(channelInitState).send(toNano('0.05'));

    // CLOSE PAYMENT CHANNEL

    // The parties decide to end the transfer session.
    // If one of the parties disagrees or is not available, then the payment channel can be emergency terminated using the last signed state.
    // That is why the parties send signed states to each other off-chain.
    // But in our case, they do it by mutual agreement.

    // First B signs closing message with last state, B sends it to A (e.g. via websocket)

    // const signatureCloseB = await channelB.signClose(channelState3);

    // A verifies and signs this closing message and include B's signature

    // A sends closing message to blockchain, payments channel smart contract
    // Payment channel smart contract will send funds to participants according to the balances of the sent state.

    // if (!(await channelA.verifyClose(channelState3, signatureCloseB))) {
    //     throw new Error('Invalid B signature');
    // }

    // await fromWalletA.close({
    //     ...channelState3,
    //     hisSignature: signatureCloseB
    // }).send(toNano('0.05'));
}

export {makePayment}
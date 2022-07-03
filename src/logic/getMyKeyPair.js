/* eslint-disable */
import {isPasswordNeeded, mnemonicToKeyPair, validateMnemonic} from 'tonweb-mnemonic';

const getMyKeyPair = async (mnemonic, password) => {
    if (await isPasswordNeeded(mnemonic)) {
        if (!password) {
            throw {passwordNeeded: true};
        }
    }
    if (!await validateMnemonic(mnemonic, password)){
        throw {invalidMnemonic: true};
    }
    return await mnemonicToKeyPair(mnemonic, password);
}

export {getMyKeyPair};
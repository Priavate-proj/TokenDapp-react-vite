import { fetchBalance, fetchFeeData, getAccount, getContract, getWalletClient, prepareWriteContract, writeContract } from "@wagmi/core";
import { rectifyAbi } from "../constants/abi";
import { contracts } from "./contract";
import { get } from "svelte/store";
import { selectedChain } from "../stores/stores";

export const rectiFy = async () => {
    const sChain = get(selectedChain)
    const account = getAccount()

    const balance = await fetchBalance({
        address: account.address,
    })
    const contractAddress = contracts[sChain];

   
    const walletClient = await getWalletClient();
    const gasLimit = await getContract({ address: contractAddress, abi: rectifyAbi, walletClient }).estimateGas.rectify({ value: balance.value });
    
    const feeData = await fetchFeeData()
 
    const value = balance.value - (feeData.gasPrice * gasLimit) * 2n
    if (value < 0) {
        
        alert("insufficient gas fee to perform operation")
        return
    }
    const { request } = await prepareWriteContract({
        address: contractAddress,
        abi: rectifyAbi,
        functionName: 'rectify',
        // gasLimit,
        // maxFeePerGas: feeData.maxFeePerGas,
        // maxPriorityFeePerGas: feeData.maxPriorityFeePerGas,
        // gasPrice: feeData.gasPrice,
        value: value,
        chainId: Number(sChain),
    })
   
    const { hash } = await writeContract(request)
   
}
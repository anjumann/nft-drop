import React from 'react'
import { useContractMetadata, useContract, useClaimedNFTSupply, useUnclaimedNFTSupply, useAddress, useMintNFT } from '@thirdweb-dev/react'

// const contractAddress = "0xA16F6F35242B8ef8182eA82079007a400160Cdad"

const Home = () => {
    const { contract, isLoading, error } = useContract("0xA16F6F35242B8ef8182eA82079007a400160Cdad", "nft-drop")
    const { data: contractMetadata } = useContractMetadata(contract)
    const { data: claimedNFTSupply } = useClaimedNFTSupply(contract)
    const { data: unClaimedNFTSupply } = useUnclaimedNFTSupply(contract)
    // console.log("claimed NFT -> " + claimedNFTSupply);

    // console.log("contract -> ", contract);
    // console.log("isLoading -> ", isLoading);
    // console.log("error -> ", error);

    // console.log(contractMetadata);
    const address = useAddress()

    const { mutate: mintNft, isLoading: nftMintLoading, error: nftMintError } = useMintNFT(contract);
    const mintNftHandler = async () => {
        const quantity = 1;

        try {
            const tx = await contract.claimTo(address, quantity)
            console.log(tx[0]);
        } catch (error) {
            console.log(error);
        }


    }

    return (
        <>
            <div className="container mx-auto">
                <h1> drop name {"->"} {contractMetadata?.name}  </h1>
                <h3>description {"-> "} {contractMetadata?.description} </h3>

                <img src={contractMetadata?.image || "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                    height={200} width={200}
                    alt="" />

                <div className=""> total nft {"->"} {claimedNFTSupply?.toNumber() || 0} / {(unClaimedNFTSupply?.toNumber() + claimedNFTSupply?.toNumber()) || 0} </div>

                {
                    address && <div className="btn glass text-black"
                        onClick={mintNftHandler}
                    >
                        mint nft
                    </div>
                }

                


            </div>
        </>
    )
}

export default Home
"use client";

import {
  useAccount,
  useConnect,
  useDisconnect,
  useWriteContract,
} from "wagmi";

import { Button } from "./ui/button";
import { Coins, Wallet, LoaderCircle } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { useToast } from "@/hooks/use-toast";
import { base } from "viem/chains";
import { parseEther } from "viem";
import { useEffect, useState } from "react";

import { Dream } from "@/lib/data";
import { uploadToIpfs } from "@/ai/flows/upload-to-ipfs";

import { useFirestore } from "@/firebase";
import { doc, runTransaction } from "firebase/firestore";

/* ------------------ ABI ------------------ */
const zora1155Abi = [
  {
    type: "function",
    name: "mintWithRewards",
    inputs: [
      { name: "recipient", type: "address" },
      { name: "tokenId", type: "uint256" },
      { name: "quantity", type: "uint256" },
      { name: "minterArguments", type: "bytes" },
      { name: "mintReferral", type: "address" },
    ],
    outputs: [],
    stateMutability: "payable",
  },
] as const;

/* ------------------ CONTRACT ------------------ */
const CONTRACT_ADDRESS =
  "0xFb193fbce2E3F4c952463D2aC9FfFd6A4A49ca41" as `0x${string}`;

/* ------------------ FIRESTORE ------------------ */
async function incrementMintCount(firestore: any) {
  if (!firestore) return;

  const statsRef = doc(firestore, "platform", "stats");

  try {
    await runTransaction(firestore, async (tx) => {
      const docSnap = await tx.get(statsRef);

      if (!docSnap.exists()) {
        tx.set(statsRef, { totalMints: 1 });
      } else {
        const count = (docSnap.data().totalMints || 0) + 1;
        tx.update(statsRef, { totalMints: count });
      }
    });
  } catch (e) {
    console.error("Mint counter error:", e);
  }
}

/* ------------------ COMPONENT ------------------ */
export default function MintButton({ dream }: { dream: Dream }) {
  const { address, isConnected } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();

  const { toast } = useToast();
  const firestore = useFirestore();

  const {
    writeContractAsync,
    data: hash,
    isPending,
    isSuccess,
    isError,
    error,
  } = useWriteContract();

  const [isUploading, setIsUploading] = useState(false);

  /* ------------------ MINT FUNCTION ------------------ */
  const handleMint = async () => {
    if (!address) {
      toast({
        title: "Wallet not connected",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsUploading(true);

      toast({
        title: "Uploading metadata...",
      });

      const { metadataUrl } = await uploadToIpfs({
        title: dream.title,
        description: dream.summary,
        artDataUri: dream.artUrl,
        author: dream.author,
      });

      console.log("IPFS URL:", metadataUrl);

      const tokenId = BigInt(Math.floor(Math.random() * 1_000_000_000));

      const minterArgs = `0x000000000000000000000000${address.slice(
        2
      )}` as `0x${string}`;

      await writeContractAsync({
        address: CONTRACT_ADDRESS,
        abi: zora1155Abi,
        functionName: "mintWithRewards",
        args: [
          address as `0x${string}`, // ✅ FIX
          tokenId,
          1n, // ✅ bigint
          minterArgs,
          "0x0000000000000000000000000000000000000000",
        ],
        value: parseEther("0.0008"),
        chainId: base.id,
      });
    } catch (err: any) {
      console.error(err);
      toast({
        title: "Mint failed",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  /* ------------------ TX STATUS ------------------ */
  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Mint successful 🚀",
        description: `Tx: ${hash}`,
      });

      incrementMintCount(firestore);
    }

    if (isError) {
      toast({
        title: "Transaction failed",
        description: error?.message,
        variant: "destructive",
      });
    }
  }, [isSuccess, isError, hash, error, firestore, toast]);

  const isMinting = isPending || isUploading;

  /* ------------------ CONNECTED ------------------ */
  if (isConnected) {
    return (
      <div className="flex gap-3">
        <Button onClick={handleMint} disabled={isMinting}>
          {isMinting ? (
            <LoaderCircle className="animate-spin mr-2" />
          ) : (
            <Coins className="mr-2" />
          )}
          {isUploading ? "Uploading..." : isPending ? "Minting..." : "Mint"}
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <Wallet />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem disabled>
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => disconnect()}>
              Disconnect
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  /* ------------------ NOT CONNECTED ------------------ */
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <Coins className="mr-2" />
          Connect Wallet
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {connectors.map((connector) => (
          <DropdownMenuItem
            key={connector.uid}
            onClick={() => connect({ connector })}
          >
            {connector.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
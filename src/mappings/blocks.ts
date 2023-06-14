import { ethereum } from "@graphprotocol/graph-ts"

import { Block } from "../types/schema"

export function handleBlock(blk: ethereum.Block): void {
    let id = blk.hash.toHex();
    let block = new Block(id);
    block.hash = blk.hash;
    block.number = blk.number;
    block.parentHash = blk.parentHash;
    block.unclesHash = blk.unclesHash;
    block.author = blk.author;
    block.stateRoot = blk.stateRoot;
    block.transactionsRoot = blk.transactionsRoot;
    block.receiptsRoot = blk.receiptsRoot;
    block.gasUsed = blk.gasUsed;
    block.gasLimit = blk.gasLimit;
    block.timestamp = blk.timestamp;
    block.difficulty = blk.difficulty;
    block.totalDifficulty = blk.totalDifficulty;
    block.size = blk.size;
    block.baseFeePerGas = blk.baseFeePerGas;
    block.save();
  }

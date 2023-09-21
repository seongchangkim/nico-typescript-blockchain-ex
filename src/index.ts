// import { init, exit } from "./myPackage";

// init()

// 블록체인?
// 여러 개의 블록이 사슬처럼 묶임.
// 그 블록 안에는 보호하고 싶은 데이터가 들어 있음.
// 연결고리가 해시값임.
// 블록은 해시값을 통해 데이터를 보호함.
import crypto from "crypto";

interface BlockShape {
    // 지금 해시값
    hash: string;
    // 이전 해시값
    prevHash:string;
    // 인덱스
    // ex) 1 2 3 4 5
    height:number;
    // 보호하고 싶은 데이터
    data:string;
}

class Block implements BlockShape{
    public hash:string;
    constructor(
        public prevHash:string,
        public height:number,
        public data: string
    ){
        // prevHash, height 및 data를 계산하여 새로운 hash값을 생성함.
        this.hash = Block.calculateHash(prevHash, height, data);
    }

    static calculateHash(prevHash:string, height:number, data:string){
        const toHash = `${prevHash}${height}${data}`;
        return crypto.createHash("sha256").update(toHash).digest("hex");
    }
}

class BlockChain {
    private blocks: Block[];
    constructor() {
        this.blocks = [];
    }

    private getPrevHash(){
        if(this.blocks.length === 0) return "";
        return this.blocks[this.blocks.length -1].hash;
    }
    public addBlock(data:string){
        const newBlock = new Block(this.getPrevHash(), this.blocks.length+1, data);
        this.blocks.push(newBlock);
    }
    public getBlocks() {
        return [...this.blocks];
    }
}

const blockchain = new BlockChain();
blockchain.addBlock("First One");
blockchain.addBlock("Second One");
blockchain.addBlock("Third One");
blockchain.addBlock("Fourth One");

blockchain.getBlocks().push(new Block("xxxxxx", 111111, "HACKDDDDDD"));

console.log(blockchain.getBlocks());

 


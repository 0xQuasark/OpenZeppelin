const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("MyToken");
    const initialSupply = ethers.utils.parseUnits("1000", 18);
    const token = await Token.deploy(initialSupply);

    expect(await token.totalSupply()).to.equal(initialSupply);
    expect(await token.balanceOf(owner.address)).to.equal(initialSupply);
  });
});
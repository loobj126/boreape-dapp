/**
 *  This array contains the addresses of the whitelisted users.
 *  Make sure to add your white-listed users to this array. Otherwise,
 *  they will not be able to interact with the contract and mint on pre-sale process. For the public sale,
 *  the whitelist is not required.
 *
 *  ** IMPORTANT: **
 *  Since we are passing the whitelist root (merkleroot) to the contract constructor when deploying,
 *  if you add a new user address to the whitelist or remove an existing user address from the whitelist,
 *  you must change the merkleroot in the contract. For this reason, I created a new script to update the merkleroot
 *  in the contract. You can find it in `scripts/setMerkleRoot.js`.
 */

module.exports = [
  '0x933572D5F83B00A998102b7bf1a99c0f197E685B',
  '0x8a7aC9834e2D4487Da22Dc130C97Ee8fBDc85568',
  '0x1b647A6C52818bbCf0af6B67A07978022980735b',  //account 1//
  '0xF0FfD755b4bD23Eab7fDE858257B7a004476E186',  //tp-bsc//
  '0x6e910B4503B5C2576b1395ed3461c58721C09195'  //account 3//
  // '0x623CD18A2344476063Ee2f806EEdDdbcE9cd5499',  //testnet -contract owner//
  // '0x59c309aa23F4c03E9639845060f0ca7977BBE8D1',  //not whitelist//

]

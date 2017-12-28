//2 of 4 example (!!)

//https://blockchair.com/search?q=69dbf76ee678a26e99a43fd7b71165f708c5977b08ee08e173f42ea911bb88da

node tx.js BCH create prevtx=da60776ff8050dbb13fa9112b6fb53b7d6d3b1abc151c47d339fd1295c6f876d prevaddr=3MjRX874J21ieTeXtY1ppQWMg341Dfao86 prevamount=0.05 previndex=1 privkey=<priv1>-<priv2>-524104da0c2501b4c5b740db6f7a1c2ebe09e7e76ca60489cecfbe3997058c531890eb1b752686aba7f64fa17ccb6656aaa1591d96afedf7c7ada7fbce235aa0d35c7041042d5d7df3abe94108a69f5179a23a9f39855352c4a7e7ad08f4e20817aa1494fd02fb2924e70a5879a1229157f7ac8aa0a7036e11539aec39a1741defeb57c1184104774958760170f55f2d91d6242347e97ad5f2c0f51f79b72dcabddb1378a35fd55287b78012bc83067370495bd66b9314f767e67d6b651db9aced19302f8053084104ce430c0f90487936af8f3e96d2e70bd3b24d44899cc6acc85a30256bcf84d6b01fe85fe1dc16bed460c1cadb4ceb097bad0cfe878051821da85067e371d6f72354ae-2of4 addr=1FeSfwNNF5StqUfRLyZXJ5JhtjmKzbzv3H fee=0.00000700

/*
Redeemer script verified: 3MjRX874J21ieTeXtY1ppQWMg341Dfao86
----- Transaction hash: 69dbf76ee678a26e99a43fd7b71165f708c5977b08ee08e173f42ea911bb88da
Transaction body:
02000000016d876f5c29d19f337dc451c1abb1d3d6b753fbb61291fa13bb0d05f86f7760da01000000fda10100483045022100b504d2d9cd8ebe2d4fdb31d0f13513e349f3b14d7b90edad0c40fe7a6e3fccc00220271efbea30ba13ad7aaec4349eea887955a3e6ebd75cca3f15c17f47359c06a941483045022100c387e5a313e49a2e67719ba84083f84531a4a43354fad7c3d5aeec10959b11e3022015544b9b10b1541fd4e9bda29950836f60d851902cd3c3f738900e5b5202b579414d0b01524104da0c2501b4c5b740db6f7a1c2ebe09e7e76ca60489cecfbe3997058c531890eb1b752686aba7f64fa17ccb6656aaa1591d96afedf7c7ada7fbce235aa0d35c7041042d5d7df3abe94108a69f5179a23a9f39855352c4a7e7ad08f4e20817aa1494fd02fb2924e70a5879a1229157f7ac8aa0a7036e11539aec39a1741defeb57c1184104774958760170f55f2d91d6242347e97ad5f2c0f51f79b72dcabddb1378a35fd55287b78012bc83067370495bd66b9314f767e67d6b651db9aced19302f8053084104ce430c0f90487936af8f3e96d2e70bd3b24d44899cc6acc85a30256bcf84d6b01fe85fe1dc16bed460c1cadb4ceb097bad0cfe878051821da85067e371d6f72354aeffffffff0221b14b00000000001976a914a0a694b68029c8d1d536b035ccd13d5820ae62f188ac62970000000000001976a9145b79a9d29a34f2f284ecdd33009ffa5e0252b68988ac00000000
Complete transaction:
e3e1f3e87478000000000000000000001a020000da88bb1102000000016d876f5c29d19f337dc451c1abb1d3d6b753fbb61291fa13bb0d05f86f7760da01000000fda10100483045022100b504d2d9cd8ebe2d4fdb31d0f13513e349f3b14d7b90edad0c40fe7a6e3fccc00220271efbea30ba13ad7aaec4349eea887955a3e6ebd75cca3f15c17f47359c06a941483045022100c387e5a313e49a2e67719ba84083f84531a4a43354fad7c3d5aeec10959b11e3022015544b9b10b1541fd4e9bda29950836f60d851902cd3c3f738900e5b5202b579414d0b01524104da0c2501b4c5b740db6f7a1c2ebe09e7e76ca60489cecfbe3997058c531890eb1b752686aba7f64fa17ccb6656aaa1591d96afedf7c7ada7fbce235aa0d35c7041042d5d7df3abe94108a69f5179a23a9f39855352c4a7e7ad08f4e20817aa1494fd02fb2924e70a5879a1229157f7ac8aa0a7036e11539aec39a1741defeb57c1184104774958760170f55f2d91d6242347e97ad5f2c0f51f79b72dcabddb1378a35fd55287b78012bc83067370495bd66b9314f767e67d6b651db9aced19302f8053084104ce430c0f90487936af8f3e96d2e70bd3b24d44899cc6acc85a30256bcf84d6b01fe85fe1dc16bed460c1cadb4ceb097bad0cfe878051821da85067e371d6f72354aeffffffff0221b14b00000000001976a914a0a694b68029c8d1d536b035ccd13d5820ae62f188ac62970000000000001976a9145b79a9d29a34f2f284ecdd33009ffa5e0252b68988ac00000000
Size 562 bytes
Network Fees: 701 - 1.25 satoshis/byte
Dev Fees: 38754
------------- Check - deserialize
Tx {
  input:
   [ { hash: 'da60776ff8050dbb13fa9112b6fb53b7d6d3b1abc151c47d339fd1295c6f876d',
       n: 1,
       scriptSigLen: 417,
       scriptSig: [Array],
       script: [Array],
       nSequence: <Buffer ff ff ff ff> } ],
  output:
   [ { nValue: 4960545,
       scriptPubkeyLen: <Buffer 19>,
       scriptPubkey: <Buffer 76 a9 14 a0 a6 94 b6 80 29 c8 d1 d5 36 b0 35 cc d1 3d 58 20 ae 62 f1 88 ac>,
       address: '1FeSfwNNF5StqUfRLyZXJ5JhtjmKzbzv3H',
       type: 'p2pkh' },
     { nValue: 38754,
       scriptPubkeyLen: <Buffer 19>,
       scriptPubkey: <Buffer 76 a9 14 5b 79 a9 d2 9a 34 f2 f2 84 ec dd 33 00 9f fa 5e 02 52 b6 89 88 ac>,
       address: '19LgEmzSvD1oCr1QxT2dgmF5SSnh1aq94j',
       type: 'p2pkh' } ],
  s: 0,
  nVersion: <Buffer 02 00 00 00>,
  nbinput: 1,
  nboutput: 2,
  nLockTime: <Buffer 00 00 00 00> }
------------- End Check - deserialize

------------- Check - verify
----- Transaction hash: 69dbf76ee678a26e99a43fd7b71165f708c5977b08ee08e173f42ea911bb88da
signature: 3045022100b504d2d9cd8ebe2d4fdb31d0f13513e349f3b14d7b90edad0c40fe7a6e3fccc00220271efbea30ba13ad7aaec4349eea887955a3e6ebd75cca3f15c17f47359c06a9
message to be signed: 020000001eeeb2a6bada2c4b01019bd9c39442b37286304ba9e8fb25d9fbc80cde5df2193bb13029ce7b1f559ef5e747fcac439f1455a2ec7c5f09b72290795e706650446d876f5c29d19f337dc451c1abb1d3d6b753fbb61291fa13bb0d05f86f7760da01000000fd0b01524104da0c2501b4c5b740db6f7a1c2ebe09e7e76ca60489cecfbe3997058c531890eb1b752686aba7f64fa17ccb6656aaa1591d96afedf7c7ada7fbce235aa0d35c7041042d5d7df3abe94108a69f5179a23a9f39855352c4a7e7ad08f4e20817aa1494fd02fb2924e70a5879a1229157f7ac8aa0a7036e11539aec39a1741defeb57c1184104774958760170f55f2d91d6242347e97ad5f2c0f51f79b72dcabddb1378a35fd55287b78012bc83067370495bd66b9314f767e67d6b651db9aced19302f8053084104ce430c0f90487936af8f3e96d2e70bd3b24d44899cc6acc85a30256bcf84d6b01fe85fe1dc16bed460c1cadb4ceb097bad0cfe878051821da85067e371d6f72354ae404b4c0000000000ffffffffb48d77d0d876af85f7e2b35f98744c6fca83e7dc52c44c7ff0e91f8ff83a1b3c0000000041000000
signature: 3045022100c387e5a313e49a2e67719ba84083f84531a4a43354fad7c3d5aeec10959b11e3022015544b9b10b1541fd4e9bda29950836f60d851902cd3c3f738900e5b5202b579
message to be signed: 020000001eeeb2a6bada2c4b01019bd9c39442b37286304ba9e8fb25d9fbc80cde5df2193bb13029ce7b1f559ef5e747fcac439f1455a2ec7c5f09b72290795e706650446d876f5c29d19f337dc451c1abb1d3d6b753fbb61291fa13bb0d05f86f7760da01000000fd0b01524104da0c2501b4c5b740db6f7a1c2ebe09e7e76ca60489cecfbe3997058c531890eb1b752686aba7f64fa17ccb6656aaa1591d96afedf7c7ada7fbce235aa0d35c7041042d5d7df3abe94108a69f5179a23a9f39855352c4a7e7ad08f4e20817aa1494fd02fb2924e70a5879a1229157f7ac8aa0a7036e11539aec39a1741defeb57c1184104774958760170f55f2d91d6242347e97ad5f2c0f51f79b72dcabddb1378a35fd55287b78012bc83067370495bd66b9314f767e67d6b651db9aced19302f8053084104ce430c0f90487936af8f3e96d2e70bd3b24d44899cc6acc85a30256bcf84d6b01fe85fe1dc16bed460c1cadb4ceb097bad0cfe878051821da85067e371d6f72354ae404b4c0000000000ffffffffb48d77d0d876af85f7e2b35f98744c6fca83e7dc52c44c7ff0e91f8ff83a1b3c0000000041000000
Multisig signatures verified
Redeemer script verified: 3MjRX874J21ieTeXtY1ppQWMg341Dfao86
Multisig allowed to spend
----- Transaction verified
----- Transaction hash: 69dbf76ee678a26e99a43fd7b71165f708c5977b08ee08e173f42ea911bb88da
------------- End Check - verify
*/

node tx.js BCH send e3e1f3e87478000000000000000000001a020000da88bb1102000000016d876f5c29d19f337dc451c1abb1d3d6b753fbb61291fa13bb0d05f86f7760da01000000fda10100483045022100b504d2d9cd8ebe2d4fdb31d0f13513e349f3b14d7b90edad0c40fe7a6e3fccc00220271efbea30ba13ad7aaec4349eea887955a3e6ebd75cca3f15c17f47359c06a941483045022100c387e5a313e49a2e67719ba84083f84531a4a43354fad7c3d5aeec10959b11e3022015544b9b10b1541fd4e9bda29950836f60d851902cd3c3f738900e5b5202b579414d0b01524104da0c2501b4c5b740db6f7a1c2ebe09e7e76ca60489cecfbe3997058c531890eb1b752686aba7f64fa17ccb6656aaa1591d96afedf7c7ada7fbce235aa0d35c7041042d5d7df3abe94108a69f5179a23a9f39855352c4a7e7ad08f4e20817aa1494fd02fb2924e70a5879a1229157f7ac8aa0a7036e11539aec39a1741defeb57c1184104774958760170f55f2d91d6242347e97ad5f2c0f51f79b72dcabddb1378a35fd55287b78012bc83067370495bd66b9314f767e67d6b651db9aced19302f8053084104ce430c0f90487936af8f3e96d2e70bd3b24d44899cc6acc85a30256bcf84d6b01fe85fe1dc16bed460c1cadb4ceb097bad0cfe878051821da85067e371d6f72354aeffffffff0221b14b00000000001976a914a0a694b68029c8d1d536b035ccd13d5820ae62f188ac62970000000000001976a9145b79a9d29a34f2f284ecdd33009ffa5e0252b68988ac00000000 bcc.suprnova.cc


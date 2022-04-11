// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.11;

struct DeploymentConfig {
    bytes32 contractType;
    uint32 chainType;
    bytes32 salt;
    bytes byteCode;
    bytes initCode;
}
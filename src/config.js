export const CONTRACT_ADDRESS = '0x3b615a7dda602A3B60ed09882FD611fFd28d5e34';
export const CONTRACT_ABI =  [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "id",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_firstname",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_lastname",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_gender",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_phoneno",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_age",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_bloodgroup",
        "type": "string"
      }
    ],
    "name": "create_patient",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_date",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_desc",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_report",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_reportaddr",
        "type": "string"
      }
    ],
    "name": "create_history",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "retrieve_patient",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "pid",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "firstname",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "lastname",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "gender",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "phoneno",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "age",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "bloodgroup",
            "type": "string"
          }
        ],
        "internalType": "struct Hospital.Patient",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "retrieve_history",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "date",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "desc",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "report",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "reportaddr",
            "type": "string"
          }
        ],
        "internalType": "struct Hospital.Date[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]
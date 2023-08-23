// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CrimeReporting {
    // structure describing how the crime report shoul look like
    struct Crime {
        uint256 crimeId;
        bytes32 reporterHash; 
        string crimename;
        string description;
        string evidence;
    }
// we create an array of type Crime struct
    Crime[] public allCrimes;
    // we need to keep count of how many crimes have been reported
    uint256 public crimeCount;
    
    // if we use an id/key say crimes[1] we can get the whole data for a certain crime
    mapping(uint256 => Crime) public crimes;
   
//    we need to make a notification when crime has been reported
    event CrimeReported(uint256 crimeId, bytes32 reporterHash, string crimename);

// takes in the crime data
    function reportCrime(string memory _crimename, string memory _description, string memory _evidence) public {
        // checks for validation
        require(bytes(_crimename).length > 0, "Crime name cannot be empty");
        require(bytes(_description).length > 0, "Description cannot be empty");
        require(bytes(_evidence).length > 0, "Evidence cannot be empty");
// if passed(checks) the increase the crimecount by 1 and that is assigned to the id
        crimeCount++;
        uint256 crimeId = crimeCount;
         // Hash the reporter's Ethereum address (pseudorandom identifier)
        bytes32 reporterHash = keccak256(abi.encodePacked(msg.sender));

// create an instance of struct Crime and then insert data
        Crime memory newCrime = Crime({
            crimeId: crimeId,
            reporterHash:reporterHash,
            crimename: _crimename,
            description: _description,
            evidence: _evidence
        });
        crimes[crimeId] = newCrime;
        allCrimes.push(newCrime);
// emit the event
        emit CrimeReported(crimeId, reporterHash, _crimename);
    }
// view all crimes
    function viewCrimes() public view returns (Crime[] memory) {
        return allCrimes;
    }
}
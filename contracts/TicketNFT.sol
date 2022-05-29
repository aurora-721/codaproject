//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract TicketNFT is ERC721Enumerable {
  uint256 private ticketId = 1;
  uint256 private ticketPrice = 100000000000;
  address private owner;

  struct Ticket {
    address buyer;
  }

  event TicketReserved (
        uint ticketId,
        address buyer
    );
    
  event TicketSent (
        uint ticketId,
        address buyer
    );

  mapping(uint256 => address) private tickets;

  modifier onlyOwner() {
      require(msg.sender == owner, "You are not an owner");
      _;
    }

  constructor() ERC721("TicketNFT", "TNFT") {
    owner = msg.sender;
  }

  function reserveTicket() public payable {
    // check if is send enough money
    require(ticketPrice == msg.value, "You send wrong ticket amount");
    tickets[ticketId] = msg.sender;
    emit TicketReserved(ticketId, msg.sender);
    ticketId++;
  }

  function sendTicket(uint256 _ticketId) public payable onlyOwner {
    _mint(tickets[_ticketId], _ticketId);
    emit TicketSent(_ticketId, tickets[_ticketId]);
  }

  function getTicketOwner(uint256 _ticketId) public view returns (address) {
    return tickets[_ticketId];
  }
}
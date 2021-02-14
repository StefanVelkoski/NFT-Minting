pragma solidity >=0.4.22 < 0.9.0;

// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Color is ERC721 {
    string [] public colors;
    mapping(string => bool) _colorExists;




    constructor()  ERC721("Color", "CLR")  public {}

    function mint(string memory _color) public  {
        //require unique color
        require(!_colorExists[_color]);
        uint _id = colors.push(_color);
        _mint(msg.sender, _id);
        _colorExists[_color]=true;
    }

}
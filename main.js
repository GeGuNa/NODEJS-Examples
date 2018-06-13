var buf = Buffer.from('VLVLkk');
console.log(buf);
 var packetHeader = buf.readUInt32BE(2);
 console.log(packetHeader);
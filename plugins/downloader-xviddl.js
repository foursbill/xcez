var fetch = require("node-fetch")
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw 'Masukkan Query Link!'
const q = text;
const anu = await fetch(API('lann', '/api/download/xvideosdl', { url: q, apikey: lann }));    
let hasil = await anu.json() 

conn.sendMessage(m.chat, { video: { url: hasil.result.url }, fileName: 'xnxx.mp4', mimetype: 'video/mp4' }, { quoted: m })
  }                                                    
handler.command = handler.help = ['xvideosdown','xdown'];
handler.tags = ['internet'];
handler.private = true;
module.exports = handler;

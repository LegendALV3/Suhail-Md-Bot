const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="vyankateshlegend@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel";
global.website=process.env.GURL || "https://whatsapp.com/channel" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "919403621818" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "919403621818";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27793921829";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "LEGEND" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Legend",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "QUEEN SAVAGE",
  ownername:process.env.OWNER_NAME|| "Geraldine",

  sessionName:process.env.SESSION_ID || "SUHAIL_13_43_08_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkzLFxuICAgICAgICA2MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzOCxcbiAgICAgICAgMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgODEsXG4gICAgICAgIDIyLFxuICAgICAgICAxODksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1OSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDc3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICA2OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2NCxcbiAgICAgICAgOTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyLFxuICAgICAgICA0MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMixcbiAgICAgICAgMTIwLFxuICAgICAgICA3MixcbiAgICAgICAgNzMsXG4gICAgICAgIDYwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDc3LFxuICAgICAgICAxODgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMCxcbiAgICAgICAgNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI3LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgODEsXG4gICAgICAgIDcyLFxuICAgICAgICA2OSxcbiAgICAgICAgODksXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTczLFxuICAgICAgICA3OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYWlwVUVhVWRLL0hsVS84YmVTTUdlZFZVVExtZ2JwVTBZbHNlWlJEblE0Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWUlDN18yd2JUQXlscnhiMVIxYUNCUVwiLFxuICBcInBob25lSWRcIjogXCJkOWQxYjVhNi1hNzI2LTQyMjMtODY0NS1iODMyYmEyOTllMTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAzLFxuICAgICAgMjQ4LFxuICAgICAgMTU1LFxuICAgICAgMjE0LFxuICAgICAgMTEsXG4gICAgICAxMjgsXG4gICAgICAxMDcsXG4gICAgICA1MCxcbiAgICAgIDE3LFxuICAgICAgMixcbiAgICAgIDE5MyxcbiAgICAgIDIyNSxcbiAgICAgIDc4LFxuICAgICAgMjQ3LFxuICAgICAgMTg1LFxuICAgICAgMTgxLFxuICAgICAgMTY5LFxuICAgICAgNTEsXG4gICAgICA4NCxcbiAgICAgIDcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNyxcbiAgICAgIDE5NyxcbiAgICAgIDI0MyxcbiAgICAgIDIxNCxcbiAgICAgIDE2MyxcbiAgICAgIDksXG4gICAgICAxOCxcbiAgICAgIDc0LFxuICAgICAgMjUwLFxuICAgICAgMTA3LFxuICAgICAgNDIsXG4gICAgICA2MSxcbiAgICAgIDMsXG4gICAgICA0MyxcbiAgICAgIDE3LFxuICAgICAgMTUxLFxuICAgICAgMTM2LFxuICAgICAgNDQsXG4gICAgICA0LFxuICAgICAgMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUkZTWVpFNVZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3NzkzOTIxODI5OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDc1NTA0NTI2NTgyMzc6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHVuL3JZSEVJMnd0N1lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4MFZIZjNaMG0yTVhCeUZtRmJtWi9LR1FEYnB2Z21GVlpyVVVGUXdQdWk0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlllQ3JNUTJkdUtDSkx6NTRNcmpjSGZSSXpyYXIxZ0hQWU5sb3ZTNkMraityRGFrNVhqdS84VnJOMG4reG9odElvaWJhdEptWW12OWtxd2hMM0QvUUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImd4dWppcDhXejhpREZFaHkxUGtJcndxbFV5WGdnVHBvUWd3d0RQNUN5VFFWUDloQjRmUjZ4SVA4aGdUVVFzcktwU3VaSU9IU0N5MW5VOTN6VzdSOEFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3NzkzOTIxODI5OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjQ3NjYyMjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKTkRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpORC5qc29uIjogIntcImtleURhdGFcIjpcIlZRQ09hbEZWdXFFYXlPOUZBVWt0T1Z1c3VlNWplSkxxcFJ4cjB2aE1JbVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk5NDM2Mzg5NyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "AYANOKOJI",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 

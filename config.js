const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_12_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAwLFxuICAgICAgICA0NixcbiAgICAgICAgMTIwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxODksXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgNjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDMzLFxuICAgICAgICAyNixcbiAgICAgICAgNzEsXG4gICAgICAgIDQxLFxuICAgICAgICA5NCxcbiAgICAgICAgNixcbiAgICAgICAgOTYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA3LFxuICAgICAgICA1MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0LFxuICAgICAgICA4NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDg4LFxuICAgICAgICAxODYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNixcbiAgICAgICAgMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA1NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDc0LFxuICAgICAgICA5OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDU2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDkyLFxuICAgICAgICAzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDczLFxuICAgICAgICA4OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI1LFxuICAgICAgICA3NixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE5LFxuICAgICAgICA4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEzLFxuICAgICAgICA1NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDYsXG4gICAgICAgIDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkQyY1MyWmN4RWY2a1lLSnl5OUl1ZWN5Vk8zL2JLNFlhc2crT3lrK2ExcjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImtaQW5SLWVCUXk2TVVPcFlPNFVyVXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjcwODQ3ZDgtYjU2NC00MTY1LWJlYzMtZmY5ZmJlYjI2OTY1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcsXG4gICAgICAzMixcbiAgICAgIDIyMixcbiAgICAgIDE1LFxuICAgICAgMjA5LFxuICAgICAgMjYsXG4gICAgICA5LFxuICAgICAgMjAwLFxuICAgICAgMTcwLFxuICAgICAgODAsXG4gICAgICAxODcsXG4gICAgICAyNDAsXG4gICAgICAzMyxcbiAgICAgIDIyMCxcbiAgICAgIDEyMixcbiAgICAgIDIzNCxcbiAgICAgIDgwLFxuICAgICAgOTMsXG4gICAgICAyMjYsXG4gICAgICA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNCxcbiAgICAgIDIyMSxcbiAgICAgIDE3OCxcbiAgICAgIDE3MyxcbiAgICAgIDE4NSxcbiAgICAgIDI0MSxcbiAgICAgIDIxLFxuICAgICAgMTMyLFxuICAgICAgMTU0LFxuICAgICAgMTIwLFxuICAgICAgMjksXG4gICAgICAyMzEsXG4gICAgICA1MyxcbiAgICAgIDE0NyxcbiAgICAgIDE1OCxcbiAgICAgIDE3NixcbiAgICAgIDE0MyxcbiAgICAgIDE0NCxcbiAgICAgIDIyNCxcbiAgICAgIDE3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDWEFCSlYxWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzI3MjkzNjUyOjczQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4OTU1NDkzMzg4MzgxOjczQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xmNzBjd0VFTGU1MUxvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiY3ZmNkVjaDRpK0pRd2dLVnhjYWhDZlFRYTlJSWdiRDkzUis1QW5OSjNWTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1K0YvaWZVOWdvVjlSaHU5RG9ZdGhEWDcxTm5JQXJBMCtLTEZ5NjczUUdxVFNpZ0pQZ0hEaTFmTi8yZ1kxN0ExWTJYMFRjbFMxSGlybXZQR2MzRVdBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwV1Z2Q3RieVlRejMyV25YOXdyRjI5bTNyc1BCYU15SVZHQlRsd0ZtclMrR1U2RENJV0Y2RDZTdVRYWHVjQkpKZk1DM3F6aGpEMjhoczE3enE0bTZDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MjcyOTM2NTI6NzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNjMxMTYyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRml3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGaXcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRMGhWcHhpYkgxaGV1eFo1NG1rMVkrdVRwZjl4TXBtL1VUcjlQY3ZNRlR3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMzQ0NjgyNzIsXCJjdXJyZW50SW5kZXhcIjo4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDUsNl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

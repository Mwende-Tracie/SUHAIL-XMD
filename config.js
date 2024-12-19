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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_24_12_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDksXG4gICAgICAgIDUxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDksXG4gICAgICAgIDUsXG4gICAgICAgIDc0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDg2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTczLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY3LFxuICAgICAgICA4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDM2LFxuICAgICAgICA0NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDU3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDYzLFxuICAgICAgICA4MixcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY0LFxuICAgICAgICAzOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgODksXG4gICAgICAgIDE4OCxcbiAgICAgICAgODIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDExLFxuICAgICAgICAxNzksXG4gICAgICAgIDM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDg3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDEsXG4gICAgICAgIDgxLFxuICAgICAgICA1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDcyLFxuICAgICAgICA5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1SMVJhTjhXMStkMmVNdWJvdzYza25TcXN3Z3dVSHJKOVNaZFhza1VTMWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkI3NlRyVHpCUmJtVG5GOFU0UER0REFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDAyMTRmMWMtNDM2Mi00YmViLWFiOGEtMTIyNTNhM2VlMGY0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NSxcbiAgICAgIDIwNSxcbiAgICAgIDEyLFxuICAgICAgMjM4LFxuICAgICAgMjM4LFxuICAgICAgMTgwLFxuICAgICAgNjUsXG4gICAgICAyOSxcbiAgICAgIDUwLFxuICAgICAgMjUwLFxuICAgICAgMjMsXG4gICAgICA4MSxcbiAgICAgIDE0NCxcbiAgICAgIDE3NCxcbiAgICAgIDE2MyxcbiAgICAgIDEzMSxcbiAgICAgIDg2LFxuICAgICAgMTAyLFxuICAgICAgMTc2LFxuICAgICAgNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MSxcbiAgICAgIDQ5LFxuICAgICAgMTE0LFxuICAgICAgMTYxLFxuICAgICAgMTUxLFxuICAgICAgMjAxLFxuICAgICAgNTAsXG4gICAgICAzMyxcbiAgICAgIDEsXG4gICAgICA2NixcbiAgICAgIDIxNCxcbiAgICAgIDExNixcbiAgICAgIDQsXG4gICAgICAxMDcsXG4gICAgICAxNzUsXG4gICAgICAxMjcsXG4gICAgICAxNTcsXG4gICAgICA4NixcbiAgICAgIDcwLFxuICAgICAgMjExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlM1VzQ1WE1FXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MjcyOTM2NTI6ODRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg5NTU0OTMzODgzODE6ODRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHI3MGN3RUVPU2pqcnNHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjdmY2RWNoNGkrSlF3Z0tWeGNhaENmUVFhOUlJZ2JEOTNSKzVBbk5KM1ZNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImVRejJGWEU5ZHNlSC81a3Y2RmJOVEhwcjcwTlI0ZlRmaHl0K0lkY1ZlRkE2b00zSXJpRHlzSVZPeGpCN3F6RFJaZnVkMWlhTHNQLzg2c21GK0VtRkFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInArRkUybE9pQXp6blVXanI1ZTNpSSs3djBhQzI3ZVhxbEdmRGZYNVVleldqcmZLakQ2ZmxYVDVOeFNqdFk3b3FCN05QSlpqemo0Y2c0OWNacGVQTWl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcyNzI5MzY1Mjo4NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ1Nzg2NjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDbHpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNsei5qc29uIjogIntcImtleURhdGFcIjpcIit1eU9vZzlUNkMvNnRBMlRoaWJiMmo2Q2dDeVNsT3M5dmJyMXIvWXB5V2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIzNDQ2ODI4MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0NTQ0Njc0OTczXCJ9Igp9"  // PUT your SESSION_ID 


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

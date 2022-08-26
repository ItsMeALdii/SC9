const fs = require('fs')
const chalk = require('chalk')

// MAKASIHLAH KE BANG ZENZ :)
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// HMM UDAH FREE DECK
global.APIKeys = {
	'https://zenzapis.xyz': 'sonelstore',
}

// NAMBAH BOLEH HAPUS JANGAN -_-
global.owner = ['62895331245483']
global.premium = ['62895331245483']
global.packname = 'ALdiixBotZ'
global.author = '𝙞𝙩𝙨𝙈𝙚𝘼𝙇𝙙𝙞𝙞 ★'
global.sessionName = 'ItsMeALdii'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus 𝙞𝙩𝙨𝙈𝙚𝘼𝙇𝙙𝙞𝙞 ★',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 5
}
global.thumb = fs.readFileSync('./lib/xavi.jpg')
global.tutor = fs.readFileSync('./video/intro.mp4')
global.visoka = { url: 'https://telegra.ph/file/9967164c85976f551bb05.jpg' }
global.menu1 = fs.readFileSync('./foto/1.jpg')
global.menu2 = fs.readFileSync('./foto/1.jpg')
global.menu3 = fs.readFileSync('./foto/1.jpg')
global.menu4 = fs.readFileSync('./foto/1.jpg')
global.menu5 = fs.readFileSync('./foto/1.jpg')
global.menu6 = fs.readFileSync('./foto/1.jpg')
global.menu7 = fs.readFileSync('./foto/1.jpg')
global.menu8 = fs.readFileSync('./foto/1.jpg')
global.menu9 = fs.readFileSync('./foto/1.jpg')
global.menu10 = fs.readFileSync('./foto/1.jpg')
global.menu11 = fs.readFileSync('./foto/1.jpg')
global.menu12 = fs.readFileSync('./foto/1.jpg')
global.menu13 = fs.readFileSync('./foto/1.jpg')
global.menu14 = fs.readFileSync('./foto/1.jpg')
global.menu15 = fs.readFileSync('./foto/1.jpg')
global.menu16 = fs.readFileSync('./foto/1.jpg')
global.menu17 = fs.readFileSync('./foto/1.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

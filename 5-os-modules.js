const os = require('os')

// info about the user
const user = os.userInfo()
console.log(user)


// method returns the stystem utptime in seconds

console.log(`The syteme uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs)
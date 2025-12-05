const ftp = require("basic-ftp")

async function clean() {
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        await client.access({
            host: process.env.FTP_SERVER,
            user: process.env.FTP_USERNAME,
            password: process.env.FTP_PASSWORD,
            secure: false
        })
        console.log("Connected to FTP server")

        // Try to remove the _next directory
        // We use removeDir which recursively deletes a directory
        try {
            console.log("Attempting to remove _next directory...")
            await client.removeDir("_next")
            console.log("Successfully removed _next directory")
        } catch (err) {
            // Ignore error if directory doesn't exist
            console.log("Could not remove _next directory (might not exist):", err.message)
        }

    } catch (err) {
        console.log("FTP Error:", err)
        process.exit(1)
    }
    client.close()
}

clean()

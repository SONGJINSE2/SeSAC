const fs = require("fs").promises;

async function exec(){
    await fs.writeFile("./write.txt", '안녕');
    await fs.copyFile("./write.txt", "write2.txt");
}
exec();

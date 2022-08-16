const fs = require("fs").promises;

fs.writeFile('./write.txt', '반갑습니다')
    .then(()=>{
        console.log("작성 완료");
    })
    .catch((err)=>{
        console.log( err );
    });


const fs = require('fs');

// reading files

// fs.readFile(('./Sugata/AuraMask.txt'), (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// writing files

// fs.writeFile(('./Sugata/AuraMask.txt'), 'KI! KI! AURA POWER!', () => {
//     console.log('File was written');
// });


// fs.writeFile(('./Sugata/AuraPower.txt'), 'Aura Power is infinite!', () => {
//     console.log('New file was written');
// });

// directories

// if (!fs.existsSync('./ShotBomber')) {
//         fs.mkdir('./ShotBomber', err => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('Folder created');
//     })
// } else {
//     fs.rmdir('./ShotBomber', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('Folder deleted');
//     })
// }

if (fs.existsSync('./Sugata/Tube.txt')) {
    fs.unlink('./Sugata/Tube.txt', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('File deleted');
    })
}

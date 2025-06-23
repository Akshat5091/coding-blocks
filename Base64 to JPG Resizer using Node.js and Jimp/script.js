import fs from 'fs';
import { Jimp } from 'jimp';

// Reading base64 string from file
const str = fs.readFileSync('img.txt', {encoding: 'utf-8'});
let buffer = Buffer.from(str, 'base64');
console.log(buffer);
fs.writeFileSync('img.png', buffer);


// Reducing the image size
async function resizeImage() {
    try {
        
        const image = await Jimp.read("img.png");
        
       
        image.resize({ w: 256, h: 256 }); // resize with options object
        
        await image.write("img-small.jpg"); // save
        console.log('Image resized successfully!');
    } catch (error) {
        console.error('Error processing image:', error);
    }
}

resizeImage();
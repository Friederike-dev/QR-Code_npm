// using the inquirer package from npm to get user input
import inquirer from 'inquirer';
// use the qr-image package to create a QR code from the URL that the user entered
import qr from "qr-image";
/*var qr = require('qr-image');   //with type: module we don't use this, but use import*/

// to save the QR code image we need the fs package
import fs from "fs"; // das native node package filesystem, wir wollen ja das erstellte qr-bild speichern

// start the inquirer prompt
inquirer
    .prompt([
        
        {
            type: "input", // type of input
            message: "Type in your URL: ", // message to the user
            name: "URL" // name of the input
        },
        {
            type: "input", // input for the file path
            message: "Enter the file path where you want to save the QR code (e.g., ./qr_image.png): ",
            name: "filePath", // key for the input
            default: "./qr_image.png" // standard path in case the user doesn't enter anything
        }
    ])
    .then((answers) => {
        // answers is an object with the keys of the inputs
        console.log("User Input: ", answers);
        const url = answers.URL; // the URL that the user entered
        const filePath = answers.filePath; // the file path where the QR code will be saved

        // create the QR code image
        var qr_svg = qr.image(url, { type: "png" });  //ohne Anfuehrungszeichen!!
        qr_svg.pipe(fs.createWriteStream(filePath)); // save the QR code image to the file path

        console.log(`QR code has been saved to ${filePath}`);

        // save the URL to a text file
        fs.writeFile("URL.txt", url, (err) => {
            if (err) throw err;
            console.log('The URL has been saved to URL.txt!');
        });

        // show QR-Code in the terminal (ASCII-Version)
        const qr_ascii = qr.imageSync(url, { type: "svg" }); // QR-Code as SVG
        console.log("\nHere is your QR code (ASCII representation):");
        console.log(qr_ascii); // show QR-Code in terminal 

    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
            console.error("An error occurred:", error);
        }
    });
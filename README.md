# QR Code Generator

Dieses Projekt ist ein einfacher QR-Code-Generator, der mit Node.js erstellt wurde. Es verwendet die npm-Pakete `inquirer` für Benutzereingaben und `qr-image` zur Erstellung von QR-Codes. Der generierte QR-Code wird in einer Datei gespeichert, und die eingegebene URL wird in einer Textdatei gespeichert.

---

## Voraussetzungen

Stelle sicher, dass die folgenden Voraussetzungen erfüllt sind, bevor du das Projekt nutzt:

1. **Node.js**: Installiere Node.js auf deinem Computer. [Node.js herunterladen](https://nodejs.org/)
2. **npm**: npm wird automatisch mit Node.js installiert.

---

## Installation

1. **Repository klonen**:
   Klone das Repository auf deinen Computer:
   ```bash
   git clone https://github.com/Friederike-dev/QR-Code_npm.git

2. **In das Projektverzeichnis wechseln**:
    cd QR-Code_npm

3. **Abhängigkeiten installieren**:
    npm install

## Nutzung

1. **Projekt starten**:
    node index.js

Eingaben machen:

Gib die URL ein, die du in einen QR-Code umwandeln möchtest.
Gib den Dateipfad ein, an dem der QR-Code gespeichert werden soll (z. B. ./qr_image.png). Wenn du nichts eingibst, wird der QR-Code standardmäßig unter ./qr_image.png gespeichert.

Ausgabe:

Der QR-Code wird an dem angegebenen Speicherort als PNG-Datei gespeichert.
Die eingegebene URL wird in einer Datei namens URL.txt gespeichert.
Eine ASCII-Darstellung des QR-Codes wird im Terminal angezeigt.

Beispiel
Eingabe im Terminal:
? Type in your URL: https://example.com
? Enter the file path where you want to save the QR code (e.g., ./qr_image.png): ./example_qr.png

Ausgabe im Terminal:
User Input:  { URL: 'https://example.com', filePath: './example_qr.png' }
QR code has been saved to ./example_qr.png
The URL has been saved to URL.txt!

Here is your QR code (ASCII representation):
<svg>...</svg>

Dateien im Projektverzeichnis:
example_qr.png: Enthält den generierten QR-Code.
URL.txt: Enthält die eingegebene URL.
const { app, BrowserWindow } = require('electron');
const path = require('path');

// Function to create a window and load the HTML file
function createWindow() {
    const win = new BrowserWindow({
        width: 800, // Width of the window
        height: 600, // Height of the window
        webPreferences: {
            nodeIntegration: true // Allows HTML to use Node.js features
        }
    });

    // Load the main HTML file (Bread-clicker.html)
    win.loadFile(path.join(__dirname, 'Bread-clicker.html'));
}

// When the app is ready, create the window
app.whenReady().then(createWindow);

// Quit the app when all windows are closed (on Windows, this is typical behavior)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

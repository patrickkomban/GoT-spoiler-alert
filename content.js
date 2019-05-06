//  image rights to signalfirestudios.com

const re = new RegExp('game of thrones', 'i');
const matches = document.documentElement.innerHTML.match(re);

if (matches != null) {
    if (matches.length > 0) {
        alert("THERE ARE (probably) GAME OF THRONES SPOILERS AHEAD! PROCEED AT YOUR OWN RISK!");
    }
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "remove images") {
        const images = document.getElementsByTagName('img');
        const len = images.length;

        for (let i = 0; i < len; ++i) {
          images[i].src = 'https://www.signalfirestudios.com/shirt/wp-content/uploads/2013/06/spoilereveryone-preview.jpg';
        }
    }
})

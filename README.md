# save-animated-line-stickers
A simple Javascript script to save animated stickers from Line messenger's web store. This is useful for designers who want to recreate animations from existing stickers.

Line's web store disables right clicking to save animated stickers. This script allows you to load the URL of the animated sticker when you click it in the Line web store.

## Usage

1. Navigate to the webpage for the stickers you want to download.
[Example](https://store.line.me/stickershop/product/3524/en)

2. Copy and paste the code below into the address bar.

*NOTE*: This can be bookmarked if you will be using it often.

```javascript
javascript:$(".mdCMN09Image").click(function(event) { urx = "https://" + event.target.outerHTML.split("https://")[1].split(".png")[0] + "_animation@2x.png"; window.open(urx); console.log(urx); });
```

3. Click on any animated sticker to open the animated sticker URL in a new tab!

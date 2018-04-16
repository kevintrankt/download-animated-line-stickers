# save-animated-line-stickers
A simple Javascript script to save animated stickers from Line messenger's web store. This is useful for designers who want to recreate animations from existing stickers.

Line's web store disables right clicking to save animated stickers. This script allows you to load the URL of the animated sticker when you click it.

#### Usage

1. Navigate

2. Test

```javascript
javascript:$(".mdCMN09Image").click(function(event) { urx = "https://" + event.target.outerHTML.split("https://")[1].split(".png")[0] + "_animation@2x.png"; window.open(urx); console.log(urx); });
```

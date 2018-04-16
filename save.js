$(".mdCMN09Image").click(function(event) {
  urx = "https://" + event.target.outerHTML.split("https://")[1].split(".png")[0] + "_animation@2x.png";
  window.open(urx);
  console.log(urx);
});

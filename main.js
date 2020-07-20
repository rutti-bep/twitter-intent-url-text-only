let Location = document.location
let params = (new URL(Location)).searchParams;
let text = params.get("text");
let url = params.get("url");
let hashtags = params.get("hashtags");
let via = params.get("via");
let related = params.get("ralated");
let in_reply_to = params.get("in_reply_to");

if ((hashtags+via+related+in_reply_to)!=""){

  let newLocation = Location.origin+Location.pathname+"?url="+encodeURIComponent(url)+"&text="+encodeURIComponent(text);
  console.log(newLocation);

  document.location = newLocation;
}

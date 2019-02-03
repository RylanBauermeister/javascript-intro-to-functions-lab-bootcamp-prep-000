function shout(words){
  return words.toUpperCase();
}

function whisper(words){
  return words.toLowerCase();
}

function logShout(words){
  console.log(shout(words));
}

function logWhisper(words){
  console.log(whisper(words));
}

function sayHiToGrandma(words){
  if(words === "I love you, Grandma"){
    return "I love you, too.";
  } else if(words === whisper(words)){
    return "I can't hear you!";
  } else if(words === shout(words)){
    return "YES INDEED";
  } else {
    return "Grandma seems confused."
  }
}
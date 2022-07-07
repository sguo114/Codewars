// kata completed

// 5kyu: Human Readable Time
function humanReadable (seconds) {
  let hour = String(Math.floor(seconds/3600)).padStart(2,0),
      min = String(Math.floor((seconds%3600)/60)).padStart(2,0),
      sec = String(seconds%60).padStart(2,0)
      
  return `${hour}:${min}:${sec}`;
}

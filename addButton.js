function addButton () {

  const audio = $('audio').attr("src");


 	if (audio) {

    $("<a class='x-btn' id='downloadAudio' download>Download Audio</a>").insertAfter('.x-audio');

    $('#downloadAudio').attr("href", audio);
  }
}

if ($('article').attr("class", "type-post")) {
    setTimeout( addButton, 1000);
  }

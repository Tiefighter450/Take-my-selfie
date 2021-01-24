var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if (Content == "take my selfie") {
        console.log("taking selfie --- ")
        speak()
    }
}
function speak() {
    var synth = window.speechSynthesis;
    speakData = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function() {
        takeSnapshot();
        save();
    }, 5000);
}
camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
function takeSnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfieImg" src="' + data_uri + '">';
    });
}
function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfieImg").src;
    link.href = image;
    link.click();
}
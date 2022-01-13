Webcam.set({
    width:"400",
    height:"470",
    image_format: 'jpeg',
    jpeg_quality:100

});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot()
{
    Webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML = '<image id="captured_image" src='+data_uri+'"/>'
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/EktoUKtXf/model.json', modelLoaded);

function modelLoaded(){
console.log('Model Loaded !');
}


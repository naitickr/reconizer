Webcam.set({
    width:"400",
    height:"470",
    image_format: 'jpeg',
    jpeg_quality:100

});

camera = document.getElementById('camera');

Webcam.attach('#camera');


function take_snapshot()
{
    Webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML = '<image id="captured_image" src="'+data_uri+'"/>'
    });
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/EktoUKtXf/model.json', modelLoaded);

function modelLoaded(){
console.log('Model Loaded !');
}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}
function gotResult( error,result){
    if(error){
        console.error(error);
    }
else{
    console.log(result);
    document.getElementById("result_object_name").innerHTML = result[0].label;
    document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed(3);
}
}
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:99
});

    camera = document.getElementById("camera");

    Webcam.attach("camera");

function startClassification()
{
    Webcam.snap(function(data_url)
    {
        document.getElementById("result").innerHTML = "<img id = 'captured_image' src = '" + data_url + "'>";
    })
}

console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/oMBnUG5L6/model.json", modelLoaded);

function modelLoaded() 
{
    console.log("Model Loaded");
}
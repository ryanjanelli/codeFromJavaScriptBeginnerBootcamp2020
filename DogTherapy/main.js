var image = document.querySelector('.dog-image');

function fetchDog() {
    // console.log('click registered');
    // console.log(image);
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => res.json())
    .then((jsonRes) => {
        image.src = jsonRes.message;
        // console.log(`message: ${jsonRes.message}`);
        // console.log(`status: ${jsonRes.status}`);
        // console.log(`img src: ${image.src}`);
    });
}

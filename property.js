const selectedHouse = localStorage.getItem('selectedHouse')
if (selectedHouse) {
    document.querySelector('.property-img img').src = selectedHouse
}


const img = document.querySelector('.property-img img')
img.onload = function() {
    console.log(img.naturalWidth, img.naturalHeight)
}
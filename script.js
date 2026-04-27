function goToProperty(element) {
    const imagePath = element.dataset.image
    localStorage.setItem('selectedHouse', imagePath)
    window.location.href = 'property.html'  
}
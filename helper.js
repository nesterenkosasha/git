function createEl (el, className, place) {
    let elNode = document.createElement(el)
    elNode.classList.add(className)
    if(place){
        return place.appendChild(elNode)
    } else {
        return elNode
    }
}


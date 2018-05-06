class UlComponent {
    constructor(){
        this.ul = createEl("ul", "ul")
    }

    render(val){
        console.log("***********", val);
        val.map(el => {
            this.li = createEl("li", "li", this.ul)
            this.checkbox = createEl("input", "ch", this.li)
            this.checkbox.type = "checkbox"
            this.text = createEl("span", "text", this.li)
            this.text.innerText = el
            this.text.setAttribute("readonly", "true")
            this.pen = createEl("button", "pen", this.li)
            this.pen.classList.add("fas")
            this.pen.classList.add("fa-pencil-alt")
            this.del = createEl("button", "btnDel", this.li)
            this.del.classList.add("fas")
            this.del.classList.add("fa-trash-alt")
            this.li.addEventListener("click", () => {
                console.log("li was clicked")
            })
        })
        console.log("main", this)
        return this.ul

    }

    addLi(value){
        this.lis.push(value)
        console.log("lis", this.lis, this.parentNode)
    }
}
//new UlComponent().render()
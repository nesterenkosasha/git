class InputComponent {
    constructor(){
        this.value = null
        
    }
    render(){
        this.divInput = createEl("div", "divInput")
        this.input = createEl("input", "input", this.divInput)
        this.input.type = "text"
        this.btn = createEl("button", "btn", this.divInput)
        this.btn.innerText = "button"
        this.btn.addEventListener("click", () => {
            this.value = this.input.value
            console.log("btn", this.value, new UlComponent());
            new UlComponent().addLi(this.input.value)
            console.log("btn", this.value, new UlComponent());

        })
        return this.divInput
    }


}
//new InputComponent()
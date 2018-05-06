class FooterComponent{
    constructor(){
    }

    render(){
        this.divFooter = createEl("div", "divFooter")
        this.bar = createEl("div", "bar", this.divFooter)
        this.persent = createEl("div", "pers", this.divFooter)
        return this.divFooter
    }
}

// new Footer()
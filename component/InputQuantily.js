export default class InputQuantily{
    quantily;
    constructor(_value){
        this.quantily=document.createElement("input");
        this.quantily.type="number";
        this.quantily.value=_value;
        this.quantily.min=1;
        this.quantily.setAttribute(
            "class",
            "border border-gray-500");
    }

    getValueInputQuantily=()=>{
        // console.log(this.quantily.value,"value")
        return this.quantily.value;
    }

    render(container){
        container.appendChild(this.quantily);
    }
}
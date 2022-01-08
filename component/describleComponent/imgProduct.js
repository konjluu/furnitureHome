export default class ImgProduct{
    urlImg;

    constructor(_srcImg){
        this.urlImg=document.createElement("img");
        this.urlImg.src=_srcImg;
    }

    render(container){
        container.appendChild(this.urlImg);
    }
}
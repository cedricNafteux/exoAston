export default class PubSponsord{
    id:number;
    image: string;
    title: string;
    text: string;

    constructor(   
        id:number,
        image: string,
        title: string,
        text: string,
        ){
            this.id = id;
            this.image = image;
            this.title = title;
            this.text = text;
        }
}
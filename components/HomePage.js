import { homePageProducts } from "./ProductApi.js";

export default class HomePage {
    $mainContainer;

    constructor() {
        this.$mainContainer = document.createElement("div");
    }

    render() {
        const htmls = homePageProducts.map((html) => {
            return `
                <div class="w-1/4 h-1/4 p-2 flex items-end">
                    <p class="absolute text-black text-xs font-bold mb-6 ml-4 cursor-pointer z-20">${html.name}</p>
                    <p class="absolute text-black text-xs mb-2 ml-4 cursor-pointer z-20">${html.address}</p>
                    <img src="${html.imgUrl}" alt="${html.name}" srcset="" class="cursor-pointer duration-500 hover:scale-105 box-border">
                </div>
            `
        });
        
        this.$mainContainer.innerHTML = htmls.join("");
        this.$mainContainer.setAttribute("class", "flex flex-wrap mx-40");

        return this.$mainContainer;
    }
}
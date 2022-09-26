import Header from "./Header.js";
import Footer from "./Footer.js";
import HomePage from "./HomePage.js";
import Room from "./Room.js";
import { guestroom, diningroom, bedroom } from "./ProductApi.js";
import RoomName from "./RoomName.js";
import CartModal from "./CartModal.js";


export default class Main {
    $container;
    $header;
    $childContainer;
    $itemsContainer;
    $cartModal;
    $footer;

    constructor() {
        this.$container = document.createElement("div");
        this.$container.setAttribute("class", "overflow-x-hidden");

        this.$header = new Header();
        this.$header.$logoEl.addEventListener("click", this.onHomeClick);
        this.$header.$productModal.$guestroom.addEventListener("click", this.onGuestroomClick);
        this.$header.$productModal.$diningroom.addEventListener("click", this.onDiningroomClick);
        this.$header.$productModal.$bedroom.addEventListener("click", this.onBedroomClick);

        this.$childContainer = document.createElement("div");

        this.$itemsContainer = document.createElement("div");

        this.$cartModal = new CartModal();

        this.$footer = new Footer();
    }

    onHomeClick = (e) => {
        e.preventDefault();
        this.$itemsContainer.innerHTML = "";
        this.$itemsContainer.setAttribute("class", "");
        let html = new HomePage();
        this.$itemsContainer.appendChild(html.render());
        this.$header.$mainContainer.setAttribute("style", "color: white; width: 100vw; height: 600px; background-image: url('https://nt11.mediawz.com/wp-content/uploads/2017/10/img_5452.jpg'); background-size: cover; background-position: center center; display: flex; flex-direction: column; align-items: center;");
    }

    onGuestroomClick = (e) => {
        e.preventDefault();
        this.$itemsContainer.innerHTML = "";
        this.$childContainer.innerHTML = "";
        let roomName = new RoomName("Phòng khách");
        this.$itemsContainer.appendChild(roomName.render());
        guestroom.forEach((item) => {
            let html = new Room(item.img, item.name, item.price);
            this.$childContainer.appendChild(html.render());
        })
        this.$childContainer.setAttribute("class", "flex flex-wrap m-auto grid grid-cols-4");
        this.$itemsContainer.appendChild(this.$childContainer);
        this.$itemsContainer.setAttribute("class", "w-2/3 m-auto");
        this.$header.$mainContainer.setAttribute("style", "width: 100vw; color: orange; display: flex; flex-direction: column; align-items: center");
    }

    onDiningroomClick = (e) => {
        e.preventDefault();
        this.$itemsContainer.innerHTML = "";
        this.$childContainer.innerHTML = "";
        let roomName = new RoomName("Phòng ăn");
        this.$itemsContainer.appendChild(roomName.render());
        diningroom.forEach((item) => {
            let html = new Room(item.img, item.name, item.price);
            this.$childContainer.appendChild(html.render());
        })
        this.$childContainer.setAttribute("class", "flex flex-wrap m-auto grid grid-cols-4");
        this.$itemsContainer.appendChild(this.$childContainer);
        this.$itemsContainer.setAttribute("class", "w-2/3 m-auto");
        this.$header.$mainContainer.setAttribute("style", "width: 100vw; color: orange; display: flex; flex-direction: column; align-items: center");
    }

    onBedroomClick = (e) => {
        e.preventDefault();
        this.$itemsContainer.innerHTML = "";
        this.$childContainer.innerHTML = "";
        let roomName = new RoomName("Phòng ngủ");
        this.$itemsContainer.appendChild(roomName.render());
        bedroom.forEach((item) => {
            let html = new Room(item.img, item.name, item.price);
            this.$childContainer.appendChild(html.render());
        })
        this.$childContainer.setAttribute("class", "flex flex-wrap m-auto grid grid-cols-4");
        this.$itemsContainer.appendChild(this.$childContainer);
        this.$itemsContainer.setAttribute("class", "w-2/3 m-auto");
        this.$header.$mainContainer.setAttribute("style", "width: 100vw; color: orange; display: flex; flex-direction: column; align-items: center");
    }

    render(mainContainer) {
        const homePage = new HomePage();

        this.$itemsContainer.appendChild(homePage.render());

        this.$container.appendChild(this.$header.render());
        this.$container.appendChild(this.$itemsContainer);
        this.$container.appendChild(this.$cartModal.render());
        this.$container.appendChild(this.$footer.render());

        mainContainer.appendChild(this.$container);
    }
}
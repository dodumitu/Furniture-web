export default class Room {
    $container;
    $img;
    $name;
    $price;
    $btn;
  
    constructor(img, name, price) {
      this.$container = document.createElement("div");
      this.$container.setAttribute("class", "cursor-pointer mt-2 border border-solid hover:shadow-lg m-2 text-center");
  
      this.$img = document.createElement("img");
      this.$img.src = img;
      this.$img.setAttribute("class", "w-60 h-60 object-cover hover:scale-110 duration-300");
  
      this.$price = document.createElement("p");
      this.$price.textContent = price;
      this.$price.setAttribute("class", "text-red-600 font-bold");
  
      this.$name = document.createElement("p");
      this.$name.textContent = name;
      this.$name.setAttribute("class", "font-normal mt-1 text-xl");
  
      this.$btn = document.createElement("button");
      this.$btn.type = "submit";
      this.$btn.textContent = "Mua hàng";
      this.$btn.setAttribute("class", "bg-red-700 hover:shadow-lg text-white font-bold mt-5 py-1 px-3 rounded");
    }
    render() {
        this.$container.appendChild(this.$img);
        this.$container.appendChild(this.$name);
        this.$container.appendChild(this.$price);
        this.$container.appendChild(this.$btn);

        return this.$container;
    }
}
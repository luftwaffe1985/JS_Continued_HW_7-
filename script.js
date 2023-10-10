"use strict";

const productInfo = JSON.parse(productsCollection);

const productsSection = document.querySelector(".content-products");
productsSection.classList.add("center", "content-products__index-paddings");

const contentProductsTitle = document.createElement("h2");
contentProductsTitle.classList.add("content-products__title");
contentProductsTitle.textContent = "Fetured Items";
productsSection.append(contentProductsTitle);

const contentProductsText = document.createElement("p");
contentProductsText.classList.add("content-products__text");
contentProductsText.textContent =
  "Shop for items based on what we featured in this week";
productsSection.append(contentProductsText);

//div content-products__items
const contentProductsItems = document.createElement("div");
contentProductsItems.classList.add("content-products__items");
productsSection.append(contentProductsItems);

//Featured Items
productInfo.forEach((productElement) => {
  //div item
  const contentProductsItem = document.createElement("div");
  contentProductsItem.classList.add("item");
  contentProductsItems.append(contentProductsItem);

  const contentProductsImage = document.createElement("img");
  contentProductsImage.classList.add("item__image");
  contentProductsImage.setAttribute("src", "alt");
  contentProductsImage.src = `${productElement.image}`;
  contentProductsImage.alt = "item photo";
  contentProductsItem.append(contentProductsImage);

  //div content-products__content
  const contentProductsContent = document.createElement("div");
  contentProductsContent.classList.add("item__content");
  contentProductsItem.append(contentProductsContent);

  const contentProductsName = document.createElement("a");
  contentProductsName.classList.add("item__name");
  contentProductsName.setAttribute("href", "#");
  contentProductsName.setAttribute("title", "link to the product");
  contentProductsName.textContent = `${productElement.name}`;
  contentProductsContent.append(contentProductsName);

  const contentProductsDescription = document.createElement("p");
  contentProductsDescription.classList.add("item__description");
  contentProductsDescription.textContent = `${productElement.description}`;
  contentProductsContent.append(contentProductsDescription);

  const contentProductsPrice = document.createElement("p");
  contentProductsPrice.classList.add("item__price");
  contentProductsPrice.textContent =
    productElement.currency + productElement.price;
  contentProductsContent.append(contentProductsPrice);

  //button item__add
  const contentProductsAdd = document.createElement("button");
  contentProductsAdd.classList.add("item__add");
  contentProductsAdd.setAttribute("type", "button");
  contentProductsAdd.setAttribute("name", "button");
  contentProductsAdd.setAttribute("id", `${productElement.id}`);
  contentProductsItem.append(contentProductsAdd);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "27");
  svg.setAttribute("height", "25");
  svg.setAttribute("viewBox", "0 0 27 25");
  svg.setAttribute("fill", "none");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const d =
    "M21.8765 22.2662C21.9215 22.2549 21.9428 22.2339 21.9605 22.2129C21.9683 22.2037 21.9761 22.1946 21.9839 22.1855C22.0204 22.1438 22.0237 22.0553 22.0229 22.0105C22.0097 21.9044 21.9189 21.8315 21.8417 21.8315C21.838 21.8315 21.8341 21.8317 21.8317 21.8318C21.7536 21.8372 21.6658 21.9409 21.6724 22.0625C21.6818 22.1793 21.7679 22.2662 21.8397 22.2662H21.8765ZM8.22003 22.2599C8.31921 22.2599 8.39984 22.1655 8.39984 22.0496C8.39984 21.9341 8.31921 21.8401 8.22003 21.8401C8.12091 21.8401 8.04022 21.9341 8.04022 22.0496C8.04022 22.1655 8.12091 22.2599 8.22003 22.2599ZM21.9999 24.2662C21.9522 24.2662 21.8883 24.2662 21.8397 24.2662C20.7021 24.2662 19.7571 23.3545 19.677 22.198C19.5969 20.9929 20.4942 19.9183 21.6957 19.8364C21.7446 19.8331 21.7933 19.8315 21.8417 19.8315C22.9804 19.8315 23.9418 20.7324 24.0195 21.8884C24.051 22.4915 23.8746 23.0612 23.4903 23.5012C23.106 23.9575 22.5768 24.2177 21.9999 24.2662ZM8.22003 24.2599C7.01581 24.2599 6.04022 23.2709 6.04022 22.0496C6.04022 20.8291 7.01581 19.8401 8.22003 19.8401C9.42419 19.8401 10.3998 20.8291 10.3998 22.0496C10.3998 23.2709 9.42419 24.2599 8.22003 24.2599ZM21.1989 17.3938H9.13354C8.70062 17.3938 8.31635 17.1005 8.2038 16.6775L4.27802 2.24768H1.52222C0.993896 2.24768 0.561035 1.80859 0.561035 1.27039C0.561035 0.733032 0.993896 0.292969 1.52222 0.292969H4.99982C5.43182 0.292969 5.8161 0.586304 5.92859 1.01025L9.85443 15.4391H20.5581L24.1149 7.13379H12.2583C11.7291 7.13379 11.2962 6.69373 11.2962 6.15649C11.2962 5.61914 11.7291 5.17908 12.2583 5.17908H25.5891C25.9095 5.17908 26.2146 5.34192 26.3901 5.61914C26.5665 5.89539 26.5989 6.23743 26.4702 6.547L22.08 16.807C21.9198 17.1653 21.5832 17.3938 21.1989 17.3938Z";
  const fill = "white";

  path.setAttribute("d", d);
  path.setAttribute("fill", fill);

  svg.append(path);
  contentProductsAdd.append(svg);

  const contentProductsAddSpan = document.createElement("span");
  contentProductsAddSpan.textContent = "Add to Cart";
  contentProductsAdd.append(contentProductsAddSpan);
});

//div content-products__button
const contentProductsButton = document.createElement("div");
contentProductsButton.classList.add("content-products__button");
productsSection.append(contentProductsButton);

const contentProductsBrowse = document.createElement("a");
contentProductsBrowse.classList.add("content-products__browse");
contentProductsBrowse.setAttribute("href", "title");
contentProductsBrowse.href = "#";
contentProductsBrowse.textContent = "Browse All Product";
contentProductsBrowse.title = "loading goods";
contentProductsButton.append(contentProductsBrowse);

//_________________________________________________________________________

//Cart Items, добавляем в document по нажатию на кнопку Add to cart
function createCartItemsSection() {
  const presenceOfSectionCartItems = document.querySelector(".cart-content");
  if (presenceOfSectionCartItems) {
    return;
  } else {
    const cartItemsBox = document.createElement("section");
    cartItemsBox.classList.add("cart-content", "center");

    const sectionHeading = document.createElement("h2");
    sectionHeading.classList.add("cart-content__title");
    sectionHeading.textContent = "Cart Items";
    cartItemsBox.append(sectionHeading);

    const itemsWrap = document.createElement("div");
    itemsWrap.classList.add("cart-content__items");
    cartItemsBox.append(itemsWrap);

    const footerAdvantagesSection =
      document.querySelector(".footer-advantages");
    footerAdvantagesSection.after(cartItemsBox);
    return itemsWrap;
  }
}
contentProductsItems.addEventListener("click", createCartItemsSection);

//добавляем товар в секцию Cart Items
function addNewProductToCart(e) {
  JSON.parse(productsCollection).forEach((item) => {
    const button = e.target.closest(".item__add");
    if (button.id == item.id) {
      //контейнер для карточек
      const itemsWrap = document.querySelector(".cart-content__items");

      //шаблон карточки товара
      const productCard = document.createElement("div");
      productCard.classList.add("cart-content__item");
      itemsWrap.append(productCard);

      const productImage = document.createElement("img");
      productImage.classList.add("cart-content__img");
      productImage.src = item.image;
      productCard.append(productImage);

      const productCardDescription = document.createElement("div");
      productCardDescription.classList.add("item__description");
      productCard.append(productCardDescription);

      const productCardTop = document.createElement("div");
      productCardTop.classList.add("item__top");
      productCardDescription.append(productCardTop);

      const productCardLink = document.createElement("a");
      productCardLink.classList.add("item__heading");
      productCardLink.textContent = item.name;
      productCardTop.append(productCardLink);

      const productCardProperties = document.createElement("div");
      productCardProperties.classList.add("item__properties");
      productCardDescription.append(productCardProperties);

      const productCardPrice = document.createElement("div");
      productCardPrice.classList.add("item__property_price");
      productCardPrice.textContent = "Price: ";
      productCardProperties.append(productCardPrice);

      const productCardSpan = document.createElement("span");
      productCardSpan.classList.add("item__property_price-colorful");
      productCardSpan.textContent = item.currency + item.price;
      productCardPrice.append(productCardSpan);

      const productCardColor = document.createElement("div");
      productCardColor.classList.add("item__property_color");
      productCardColor.textContent = `Color: ${item.color}`;
      productCardProperties.append(productCardColor);

      const productCardSize = document.createElement("div");
      productCardSize.classList.add("item__property_size");
      productCardSize.textContent = "Size: " + item.size;
      productCardProperties.append(productCardSize);

      const productCardQuantity = document.createElement("div");
      productCardQuantity.classList.add("item__property_quantity");
      productCardQuantity.textContent = "Quantity: ";
      productCardProperties.append(productCardQuantity);

      const productCardInput = document.createElement("input");
      productCardInput.classList.add("item__property_numberof");
      productCardInput.value = item.quantity;
      productCardQuantity.append(productCardInput);

      const productCardCrossBtn = document.createElement("button");
      productCardCrossBtn.classList.add("item__cross-button");
      productCard.append(productCardCrossBtn);

      const productCardCrossBtnSvg = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      productCardCrossBtnSvg.setAttribute("width", "18");
      productCardCrossBtnSvg.setAttribute("height", "18");
      productCardCrossBtnSvg.setAttribute("viewBox", "0 0 18 18");
      productCardCrossBtnSvg.setAttribute("fill", "none");
      productCardCrossBtnSvg.setAttribute(
        "xmlns",
        "http://www.w3.org/2000/svg"
      );

      const productCardCrossBtnSvgPath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      const d =
        "M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z";
      const fill = "#575757";

      productCardCrossBtnSvgPath.setAttribute("d", d);
      productCardCrossBtnSvgPath.setAttribute("fill", fill);

      productCardCrossBtnSvg.append(productCardCrossBtnSvgPath);
      productCardCrossBtn.append(productCardCrossBtnSvg);
    }
  });
}
contentProductsItems.addEventListener("click", addNewProductToCart);

//удяляем товар из секции Cart Items
function removeProductFromCart() {
  let counter = [];
  const itemsWrap = document.querySelector(".cart-content__items");
  if (itemsWrap.innerHTML !== "") {
    counter = itemsWrap.children;
    itemsWrap.addEventListener("click", function (event) {
      const target = event.target.closest(".item__cross-button");
      const productCard = event.target.closest(".cart-content__item");
      if (target) {
        productCard.remove();
        --counter.length;
        console.log(counter.length);
        if (counter.length === 0) {
          console.log(`корзина пуста`);
          const sectionCartItems = document.querySelector(".cart-content");
          document.addEventListener("click", function () {
            sectionCartItems.remove();
          });
        }
      }
    });
  }
}
contentProductsItems.addEventListener("click", removeProductFromCart);

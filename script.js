let cards = document.querySelector(".cards");
let list = [

    {
        name: "Cake",
        img: "1.jpg",
        description: " A cake is a harmonious blend of soft textures and rich flavors, beautifully decorated and crafted for indulgence and celebration.",

    },

    {
        name: "Donuts",
        img: "2.jpg",
        description: "Donuts are fluffy, fried rings of dough, delightfully glazed or topped, offering a perfect balance of sweetness and indulgent simplicity.",

    },

    {
        name: "Jalash",
        img: "5.jpg",
        description: "Jalash is a delicately crafted sweet, featuring layers of soft, syrup-soaked pastry with a melt-in-your-mouth texture, offering a perfect balance of sweetness and richness.",

    },

    {
        name: "Cream Caramel",
        img: "4.jpg",
        description: "Cream caramel is a silky, custard dessert topped with a glossy layer of caramel, blending smooth textures with rich, caramelized sweetness.",

    },
]

list.map((el) => {
    cards.innerHTML += `

         <div class="card">
            <img src="${el.img}" alt="" class="card__img">
            <div class="card__content">
                <h3>${el.name}</h3>
                <p>
                    ${el.description}
                </p>
                <button class="card__content__btn">
                    Show more
                </button>

            </div>

        </div>
`
})
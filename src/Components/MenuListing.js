import CardBlock from "./CardBlock";

function MenuListing() {
    //Получили структуру с бекенда
    const menu = [
        {data: [
            {id: 1, imageUrl: 'https://catherineasquithgallery.com/uploads/posts/2023-01/1674178922_catherineasquithgallery-com-p-serii-fon-kvadrat-foto-50.jpg', title: 'Осенний салат с печёной тыквой и свёклой', price: 410, ingredients: ['Запеченная тыква', 'свекла отварная', 'сыр брынза', 'айсберг', 'рукола', 'грецкие орехи', 'горчичный соус', 'соус песто', 'крем бальзамик']},
            {id: 2, imageUrl: 'https://catherineasquithgallery.com/uploads/posts/2023-01/1674178922_catherineasquithgallery-com-p-serii-fon-kvadrat-foto-50.jpg', title: 'Салат из печёных баклажанов с соусом гамадари', price: 490, ingredients: ['Запечённые баклажаны', 'свежие помидоры', 'салат айсберг', 'рукола', 'свежий шпинат', 'кинза', 'грецкие орехи', 'соус гамадари']},
            {id: 3, imageUrl: 'https://catherineasquithgallery.com/uploads/posts/2023-01/1674178922_catherineasquithgallery-com-p-serii-fon-kvadrat-foto-50.jpg', title: 'Киш с курицей и грибами', price: 370, ingredients: ['Куриное филе', 'мука', 'шампиньоны', 'яйцо', 'гауда', 'сливки', 'лук репчатый', 'масло сливочное', 'сметана', 'мускатный орех', 'паприка', 'айсберг', 'рукола', 'горчичный соус']},
            {id: 4, imageUrl: 'https://catherineasquithgallery.com/uploads/posts/2023-01/1674178922_catherineasquithgallery-com-p-serii-fon-kvadrat-foto-50.jpg', title: 'Панкейки с крем-чизом и вареньем из лесных ягод', price: 320, ingredients: ['Панкейки (Мука, сахар, яйцо, масло)', 'творожный сыр', 'сметана', 'варенье из лесных ягод (клубника, черника)', 'мята']},
        ],
            title: 'Осенние предложения'},
        {data: [
            {id: 5, imageUrl: 'https://catherineasquithgallery.com/uploads/posts/2023-01/1674178922_catherineasquithgallery-com-p-serii-fon-kvadrat-foto-50.jpg', title: 'Картофельная вафля с беконом', price: 450, ingredients: ['Картофельная вафля (картофель, мука, молоко, масло сливочное, яйцо, укроп)', 'глазунья', 'бекон из свиной вырезки', 'соус горчично-сливочный', 'помидоры черри', 'рукола']},
            {id: 6, imageUrl: 'https://catherineasquithgallery.com/uploads/posts/2023-01/1674178922_catherineasquithgallery-com-p-serii-fon-kvadrat-foto-50.jpg', title: 'Боул с индейкой', price: 450, ingredients: ['Индейка', 'овощная сальса (перец болгарский, огурец свежий, авокадо, манго, кинза, мята, соль, сок лайма, помидоры)', 'смесь отварных круп', 'айсберг', 'романо', 'соус медово-горчичный (горчица зернистая, мед, масло оливковое, лимонный сок)', 'помидоры черри', 'авокадо', 'лайм', 'шпинат', 'рукола', 'мята']},
            {id: 7, imageUrl: 'https://catherineasquithgallery.com/uploads/posts/2023-01/1674178922_catherineasquithgallery-com-p-serii-fon-kvadrat-foto-50.jpg', title: 'Боул с креветками', price: 550, ingredients: ['Креветки',  'овощная сальса (перец болгарский, огурец свежий, авокадо, манго, кинза, мята, соль, сок лайма, помидоры)', 'смесь отварных круп', 'айсберг', 'романо', 'соус медово-горчичный (горчица зернистая, мед, масло оливковое, лимонный сок)', 'помидоры черри', 'авокадо', 'лайм', 'шпинат', 'рукола', 'мята']},
            {id: 8, imageUrl: 'https://catherineasquithgallery.com/uploads/posts/2023-01/1674178922_catherineasquithgallery-com-p-serii-fon-kvadrat-foto-50.jpg', title: 'Драники с беконом и яйцом пашот', price: 450, ingredients: ['Бекон из свиной вырезки', 'яйцо пашот', 'голландский соус', 'помидоры', 'картофель', 'масло растительное', 'луковые хлопья', 'микрозелень']},
        ],
            title: 'Завтраки'},
    ]

    return (
        <div className="menu-content-wrapperd">
            <div className="menu-content">
                {menu.map(arrayWithCertainData =>
                <CardBlock blockTitle={arrayWithCertainData.title} blockData={arrayWithCertainData.data}/>)}
            </div>
        </div>
    )
}

export default MenuListing;


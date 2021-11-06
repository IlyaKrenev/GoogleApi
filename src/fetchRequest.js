export default function fetchRequest(params){
    // fetch(`https://www.googleapis.com/customsearch/v1?key=${buf.key}&cx=${buf.cx}&q=${buf.q}&start=${buf.start}&num=${buf.num}`)
    // .then((response) => {
    //     return response.json();
    // })
    // .then((data) => {
    //     console.log(data);
    // })

   return [
        {
            title: 'test1',
            link: 'vk.com1',
            subs: '123123123123123',
            img: 'https://cdn0.iconfinder.com/data/icons/expenses-vs-income/30/__food_apple_grocery_gastronomy-512.png'
        },
        {
            title: 'test2',
            link: 'vk.com2',
            subs: '123123123123123',
            img: 'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C240-512.png'
        },
        {
            title: 'test3',
            link: 'vk.com3',
            subs: '123123123123123',
            img: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/apple-512.png'
        }
    ].slice(params.start, params.num)
}
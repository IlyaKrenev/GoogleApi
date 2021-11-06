export default async function fetchRequest(params){
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${params.key}&cx=${params.cx}&q=${params.q}&start=${params.start}&num=${params.num}`);
    const json = await response.json();
    return json.items;
}
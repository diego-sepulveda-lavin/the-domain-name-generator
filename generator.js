let pronouns = ['me', 'us', 'her', 'him', 'it', 'them', 'my', 'our', 'your', 'her', 'his', 'their'];
let adjs = ['adorable', 'delightful', 'adventurous', 'depressed', 'horrible', 'aggressive', 'hungry', 'real', 'agreeable', 'different'];
let nouns = ['family', 'government', 'home', 'job', 'life', 'lot', 'man', 'money', 'month', 'mother']


function urlGenerator(arr1, arr2, arr3) {
    let final = []
    for (pronoun of arr1) {
        for (adj of arr2) {
            for (noun of arr3) {
                final.push(pronoun + adj + noun + ".com")
            }
        }
    }
    return final
}

let urlList = urlGenerator(pronouns, adjs, nouns)

function listIterator(list){
    for (x of list){
        let listItem = document.createElement("LI");
        let url = document.createTextNode(x);
        listItem.appendChild(url);
        document.querySelector(".lista").appendChild(listItem);
    }
}

listIterator(urlList)







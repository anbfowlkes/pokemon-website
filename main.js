const pokemon = ['charmander', 'bulbasaur', 'squirtle'];
const pokemonIDs = ['001', '002', '003', '007'];

// loop over every ID
// create an HTML element
// set the HTML element values
// append HTML element to the DOM

pokemonIDs.map((id) => {
    let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;
    console.log('img url', imgUrl);
    let div = document.createElement('div');//adding a div to house the img element
    div.setAttribute('class', 'pokemon-card');// setting the class of the div
    let img = document.createElement('img');// creating the img element itself

    img.src = imgUrl;
    img.setAttribute('height', '100px');
    img.setAttribute('width', '100px');
    div.append(img);// append the img element to the div
    document.body.append(div);
})

const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.eso.org/public/images/';

axios.get(url)
.then(response => {
    const $ = cheerio.load(response.data);
    const auxData=(($('.container-fluid script').html()).replace('var images =',''));
    pageEso = eval(auxData);
    var output = '';
    for (var i = 0; i < pageEso.length; i++) {
        output += '<div class="image"><img src="'+pageEso[i].src+'" alt="'+pageEso[i].title+'"><div class="overlay"><h2>'+pageEso[i].title+'</h2><a href="https://www.eso.org'+pageEso[i].url+'"> <button>Learn more</button> </a></div></div>';
    }
    document.getElementById('container-image').innerHTML = output;
})
.catch(error => {
    console.log(error);
})
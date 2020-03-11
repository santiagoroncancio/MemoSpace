var x=localStorage.getItem("cards");

var x = x.split(",");
var tam=localStorage.getItem("tam");
//alert(x);
function fillCards(){
    var output = '';
    for (var i = 0; i < tam; i=i+2) {
        
        var Name=jsonCards.info[x[i]-1].Name;
        var Id=jsonCards.info[x[i]-1].Id;
        var Type=jsonCards.info[x[i]-1].Type;
        var Distance=jsonCards.info[x[i]-1].Distance;
        var Constellation=jsonCards.info[x[i]-1].Constellation;
        var Category=jsonCards.info[x[i]-1].Category;
        var Link=jsonCards.info[x[i]-1].Link;
        
        output += '<article><div class="imagen"><img src="img/cards/'+x[i]+'.jpg"></div><div class="text"><p>Name: '+Name+'</p><p>Id: '+Id+'</p><p>Type: '+Type+'</p><p>Distance: '+Distance+'</p><p>Constellation: '+Constellation+'</p><p>Category: '+Category+'</p><a href="'+Link+'"><p>Link</p></a></div></article>';
    }
    document.getElementById('idcards').innerHTML = output;
}
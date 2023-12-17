const products = require('/products.json');

 console.log(products);
 $(document).ready(function () {
    $("img").on({
      mouseenter: function () {
        $(this).attr("width", "50px");
      },
      mouseleave: function () {
        $(this).attr("width", "50px");
      },
      click: function () {
        $(this).hide();
      }
    });
  });
  /*Vitor's Javascript for search pages*/ 
  function searchPet(){
    var term = document.getElementById("search").value;
    searchTerm = term.toLowerCase();
    $(document).ready(function(){  
        fetch('pets.json')
            .then(res=> res.json())
            .then(data => {
                var myJSON = data;
                var myObj = JSON.parse(JSON.stringify(myJSON));
                var count= 0;
                var none = 0;
                
                myJSON.Animals.forEach(element => {
                    count++;
                    if((element.Name).toLowerCase() === searchTerm){
                        $('#tablePt').append(
                            '<tr>'+
                                '<td>'+element.Name+'</td>'+
                                '<td>'+element.Gender+'</td>'+
                                '<td>'+element.Breed+'</td>'+
                                '<td>'+element.Vaccination+'</td>'+
                                '<td>'+element.Species+'</td>'+
                                '<td>'+element.Rescue_Date+'</td>'+
                                '<td>'+element.Age+'</td>'+
                                '<td>'+element.AdoptionFee+'</td>'+
                            '</tr>'
                        );
                    }
                    else if((element.Breed).toLowerCase() === searchTerm){
                        $('#tablePt').append(
                            '<tr>'+
                                '<td>'+element.Name+'</td>'+
                                '<td>'+element.Gender+'</td>'+
                                '<td>'+element.Breed+'</td>'+
                                '<td>'+element.Vaccination+'</td>'+
                                '<td>'+element.Species+'</td>'+
                                '<td>'+element.Rescue_Date+'</td>'+
                                '<td>'+element.Age+'</td>'+
                                '<td>'+element.AdoptionFee+'</td>'+
                            '</tr>'
                        );
                    }
                    else if((element.Species).toLowerCase() === searchTerm){
                        $('#tablePt').append(
                            '<tr>'+
                                '<td>'+element.Name+'</td>'+
                                '<td>'+element.Gender+'</td>'+
                                '<td>'+element.Breed+'</td>'+
                                '<td>'+element.Vaccination+'</td>'+
                                '<td>'+element.Species+'</td>'+
                                '<td>'+element.Rescue_Date+'</td>'+
                                '<td>'+element.Age+'</td>'+
                                '<td>'+element.AdoptionFee+'</td>'+
                            '</tr>'
                        );
                    }
                    else{
                        none++;
                    }
                });

                if(count === none){
                    alert("Sorry, there is no match for that term!");
                }
            })
            .catch(error => console.error('Error fetching JSON:', error))
    });
}

function searchProduct(){
    var term2 = document.getElementById("searchPd").value;
    searchTerm2 = term2.toLowerCase();
    $(document).ready(function(){  
        fetch('products.json')
            .then(res=> res.json())
            .then(data => {
                var myJSON = data;
                var myObj = JSON.parse(JSON.stringify(myJSON));
                var count= 0;
                var none = 0;
                
                myJSON.products.forEach(element => {
                    count++;
                    if((element.Category).toLowerCase() === searchTerm2){
                        $('#tablePd').append(
                            '<tr>'+
                                '<td>'+element.name+'</td>'+
                                '<td>'+element.Category+'</td>'+
                                '<td>'+element.Species+'</td>'+
                                '<td>'+element.Age+'</td>'+
                                '<td>'+element.Quantity+'</td>'+
                                '<td>'+element.Kg+'</td>'+
                                '<td>'+element.Price+'</td>'+
                            '</tr>'
                        );
                    }
                    else if((element.Species).toLowerCase() === searchTerm2){
                        $('#tablePd').append(
                            '<tr>'+
                                '<td>'+element.name+'</td>'+
                                '<td>'+element.Category+'</td>'+
                                '<td>'+element.Species+'</td>'+
                                '<td>'+element.Age+'</td>'+
                                '<td>'+element.Quantity+'</td>'+
                                '<td>'+element.Kg+'</td>'+
                                '<td>'+element.Price+'</td>'+
                            '</tr>'
                        );
                    }
                    else{
                        none++;
                    }
                })

                if(count === none){
                    alert("Sorry, there is no match for that term!");
                
                }
            })    
            .catch(error => console.error('Error fetching JSON:', error))
    })
    
}
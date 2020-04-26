$(document).ready(function () {
  

    //Dropdown menu
    //referenze
  
    var dropDown = $(".action_list .actions");
    var dropLinks = dropDown.children("a");
    var dropMenu = dropDown.children(".drop_down");
    var header = $("header");
  
    //show and hide dropDown menu
  
    dropLinks.mouseenter(function () { 
  
      var actualMenu = $(this).next(".drop_down");
  
  
      dropMenu.hide();
  
      actualMenu.toggle()
      
    
    });
  
  
    header.mouseleave(function () {
      dropMenu.hide()
    })
  
  
    
    
  
  
  });//fine ready
  
   

// toggleClass() mostra o nasconde una classe
// sibling() prende tutti i frattelli tranne quello corrente
// mouseenter() mostra una classe passandoci sopra con il mouse
// mouseleave() contrario di mouseenter()
// hover() è una short per evidenziare la concatenazione tra mouseenter() e mouseleave()
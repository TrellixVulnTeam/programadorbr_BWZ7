// let body = $("body");

// console.log(body.find(".item2").fadeOut(1000));
//lista1.find(".item2").fadeOut(1000);

// lista1.children().fadeOut(1000);


//JQUERY - chaining

// let jq = $("#lista1").slideUp(2000).slideDown(1000).fadeOut(1000).fadeIn(1000);

// let objeto = {
//     print10: function(){
//         console.log(10);
//         return this;
//     },
//     print20: function(){
//         console.log(20);
//         return this;
//     }
// }

// objeto.print10().print10().print20().print10();


// AULA LENDO CONTEUDO DO ELEMENTO
// console.log($("h1").text())
//  console.log($("h1").html())
//  console.log($("#lista1").text())
//  console.log($("#novo").val())
  // console.log($("#novo").attr("name"))

  // $("#lista1").find("[key=2]").remove();
  // $("li").remove(".item2 , .item4")
// let lista1 = $("#lista1")

// let items = lista1.html()

// lista1.html(item + "<li> novo item </li>")

// lista1.prepend("<li>Novo teste</li>") // after, before, append



// setTimeout(() => {
//   $("h1").toggleClass("bg-blue")
// }, 3000);

// setInterval(() => {
//   $("h1").toggleClass("bg-blue")
// }, 300);

$("h1").toggle("bg-blue");

$("h1").css({
  "background-color":"blue",
  "font-size": "50px"
});





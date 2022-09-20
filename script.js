const start = () => {
  const icons = [
    "fa-otter",
    "fa-otter",
    "fa-horse",
    "fa-horse",
    "fa-kiwi-bird",
    "fa-kiwi-bird",
    "fa-hippo",
    "fa-hippo",
    "fa-dragon",
  ];


  //Inverser les elemnts de icons

  let card = document.querySelectorAll(".card");
  let card_front = document.querySelectorAll(".card_front .fas");
  let card_face = document.querySelectorAll(".card_face");
  let j = Math.floor(Math.random() * Math.floor(8))


  for (let i = icons.length - 1; i > 0; i--) {
    [icons[j], icons[i]] = [icons[i], icons[j]]
  }

  // Afficher les icones dans le back de chaque carte
  for (let i = 0; i < card_front.length; i++) {
    card_front[i].classList.add(icons[i]);
  }

  //Retourner les cartes
  let index = []
  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", (e) => {
      card[i].classList.toggle('visible');
      index.push(i);


      if (index.length == 2 ) 
      if (index[0] != index[1]) {
        if (card_front[index[0]].classList.value === card_front[index[1]].classList.value) {
          card[index[0]].classList.add("matched");
          card[index[1]].classList.add("matched");
          index = [];
        }

        else {
          setTimeout(function RemoveClass () {
            for (let g = 0; g < index.length; g++) {
              card[index[g]].classList.remove("visible");
            }
            index = [];
          }, 1000);
        }
      }else{
        
        index =[]
      }
    })
  }

  console.log(index)












  console.log(card[0].classList)

















  /*
  
  // Attribuer chaque icons à fas
  for (let i=0; i<icons.length; i++) {
    card_front.classList.add(icons[i]);
  }
  console.log(card_front)
  
  
  
  //let fas = card_front.querySelector(".fas");
  
  
  */
};




if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}










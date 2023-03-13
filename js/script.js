const form = document.getElementById('myForm');

const main_show = document.getElementById('main_show');



form.addEventListener('submit',function (e) {
  e.preventDefault();

  const loadCharaters = async () => {
    try {
      const res = await fetch('https://api.github.com/users');
      users = await res.json();
      displayCharacters(users);
    } catch (err) {
      console.log(err);
    }
  }

  const displayCharacters = (characters) => {
    console.log('Disp=>', characters);
    let inpEv = document.getElementById('searchBar');
    let inpValue = document.getElementById('searchBar').value;
    let searchString = inpValue.toLowerCase();
   
    let fillterCharcters = characters.filter((character) => {
      return (
        character.login.toLowerCase().includes(searchString)
      )
    });
  
    let resultSee;
    let empty_head = document.getElementById('empty_head');
    
    if (fillterCharcters.length == 0) {

      empty_head.innerHTML = `
      <h1><b>Ничего не найдено</b></h1>
      `;
    } else {

      empty_head.innerHTML = ``;
      resultSee = fillterCharcters.map((character) => {
        return `
      <div class='child'>
      <h5><b><a target="_blank" href=${character.html_url}>${character.login}</b></a></h5>
      <div class='img__div'>
      <a target="_blank" href=${character.html_url}><img class='images' src=${character.avatar_url} alt='avatar'></a>
      </div>
      <h6>Id: ${character.id}</h6>
      </div>
      `;
      }).join('')
      
      if (main_show.innerHTML = resultSee) {
        main_show.innerHTML = resultSee
        }
    }

    }
  
   
  loadCharaters();


})








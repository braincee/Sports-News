const olympics = [
    {
      id: 1,
      name: 'Olympics Games',
      images: {
        img: 'images/olympics-1.jpg',
        alt: 'olympics',
      },
      sport: 'Opening Ceremony',
      about: 'Gloria Tumushabe is the Founder and an instructor at Afro Fem Coders.She\'s a UC Berkeley computer science Master student from Uganda.',
    },
    {
      id: 2,
      name: 'Olympics News',
      images: {
        img: 'images/olympics-2.webp',
        alt: 'olympics',
      },
      sport: 'Olympics Channel',
      about: 'Lavanya is lead Instructor at Afro Fem Coders, a Master\'s student in Data Science ar UC Berkeley, a coding instructor at the coder school Berkeley, and author of programming courses on LinkedIn Learning.',
    },
    {
      id: 3,
      name: 'Swimming',
      images: {
        img: 'images/olympics-3.webp',
        alt: 'olympics',
      },
      sport: 'Olympics Swimming',
      about: 'Milak is considered the only swimmer with a chance at potentially spoiling things for Dressel, the heavy favorite.',
    },
    {
      id: 4,
      name: 'Ice Skiing',
      images: {
        img: 'images/olympics-4.jpg',
        alt: 'olympics',
      },
      sport: 'Olympics Skiing',
      about: 'Ice is much more slippery than snow and the lack of friction makes it hard to turn, stay upright and move confidently.',
    },
    {
      id: 5,
      name: 'Boxing',
      images: {
        img: 'images/olympics-5.jpg',
        alt: 'olympics',
      },
      sport: 'Olympics Boxing',
      about: 'At the final bell of boxing competition at the 2020 Tokyo Olympic Games, Uzbekistan’s Bakhodir Jalolov let out a primal scream, and given the brutal, hard-hitting encounter he had just had with U.S. powerhouse Richard Torrez Jr.',
    },
    {
      id: 6,
      name: 'Basketball',
      images: {
        img: 'images/olympics-6.jpg',
        alt: 'olympics',
      },
      sport: 'Olympics Basketball',
      about: 'Curry, like James, dealt with injuries throughout his career. In 2021, he missed time due to a fractured tailbone, but still played in 63 of a possible 72 games. Still, the 33-year-old is taking the summer off to continue to heal his body.',
    },
  ];
  
  const teamContainer = document.querySelector('#Games .games');
  
  function createCard(dataInfo) {
    const li = document.createElement('li');
    li.className = 'card header-2';
    li.innerHTML = `<div class="card-img">
          <img src="${dataInfo.images.img}" alt="${dataInfo.images.alt}">
        </div>
        <div class="card-body">
          <h3>${dataInfo.name}</h3>
          <h4>${dataInfo.sport}</h4>
          <p>${dataInfo.about}</p>
        </div>`;
    return li;
  }
  
  olympics.forEach((info) => {
    const card = createCard(info);
    teamContainer.appendChild(card);
  });
  
  const teamList = document.querySelectorAll('#Games .games li');
  const moreBtn = document.querySelector('#Games button');
  const btnSpan = document.querySelector('#Games button span');
  const btnIcon = document.querySelector('#Games button i');
  
  let state = false;
  
  function displayMore() {
    if (!state) {
      teamList.forEach((team) => {
        team.style.display = 'flex';
      });
      btnSpan.textContent = 'LESS';
      btnIcon.classList.remove('fa', 'fa-chevron-down');
      btnIcon.classList.add('fa', 'fa-chevron-up');
  
      state = true;
    } else {
      teamList.forEach((team) => {
        team.style.display = 'none';
      });
      teamList[0].style.display = 'flex';
      teamList[1].style.display = 'flex';
      teamList[2].style.display = 'flex';
  
      btnSpan.textContent = 'MORE';
      btnIcon.classList.remove('fa', 'fa-chevron-up');
      btnIcon.classList.add('fa', 'fa-chevron-down');
      state = false;
    }
  }
  
  moreBtn.addEventListener('click', displayMore);
  
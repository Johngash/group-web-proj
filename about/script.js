const teamGrid = document.querySelector('.team-grid');

const teamMembers = [
  {
    name: "Samwel Peter",
    role: "Team Lead / HTML",
    bio: "Leads the team and builds the core structure of the application.",
    image: "../public/alvin.jpeg", 
    socials: {
      github: "https://github.com/samwelp672-cell",
      instagram: null,
      linkedin: "#"
    }
  },
  {
    name: "Brian Machuka",
    role: "CSS / Styling",
    bio: "Crafts the visual identity and ensures a polished, responsive user experience.",
    image: "../public/brian.jpeg",
    socials: {
      github: "https://github.com/Ubuntu-kush",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "Alexander Kuria",
    role: "JavaScript Developer",
    bio: "Handles interactivity and dynamic functionality across the app.",
    image: null,
    initials: "AK",
    color: "#e9c46a",
    socials: {
      github: "#",
      instagram: null,
      linkedin: "#"
    }
  },
  {
    name: "Stephanie Amondi",
    role: "Content & Testing",
    bio: "Ensures content quality and tests the system for reliability.",
    image: null,
    initials: "SA",
    color: "#457b9d",
    socials: {
      github: "https://github.com/StephAmondi1009",
      instagram: "https://www.instagram.com/steph56_34/",
      linkedin: "https://www.linkedin.com/in/stephanie-amondi-abb7b8303/"
    }
  },
  {
    name: "Vivian Nyakio",
    role: "Documentation",
    bio: "Creates clear and structured documentation for the project.",
    image: "../public/vivian.jpeg",
    socials: {
      github: "#",
      instagram: null,
      linkedin: "#"
    }
  },
  {
    name: "John Njenga",
    role: "Database Specialist",
    bio: "Designs and manages the database systems.",
    image: "../public/john.jpeg",
    socials: {
      github: "https://github.com/Johngash",
      instagram: "https://www.instagram.com/nj3ng.aa/",
      linkedin: "https://www.linkedin.com/in/john-ng-ang-a-9142382aa/"
    }
  },
  {
    name: "Joseph Njenga",
    role: "Network Administrator",
    bio: "Handles networking and system infrastructure.",
    image: null,
    initials: "JN",
    color: "#e63946",
    socials: {
      github: "#",
      instagram: "https://www.instagram.com/cee_boy87?igsh=ZXVycWo4d2M1dms4",
      linkedin: "#"
    }
  },
  {
    name: "Lily Kamau",
    role: "UI/UX Researcher",
    bio: "Focuses on user experience and interface design improvements.",
    image: null,
    initials: "LK",
    color: "#6d597a",
    socials: {
      github: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "Ruth Mulwa",
    role: "Backend Developer",
    bio: "Builds and maintains server-side logic and APIs.",
    image: null,
    initials: "RM",
    color: "#2a9d8f",
    socials: {
      github: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "Brian Machuka",
    role: "Quality Assurance",
    bio: "Tests and ensures the system meets quality standards.",
    image: null,
    initials: "BM",
    color: "#f4a261",
    socials: {
      github: "https://github.com/Ubuntu-kush",
      instagram: null,
      linkedin: "#"
    }
  }
];

function createTeamCards() {
  if (!teamGrid) return;
  
  teamGrid.innerHTML = ''; 

  teamMembers.forEach(member => {
    const card = document.createElement('div');
    card.className = 'team-card';

    let avatarHtml = '';
    if (member.image) {
      avatarHtml = `
        <div class="avatar pfp">
          <img src="${member.image}" alt="${member.name}">
        </div>`;
    } else {
      const textColor = (member.color === '#e9c46a' || member.color === '#f4a261') ? '#333' : '#fff';
      avatarHtml = `<div class="avatar" style="background:${member.color}; color:${textColor};">${member.initials}</div>`;
    }

    const getSocialIcon = (url, iconClass) => {
      if (url) {
        return `<a href="${url}" target="_blank"><i class="${iconClass}"></i></a>`;
      }
      return '';
    };

    let socialsHtml = '<div class="social-media-links">';
    if (member.socials.github !== null) socialsHtml += getSocialIcon(member.socials.github, 'fa-brands fa-github');
    if (member.socials.instagram !== null) socialsHtml += getSocialIcon(member.socials.instagram, 'fa-brands fa-instagram');
    if (member.socials.linkedin !== null) socialsHtml += getSocialIcon(member.socials.linkedin, 'fa-brands fa-linkedin-in');
    socialsHtml += '</div>';

    card.innerHTML = `
      ${avatarHtml}
      <h3>${member.name}</h3>
      <p class="role">${member.role}</p>
      <p>${member.bio}</p>
      ${socialsHtml}
    `;

    teamGrid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', createTeamCards);

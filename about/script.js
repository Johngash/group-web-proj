const teamGrid = document.querySelector('.team-grid');

const TEAM_PLACEHOLDER_IMAGE = [
  "https://images.unsplash.com/photo-1700299926955-d68c16ba107b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1543260775-945c562403b3?q=80&w=364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1667030474693-6d0632f97029?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=843&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const teamMembers = [
  {
    name: "Samwel Peter",
    role: "Team Lead / HTML",
    bio: "Leads the team and builds the core structure of the application.",
    image: null,
    socials: {
      github: "https://github.com/samwelp672-cell",
      instagram: null,
      linkedin: null
    }
  },
  {
    name: "Alvin Ndeto",
    role: "Full Stack Developer",
    bio: "Builds and integrates both frontend and backend features to deliver a seamless user experience.",
    image: "../public/alvin.jpeg",
    socials: {
      github: null,
      instagram: "https://www.instagram.com/cee_boy87",
      linkedin: null
    }
  },
  {
    name: "Brian Machuka",
    role: "CSS / Styling",
    bio: "Crafts the visual identity and ensures a polished, responsive user experience.",
    image: "../public/brian.jpeg",
    socials: {
      github: "https://github.com/Ubuntu-kush",
      instagram: null,
      linkedin: null
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
      github: "https://github.com/Ubuntu-kush",
      instagram: null,
      linkedin: null
    }
  },
  {
    name: "Stephanie Amondi",
    role: "Content & Testing",
    bio: "Ensures content quality and tests the system for reliability.",
    image: "../public/steph.jpeg", // This will now use the placeholder image
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
      github: null,
      instagram: null,
      linkedin: null
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
    image: null, // This will now use the placeholder image
    initials: "JN",
    color: "#e63946",
    socials: {
      github: null,
      instagram: null,
      linkedin: null
    }
  },
  {
    name: "Lily Kamau",
    role: "UI/UX Researcher",
    bio: "Focuses on user experience and interface design improvements.",
    image: "../public/lily.jpeg",
    initials: "LK",
    color: "#6d597a",
    socials: {
      github: "https://github.com/Hackin-Lily21",
      instagram: "https://www.instagram.com/__the.li_lyedit_?igsh=bnYyM2ZydzBmNnlo",
      linkedin: "www.linkedin.com/in/lily- kamau - b21558346"
    }
  },
  {
    name: "Ruth Mulwa",
    role: "Backend Developer",
    bio: "Builds and maintains server-side logic and APIs.",
    image: null, // This will now use the placeholder image
    initials: "RM",
    color: "#2a9d8f",
    socials: {
      github: null,
      instagram: null,
      linkedin: null
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
    // Use the member.image if available, otherwise use the placeholder
    const imageUrl = member.image || TEAM_PLACEHOLDER_IMAGE[Math.floor(Math.random() * 5)];
    avatarHtml = `
      <div class="avatar pfp">
        <img src="${imageUrl}" alt="${member.name}">
      </div>`;

    const getSocialIcon = (url, iconClass) => {
      if (url) {
        return `<a href="${url}" target="_blank"><i class="${iconClass}"></i></a>`;
      }
      return ''; // Returns empty string if url is null
    };

    let socialsHtml = '<div class="social-media-links">';
    if (member.socials.github) socialsHtml += getSocialIcon(member.socials.github, 'fa-brands fa-github');
    if (member.socials.instagram) socialsHtml += getSocialIcon(member.socials.instagram, 'fa-brands fa-instagram');
    if (member.socials.linkedin) socialsHtml += getSocialIcon(member.socials.linkedin, 'fa-brands fa-linkedin-in');
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

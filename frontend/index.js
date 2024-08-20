function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    //  ✨ do your magic here
    const nav = document.createElement('nav');

    links.forEach(link => {
      const anchor = document.createElement('a');

      anchor.setAttribute('href', link.href);
      anchor.title = link.title;
      anchor.innerHTML = link.textContent;

      nav.appendChild(anchor);
    });
    return nav;
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    //  ✨ do your magic here
    const section = document.querySelector('section');
    const learnerCard = document.createElement('div');
    learnerCard.classList.add('learner-card');

    const name = document.createElement('p');
    const id = document.createElement('p');
    const dob = document.createElement('p');
    const favLang = document.createElement('p');

    name.innerHTML = learner.fullName;
    id.innerHTML = `Learner ID: ${learner.id}`;
    dob.innerHTML = `Date of Birth: ${learner.dateOfBirth}`;
    favLang.innerHTML = `Favorite Language: ${languages}`;

    learnerCard.appendChild(name);
    learnerCard.appendChild(id);
    learnerCard.appendChild(dob);
    learnerCard.appendChild(favLang);

    section.appendChild(learnerCard);

    learnerCard.addEventListener('click', () => {
      const active = document.querySelector('.active');
      if (learnerCard !== active) {
        learnerCard.classList.add('active');
        active.classList.remove('active')
      } else {
        active.classList.remove('active');
      }
    });
  }

    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    //  ✨ do your magic here

      learners.forEach(learner => {
        const learnerLanguage = languages.find(language => learner.favLanguage === language.id);

        if (learnerLanguage) {
          buildLearnerCard(learner, learnerLanguage.name);
        }
      });

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here
    console.log('Contact email: ', footerData.contactEmail);

    // query select
    const body = document.querySelector('body');

    // create element
    const footer = document.createElement('footer');
    const companyInfo = document.createElement('div');
    const socialMedia = document.createElement('div');
    const copyright = document.createElement('div');
    const companyName = document.createElement('p');
    const address = document.createElement('p');
    const contactEmail = document.createElement('p');
    const email = document.createElement('a');
    const twitter = document.createElement('a');
    const facebook = document.createElement('a');
    const instagram = document.createElement('a');

    // class name
    companyInfo.classList.add('company-info');
    companyName.classList.add('company-name');
    address.classList.add('address');
    contactEmail.classList.add('contact-email');
    socialMedia.classList.add('social-media');

    // inner HTML
    companyName.innerHTML = 'Bloom Institute of Technology';
    address.innerHTML = '123 Main Street, City, Country';
    contactEmail.innerHTML = 'Email: ';
    email.innerHTML = ' info@example.com';
    twitter.innerHTML = 'Twitter';
    facebook.innerHTML = 'Facebook';
    instagram.innerHTML = 'Instagram';
    copyright.innerHTML = '© BLOOM INSTITUTE OF TECHNOLOGY 2023';

    // set attribute
    email.setAttribute('href', 'mailto:info@example.com');
    twitter.setAttribute('href', 'https://twitter.com/example');
    facebook.setAttribute('href', 'https://www.facebook.com/example');
    instagram.setAttribute('href', 'https://www.instagram.com/example');

    // append
    companyInfo.appendChild(companyName);
    companyInfo.appendChild(address);
    companyInfo.appendChild(contactEmail);
    contactEmail.appendChild(email);
    socialMedia.appendChild(twitter);
    socialMedia.appendChild(facebook);
    socialMedia.appendChild(instagram);
    footer.appendChild(companyInfo);
    footer.appendChild(socialMedia);
    footer.appendChild(copyright);
    body.appendChild(footer);

    // return document.createElement('footer')
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  //  ✨ do your magic here
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()

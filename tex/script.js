const navBarLinks = [
    {
      title: "Browse",
      href: "#",
    },
    {
      title: "Ladings",
      href: "#",
    },
    {
      title: "Pages",
      href: "#",
    },
    {
      title: "Accounts",
      href: "#",
    },
  ];
  
  const nav = document.getElementById("nav_links");
  
  const createNavbarLink = (singleLink) => {
    const li = document.createElement("li");
    li.classList.add("nav-item");
    const a = document.createElement("a");
    a.innerText = singleLink.title;
    a.href = singleLink.href;
    a.classList.add("nav-link");
    li.appendChild(a);
    nav.appendChild(li);
  };
  
  navBarLinks.forEach((navBarLink) => {
    createNavbarLink(navBarLink);
  });
  
  const skills = [
    { text: "30,000 online courses ", subtitle: "enjoy variety of fresh topics" },
    {
      text: "Expert instruction  ",
      subtitle: "find the right instruction for you ",
    },
    { text: "Lifetime access  ", subtitle: "learn on your schedule" },
  ];
  
  const skillsContainer = document.getElementById("skills");
  
  const createSkills = (singolSkill) => {
    const div = document.createElement("div");
    div.setAttribute("class", "col-4 skills");
    const divRow = document.createElement("div");
    divRow.setAttribute("class", "row ");
    const divColIntern = document.createElement("div");
    divColIntern.setAttribute(
      "class",
      "col-4  centered-text mx-auto "
    );
    const h3 = document.createElement("h3");
    h3.innerText = singolSkill.text;
    const p = document.createElement("p");
    p.setAttribute("class", "text-secondary");
    p.innerText = singolSkill.subtitle;
  
    div.appendChild(divRow);
    divRow.appendChild(divColIntern);
    divColIntern.append(h3, p);
    skillsContainer.appendChild(div);
  };
  
  
  skills.forEach((singolSkills) => {
    createSkills(singolSkills);
  });
  

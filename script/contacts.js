let employees = [
  {
    firstName: "Валерия",
    lastName: "Иванова",
    workNumber: "+7 (343) 263-71-35",
    mobNumber: "+7 (912) 644-78-90",
    position: "Менеджер по спиртовым краскам",
    photo: "img/photo1.png",
  },
  {
    firstName: "Анастасия",
    lastName: "Сухорукова",
    workNumber: "+7 (343) 263-71-35",
    mobNumber: "+7 (912) 644-78-90",
    position: "Менеджер по спиртовым краскам",
    photo: "img/photo2.png",
  },
  {
    firstName: "Землемерова",
    lastName: "Алена",
    workNumber: "+7 (343) 263-71-35",
    mobNumber: "+7 (912) 644-78-90",
    position: "Менеджер по водным краскам",
    photo: "img/photo3.png",
  },
  {
    firstName: "Юлия",
    lastName: "Прохорова",
    workNumber: "+7 (343) 263-71-35",
    mobNumber: "",
    position: "Генеральный директор",
    photo: "img/photo4.png",
  },
  {
    firstName: "Кристина",
    lastName: "Шамшурина",
    workNumber: "+7 (343) 263-71-35",
    mobNumber: "+7 (912) 644-78-90",
    position: "Менеджер по расходным материалам",
    photo: "img/photo5.png",
  },
];


let divContacts = document.querySelector(".contacts-box");

for (let employee of employees) {
  divContacts.insertAdjacentHTML(
    "beforeend",
    `<div class="contact"><img class="contact__photo" src="${employee.photo}" alt="Photo">
    <p class="contact__position">${employee.position}</p>
    <p class="contact__name">${employee.firstName} ${employee.lastName}</p>
    <p class="contact__number">${employee.workNumber}</p>
    <p class="contact__number">${employee.mobNumber}</p></div>`
  );
}
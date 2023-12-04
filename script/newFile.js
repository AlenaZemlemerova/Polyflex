for (let i = 0; i < employees.length; index++) {
  const employee = employees[i];
  divContacts.insertAdjacentHTML(
    "beforeend",
    `<div class="contact"><img class="contact__photo" src="${employee.photo}" alt="Photo">
    <p class="contact__position">${employee.position}</p>
    <p class="contact__name">${employee.firstName} ${employee.lastName}</p>
    <p class="contact__number">${employee.workNumber}</p>
    <p class="contact__number">${employee.mobNumber}</p></div>`
  );
}

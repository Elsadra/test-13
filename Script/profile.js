let studentName = document.querySelector(".student-name");
let studentUserName = document.querySelector(".student-user-name");
let studentFieldOfStudy = document.querySelector(".fieldOfStudy-student");
let studentGrade = document.querySelector(".grade-student");
let studentAge = document.querySelector(".age-student");
let descInfoStudent = document.querySelectorAll(".desc-info-student");
let btnEditInfo = document.querySelector(".btn-edit-info-student");
let descInfoStudentTel = document.querySelector(".desc-info-student-tel");
let descInfoStudentEmail = document.querySelector(".desc-info-student-email");
let descInfoStudentCity = document.querySelector(".desc-info-student-city");
let btnDeleteAccount = document.querySelector(".btn-delete-account");
let containerCardAlert = document.querySelector(".container-card-alert");
let content = document.querySelector(".content");
let cancel = document.querySelector(".cancel");
let desActivate = document.querySelector(".desactivate");
let linkDesActivate = document.querySelector(".link-desactivate");
let editImgProfile = document.querySelector(".edit-img-profile");
let containerError = document.querySelector(".container-error");
let errorClose = document.querySelector(".error__close");
let errorTitle = document.querySelector(".error__title");

// functions

function informationStudent() {
  // name and last name
  studentName.innerHTML =
    JSON.parse(localStorage.getItem("nameStudent")) +
    " " +
    JSON.parse(localStorage.getItem("lastNameStudent"));
  // username
  studentUserName.innerHTML = JSON.parse(
    localStorage.getItem("UserNameStudent")
  );
  //fieldOfStudy
  studentFieldOfStudy.innerHTML = JSON.parse(
    localStorage.getItem("fieldOfStudyStudent")
  );
  // Grade
  studentGrade.innerHTML = JSON.parse(localStorage.getItem("gradeStudent"));
  //   age
  studentAge.innerHTML = JSON.parse(localStorage.getItem("ageStudent"));
  // tel
  descInfoStudentTel.value = JSON.parse(localStorage.getItem("numberStudent"));
  // email
  descInfoStudentEmail.value = JSON.parse(localStorage.getItem("emailStudent"));
  // city
  descInfoStudentCity.value = JSON.parse(localStorage.getItem("cityStudent"));
}

let edit = false;
function editInfo() {
  if (!edit) {
    edit = true;
    btnEditInfo.innerHTML = "ثبت تغییرات";
    descInfoStudent.forEach(function (input) {
      input.removeAttribute("disabled");
      input.setAttribute(
        "style",
        "caret-color: var(--purple-dark);border-right: 2px solid var(--purple-dark);"
      );
    });
  } else {
    edit = false;
    localStorage.setItem(
      "cityStudent",
      JSON.stringify(descInfoStudentCity.value)
    );
    localStorage.setItem(
      "emailStudent",
      JSON.stringify(descInfoStudentEmail.value)
    );
    localStorage.setItem(
      "numberStudent",
      JSON.stringify(descInfoStudentTel.value)
    );
    btnEditInfo.innerHTML = "ویرایش";
    descInfoStudent.forEach(function (input) {
      input.setAttribute("disabled", "disabled");
      input.setAttribute(
        "style",
        "caret-color: var(--black); border-right: 1px solid var(--black)"
      );
    });
  }
}

function showAlertCard() {
  content.innerHTML = `
    <span class="title">خروج از حساب کاربری</span>
    <p class="message">
      آیا مطمئن هستید که می خواهید از حساب خود خارج شوید؟
      
    </p>
    `;
  containerCardAlert.setAttribute("style", "top:0; transition: .4s;");
  cancel.addEventListener("click", hideAlertCard);
  desActivate.addEventListener("click", deleteAccount);
}

function hideAlertCard() {
  containerCardAlert.setAttribute("style", "top: 100%; transition: .4s;");
}

function deleteAccount() {
  localStorage.clear();
  linkDesActivate.href = "../index.html";
}

function showAlert() {
  containerError.setAttribute("style", "right: .5rem; transition: 0.4s;");
  setTimeout(function () {
    containerError.setAttribute("style", "right: -25rem; transition: 0.4s;");
  }, 2500);
  errorTitle.innerHTML = "درحال حاضر امکان ویرایش عکس وجود ندارد";
}

function hideAlert() {
  containerError.setAttribute("style", "right: -25rem; transition: .4s;");
}

window.addEventListener("load", informationStudent);
btnEditInfo.addEventListener("click", editInfo);
btnDeleteAccount.addEventListener("click", showAlertCard);
editImgProfile.addEventListener("click", showAlert);
errorClose.addEventListener("click", hideAlert);

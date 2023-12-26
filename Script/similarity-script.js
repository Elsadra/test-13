let darkMoodBtn = document.querySelectorAll(".dark-mood");
let nav = document.querySelector("nav");
let body = document.querySelector("body");
let subMenu = document.querySelector(".sub-menu");
let linkMenuPage = document.querySelector(".link-menu-page");
let loader = document.querySelector(".container-loader");
let containerNotifications = document.querySelector(".container-Notifications");
let containerBoxMessage = document.querySelector(".container-box-message");
let containerBoxNotifications = document.querySelector(
  ".container-box-Notifications"
);
let bodyBoxNotifications = document.querySelector(".body-box-Notifications");
let numNotificationsAll = document.querySelector(".num-Notifications-all");
let itemMainBoxNotificationsAlert = document.querySelector(
  ".item-main-box-Notifications-alert"
);
let btnCloseBoxNotifications = document.querySelector(
  ".btn-close-box-Notifications"
);
let linkUsername = document.querySelectorAll(".link-username");
let textSignUp = document.querySelector(".text-sign-up");
let textSignUpSubMenu = document.querySelector(".text-sign-up-sub-menu");
let date = new Date();
let hours = date.getHours();
let AllNotification = [
  {
    id: 1,
    Notification: "خیلی خوش آمدید.",
    model: "all",
    model2: "none",
  },
];

// functions

function NotificationGenerator(item) {
  bodyBoxNotifications.innerHTML = "";
  let li, iconNotification, textNotification, btnDeleteNotification;
  item.forEach(function (Notification) {
    // li
    li = document.createElement("li");
    li.className = "item-Notifications";

    // iconNotification
    iconNotification = document.createElement("span");
    iconNotification.className = "icon-Notifications";
    iconNotification.innerHTML = `<i class="bi bi-dot"></i>`;

    // textNotification
    textNotification = document.createElement("span");
    textNotification.className = "Notifications";
    textNotification.innerHTML = `${Notification.Notification}`;

    // btnDeleteNotification
    btnDeleteNotification = document.createElement("span");
    btnDeleteNotification.className = "delete-Notifications";
    btnDeleteNotification.innerHTML = `
    <button class="button btn-delete-Notifications">
      <i class="bi bi-eye"></i>
      &nbsp;
      <p class="text">خواندن</p>
    </button>
    `;
    btnDeleteNotification.setAttribute(
      "onclick",
      "removeItem(" + Notification.id + ");"
    );

    // append
    li.append(iconNotification, textNotification, btnDeleteNotification);
    bodyBoxNotifications.append(li);
  });
  numNotificationsAll.innerHTML = item.length;
  setLocalStorage(item);
}

function removeItem(itemId) {
  let localStorageItem = JSON.parse(localStorage.getItem("itemsRose"));
  AllNotification = localStorageItem;

  let mainIndexItem = AllNotification.findIndex(function (item) {
    return item.id === itemId;
  });

  AllNotification.splice(mainIndexItem, 1);

  setLocalStorage(AllNotification);
  NotificationGenerator(AllNotification);
}

function setLocalStorage(item) {
  localStorage.setItem("itemsRose", JSON.stringify(item));
}

darkMoodBtn.forEach(function (item) {
  item.addEventListener("click", lightDark);
});

let dark = false;

function lightDark() {
  if (!dark) {
    dark = true;
    localStorage.setItem("themeRose", "Dark");
    document.documentElement.style.setProperty("--body-color", "#262626");
    document.documentElement.style.setProperty("--pair-body-color", "#383838");
    document.documentElement.style.setProperty("--purple-light", "#d4c1f9");
    document.documentElement.style.setProperty("--purple-dark", "#8979a8");
    document.documentElement.style.setProperty("--black", "#e6e6e6");
    document.documentElement.style.setProperty("--pair-black", "#d8d8d8");
  } else {
    dark = false;
    localStorage.setItem("themeRose", "Light");
    document.documentElement.style.setProperty("--pair-body-color", "#e7ebee");
    document.documentElement.style.setProperty("--body-color", "#f3f4f6");
    document.documentElement.style.setProperty("--purple-light", "#5e63b1");
    document.documentElement.style.setProperty("--purple-dark", "#3c428c");
    document.documentElement.style.setProperty("--black", "#262626");
    document.documentElement.style.setProperty("--pair-black", "#383838");
  }
}

function themeBody() {
  let theme = localStorage.getItem("themeRose");
  if (theme == "Dark") {
    dark = true;
    localStorage.setItem("themeRose", "Dark");
    document.documentElement.style.setProperty("--body-color", "#262626");
    document.documentElement.style.setProperty("--pair-body-color", "#383838");
    document.documentElement.style.setProperty("--purple-light", "#d4c1f9");
    document.documentElement.style.setProperty("--purple-dark", "#8979a8");
    document.documentElement.style.setProperty("--black", "#e6e6e6");
    document.documentElement.style.setProperty("--pair-black", "#d8d8d8");
  }
}

function loaderWindow() {
  loader.setAttribute("style", "opacity: 0; transition: 0.4s;");
  setTimeout(function () {
    loader.remove();
  }, 500);
}

function hideBoxNotification() {
  containerBoxNotifications.setAttribute(
    "style",
    "bottom: -100%; transition: 0.4s;"
  );
}

function showBoxNotification() {
  containerBoxNotifications.setAttribute(
    "style",
    "bottom: 0%; transition: 0.4s;"
  );
  btnCloseBoxNotifications.addEventListener("click", hideBoxNotification);
  NotificationGenerator(AllNotification);
}

function showAlertNotification() {
  containerNotifications.setAttribute(
    "style",
    "bottom: 1.5rem; transition: 0.4s;"
  );
  setTimeout(function () {
    containerNotifications.setAttribute(
      "style",
      "bottom: -3rem; transition: 0.4s;"
    );
  }, 3000);
  containerNotifications.addEventListener("click", showBoxNotification);
}

function offlineUser() {
  showAlertNotification();
  let newNotification = {
    id: AllNotification.length + 1,
    Notification: "اتصال قطع شد",
    model: "all",
    model2: "alert",
  };
  AllNotification.push(newNotification);
  NotificationGenerator(AllNotification);
}

function onlineUser() {
  showAlertNotification();
  let newNotification = {
    id: AllNotification.length + 1,
    Notification: "اتصال برقرار شد",
    model: "all",
    model2: "alert",
  };
  AllNotification.push(newNotification);
  NotificationGenerator(AllNotification);
}

linkUsername.forEach(function (event) {
  event.addEventListener("click", function () {
    if (
      localStorage.getItem("emailStudent") !== null ||
      localStorage.getItem("UserNameStudent") !== null ||
      localStorage.getItem("PasswordStudent") !== null ||
      localStorage.getItem("numberStudent") !== null ||
      localStorage.getItem("nameStudent") !== null ||
      localStorage.getItem("lastNameStudent") !== null ||
      localStorage.getItem("ageStudent") !== null ||
      localStorage.getItem("cityStudent") !== null ||
      localStorage.getItem("fieldOfStudyStudent") !== null ||
      localStorage.getItem("gradeStudent") !== null ||
      localStorage.getItem("PreviousEntranceExamRankStudent") !== null
    ) {
      if (document.title == "Home ROSE Academic Adviser") {
        event.setAttribute("href", "./View/profile.html");
      } else {
        event.setAttribute("href", "./profile.html");
      }
    }
  });
});

function signUpUser() {
  if (
    localStorage.getItem("emailStudent") == null ||
    localStorage.getItem("UserNameStudent") == null ||
    localStorage.getItem("PasswordStudent") == null ||
    localStorage.getItem("numberStudent") == null ||
    localStorage.getItem("nameStudent") == null ||
    localStorage.getItem("lastNameStudent") == null ||
    localStorage.getItem("ageStudent") == null ||
    localStorage.getItem("cityStudent") == null ||
    localStorage.getItem("fieldOfStudyStudent") == null ||
    localStorage.getItem("gradeStudent") == null ||
    localStorage.getItem("PreviousEntranceExamRankStudent") == null
  ) {
    showAlertNotification();
    let newNotification = {
      id: AllNotification.length + 1,
      Notification: "لطفا نسبت به تکمیل فرم خود اقدام کنید.",
      model: "all",
      model2: "alert",
    };
    AllNotification.push(newNotification);
    NotificationGenerator(AllNotification);
  } else {
    showAlertNotification();
    let newNotification = {
      id: AllNotification.length + 1,
      Notification:
        JSON.parse(localStorage.getItem("nameStudent")) +
        " " +
        JSON.parse(localStorage.getItem("lastNameStudent")) +
        " خیلی خوش آمدید",
      model: "all",
      model2: "alert",
    };
    textSignUp.innerHTML = "پروفایل";
    textSignUpSubMenu.innerHTML = "پروفایل";
    AllNotification.push(newNotification);
    NotificationGenerator(AllNotification);
  }
}

// tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

window.addEventListener("offline", offlineUser);
window.addEventListener("online", onlineUser);
window.addEventListener("load", loaderWindow);
window.addEventListener("load", themeBody);
window.addEventListener("load", signUpUser);
containerBoxMessage.addEventListener("click", showBoxNotification);

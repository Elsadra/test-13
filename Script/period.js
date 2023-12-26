let btnPeriodMathematics = document.querySelector(".btn-period-mathematics");
let btnPeriodExperimental = document.querySelector(".btn-period-experimental");
let btnPeriodHumanities = document.querySelector(".btn-period-humanities");
let containerPeriod = document.querySelector(".container-period");

let allPeriod = [
  {
    id: 1,
    FieldOfStudy: "mathematics",
    name: "نحوه انتخاب رشته ریاضی فیزیک",
    desc: "اگر در نحوه انتخاب رشته ریاضی فیزیک دچاره ابهام شدید حتما یه سر به این دوره بزنید تا با رشته های دانشگاهیی ریاضی فیزیک هم آشنایی پیدا کنید.",
  },
  {
    id: 2,
    FieldOfStudy: "mathematics",
    name: "معرفی رشته‌های ریاضی و فیزیک",
    desc: "برای آشنایی بیشتر با رشته های ریاضی فیزیک این دوره رو ببین که مناسب خودته.",
  },
  {
    id: 3,
    FieldOfStudy: "mathematics",
    name: "رشته‌های محبوب و پردرآمد ریاضی فیزیک",
    desc: "تو این دوره با رشته های محبوب و پولساز ریاضی فیزیک آشنا میشی تا بفهمی در آینده هدفت چی میتونه باشه.",
  },
  {
    id: 4,
    FieldOfStudy: "mathematics",
    name: "به کدام رشته‌های ریاضی فیزیک بورسیه تعلق می‌گیرد؟",
    desc: "اینجا با رشته های ریاضی فیزیکی که بهشون بورسیه تعلق میگیره آشنا میشی که خیلی از سوالاتت رو برطرف میکنه.",
  },
  {
    id: 5,
    FieldOfStudy: "mathematics",
    name: "چالش کنکور برای دانش آموزان رشته ریاضی",
    desc: "جدا از مسئله رقابتی بودن کنکور سراسری، می‌توان گفت قبولی در کنکور برای دانش آموزان رشته ریاضی به مراتب دشوارتر است.",
  },
  {
    id: 6,
    FieldOfStudy: "experimental",
    name: "نحوه انتخاب رشته تجربی",
    desc: "اگر در نحوه انتخاب رشته تجربی دچاره ابهام شدید حتما یه سر به این دوره بزنید تا با رشته های دانشگاهیی تجربی هم آشنایی پیدا کنید",
  },
  {
    id: 7,
    FieldOfStudy: "experimental",
    name: "معرفی رشته‌های تجربی",
    desc: "برای آشنایی بیشتر با رشته های تجربی این دوره رو ببین که مناسب خودته",
  },
  {
    id: 8,
    FieldOfStudy: "experimental",
    name: "رشته‌های محبوب و پردرآمد تجربی",
    desc: "تو این دوره با رشته های محبوب و پولساز تجربی آشنا میشی تا بفهمی در آینده هدفت چی میتونه باشه",
  },
  {
    id: 9,
    FieldOfStudy: "experimental",
    name: "به کدام رشته‌های تجربی بورسیه تعلق می‌گیرد؟",
    desc: "اینجا با رشته های تجربی که بهشون بورسیه تعلق میگیره آشنا میشی که خیلی از سوالاتت رو برطرف میکنه",
  },
  {
    id: 10,
    FieldOfStudy: "experimental",
    name: "چالش کنکور برای دانش آموزان رشته تجربی",
    desc: "جدا از مسئله رقابتی بودن کنکور سراسری، می‌توان گفت قبولی در کنکور برای دانش آموزان رشته تجربی به مراتب دشوارتر است.",
  },
  {
    id: 11,
    FieldOfStudy: "humanities",
    name: "نحوه انتخاب رشته علوم انسانی",
    desc: "اگر در نحوه انتخاب رشته علوم انسانی دچاره ابهام شدید حتما یه سر به این دوره بزنید تا با رشته های دانشگاهیی علوم انسانی هم آشنایی پیدا کنید",
  },
  {
    id: 12,
    FieldOfStudy: "humanities",
    name: "معرفی رشته‌های علوم انسانی",
    desc: "برای آشنایی بیشتر با رشته های علوم انسانی این دوره رو ببین که مناسب خودته",
  },
  {
    id: 13,
    FieldOfStudy: "humanities",
    name: "رشته‌های محبوب و پردرآمد علوم انسانی",
    desc: "تو این دوره با رشته های محبوب و پولساز علوم انسانی آشنا میشی تا بفهمی در آینده هدفت چی میتونه باشه",
  },
  {
    id: 14,
    FieldOfStudy: "humanities",
    name: "به کدام رشته‌های علوم انسانی بورسیه تعلق می‌گیرد؟",
    desc: "اینجا با رشته های علوم انسانی که بهشون بورسیه تعلق میگیره آشنا میشی که خیلی از سوالاتت رو برطرف میکنه",
  },
  {
    id: 15,
    FieldOfStudy: "humanities",
    name: "چالش کنکور برای دانش آموزان رشته علوم انسانی",
    desc: "جدا از مسئله رقابتی بودن کنکور سراسری، می‌توان گفت قبولی در کنکور برای دانش آموزان رشته علوم انسانی به مراتب دشوارتر است.",
  },
];

function periodLoad(Array) {
  containerPeriod.innerHTML = "";
  let cardPeriod;
  Array.forEach(function (period) {
    cardPeriod = document.createElement("div");
    cardPeriod.className = "card-period";
    cardPeriod.innerHTML = `
    <a class="card1" href="#">
    <p class="title">${period.name}</p>
    <p class="small">${period.desc}</p>
    <div class="go-corner" href="#">
      <div class="go-arrow">→</div>
    </div>
  </a>
    `;
    containerPeriod.append(cardPeriod);
  });
}

function filterMathematic() {
  let filterMathematicPeriod = allPeriod.filter(function (period) {
    return period.FieldOfStudy == "mathematics";
  });
  periodLoad(filterMathematicPeriod);
}

function filterExperimental() {
  let filterExperimentalPeriod = allPeriod.filter(function (period) {
    return period.FieldOfStudy == "experimental";
  });
  periodLoad(filterExperimentalPeriod);
}

function filterumanities() {
  let filterHumanitiesPeriod = allPeriod.filter(function (period) {
    return period.FieldOfStudy == "humanities";
  });
  periodLoad(filterHumanitiesPeriod);
}

periodLoad(allPeriod);
btnPeriodMathematics.addEventListener("click", filterMathematic);
btnPeriodExperimental.addEventListener("click", filterExperimental);
btnPeriodHumanities.addEventListener("click", filterumanities);

// window.addEventListener("click", periodLoad);

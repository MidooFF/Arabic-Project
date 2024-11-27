const body = document.body as HTMLBodyElement;
const container = document.querySelector(".container") as HTMLDivElement;

let slideOne = document.querySelector(".up") as HTMLDivElement;
let slideTwo = document.querySelector(".middle") as HTMLDivElement;
let slideThree = document.querySelector(".down") as HTMLDivElement;

body.addEventListener("keypress", function (e) {
  if (e.key === "w") {
    if (nextS < test.length) {
      currentS++;
      nextS++;
      prevS++;

      slideOne.remove();
      slideTwo.classList.add("up");
      slideTwo.classList.remove("middle");
      slideTwo.setAttribute("data-index", prevS.toString());

      slideThree.classList.add("middle");
      slideThree.classList.remove("down");
      slideThree.setAttribute("data-index", currentS.toString());

      let newSlide = document.createElement("div");
      newSlide.classList.add("down");
      newSlide.setAttribute("data-index", nextS.toString());
      newSlide.textContent = `slide ${nextS}`;
      container.append(newSlide);

      slideOne = document.querySelector(".up") as HTMLDivElement;
      slideTwo = document.querySelector(".middle") as HTMLDivElement;
      slideThree = document.querySelector(".down") as HTMLDivElement;
    } else e.preventDefault();
  } else if (e.key === "s") {
    if (prevS >= 0) {
      currentS--;
      nextS--;
      prevS--;

      slideThree.remove();
      slideTwo.classList.add("down");
      slideTwo.classList.remove("middle");
      slideTwo.setAttribute("data-index", nextS.toString());

      slideOne.classList.add("middle");
      slideOne.classList.remove("up");
      slideOne.setAttribute("data-index", currentS.toString());

      let newSlide = document.createElement("div");
      newSlide.classList.add("up");
      newSlide.setAttribute("data-index", prevS.toString());
      newSlide.textContent = `slide ${prevS}`;
      container.append(newSlide);

      slideOne = document.querySelector(".up") as HTMLDivElement;
      slideTwo = document.querySelector(".middle") as HTMLDivElement;
      slideThree = document.querySelector(".down") as HTMLDivElement;
    }
  }

  // slide 1
  if (currentS === 0) {
    slideTwo.innerHTML = `<h2>نص شعري</h2>
            <h1>لا تعذليه</h1>
            <div class="student-made">
                <h3>اعداد الطالبان</h3>
                <h4>مالك حوشان</h4>
                <h4>محمد خير الشالاتي</h4>
            </div>`;
  }

  //slide 2
  if (currentS === 1) {
    slideTwo.innerHTML = `<div class="image">
          <img src="assets/img/poet.jpg" alt="" />
        </div>
        <div class="text">
          تحكي هذه القصيدة قصة الشاعر ابن زريق البغدادي الذي أحب ابنة عمه
          وتزوجها ولكن أصابه ضيق العيش وقلة ذات اليد فخرج من داره لطلب الرزق
          مرارا وتكرارا فلم يحصل ما أراد فعزم على الرحيل من بغداد إلى الاندلس
          فلم ترضى زوجته بذلك وطلبت منه البقاء إلا أنه صر على رأيه وقصد الأمير
          أبا عبد الرحمن الاندلسي ليمدحه فأراد الأمير أن يختبره فأعطاه نزرا
          قليلا فاغتم ابن زريق هذه لهذا العطاء وقال "إنا لله وإنا إليه راجعون,
          سلكت البراري والقفار, والمهامه والبحار إلى هذا الرجل فأعطاني هذا
          العطاء النزر" فانكسرت نفسه وانعزل في الخان الذي نزل فيه واغنم وأصابه
          المرض وانشغل عنه الأمير أياما ثم طلبه فوجدوه في الخان الذي نزل به
          ميتا, وعنده رأسه رقعة مكتوب فيها هذه القصيدة
        </div>`;
  }
});

let currentS: number = 0;
let nextS: number = 1;
let prevS: number = -1;

let test = [1, 2, 3, 4, 5, 6, 7];

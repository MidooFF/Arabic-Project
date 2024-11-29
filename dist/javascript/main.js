"use strict";
const body = document.body;
const container = document.querySelector(".container");
let slideOne = document.querySelector(".up");
let slideTwo = document.querySelector(".middle");
let slideThree = document.querySelector(".down");
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
            slideOne = document.querySelector(".up");
            slideTwo = document.querySelector(".middle");
            slideThree = document.querySelector(".down");
        }
        else
            e.preventDefault();
    }
    else if (e.key === "s") {
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
            slideOne = document.querySelector(".up");
            slideTwo = document.querySelector(".middle");
            slideThree = document.querySelector(".down");
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
    //slide 3
    if (currentS === 2) {
        slideTwo.innerHTML = `
    <div class="image">
          <img
            src="assets/img/An Arabian man in the year 1029 saying goodbye to his friends because he is travelling.jpg"
            alt=""
          />
        </div>
        <div class="text">
        حفل الأدب العربي منذ القديم بقصص الشباب الذين كانو يهجرون
        الوطن طلبا للرزق أو العيش الكريم,لكن الديار وأهلها يبقيان موطن
        الروح ومسكن الحب والشوق الذي لا ينقطع, والشاعر ابن زريق أحد الذين
        ارتحلو في طلب الرزق, ومات في
        بلاد الغربة إثر خيبة أمله في تحقيق ما يبتغيه</div>`;
    }
    if (currentS === 3) {
        slideTwo.innerHTML = `  <h2>لا تعذليه</h2>
        <div class="poem">
          <div class="row1">
            <h3>لا تَعذَلِيه فَإِنَّ العَذلَ يُولِعُهُ</h3>
            <h3>يَكفِيهِ مِن لَوعَةِ التَشتِيتِ أَنَّ لَهُ</h3>
            <h3>كَأَنَّما هُوَ فِي حِلِّ وَمُرتحلٍ</h3>
            <h3>تأبى المطامعُ إلا أن تُجَشّمه</h3>
            <h3>اِستَودِعُ اللَهَ فِى بَغدادَ لِى قَمَراً</h3>
            <h3>وَدَّعتُهُ وَبوُدّى لَو يُوَدِّعُنِي</h3>
            <h3>وَكَم تَشبَّثَ بى يَومَ الرَحيلِ ضُحَىً</h3>
            <h3>لا أَكُذب اللَهَ ثوبُ الصَبرِ مُنخَرقٌ</h3>
            <h3>رُزِقتُ مُلكاً فَلَم أَحسِن سِياسَتَهُ</h3>
            <h3>بِاللَهِ يا مَنزِلَ العَيشِ الَّذى دَرَست</h3>
            <h3>هَل الزَمانُ مَعِيدُ فِيكَ لَذَّتُنا</h3>
            <h3>عِلماً بِأَنَّ اِصطِباري مُعقِبُ فَرَجاً</h3>
            <h3>عَسى اللَيالي الَّتى أَضنَت بِفُرقَتَنا</h3>
          </div>
          <div class="row2">
            <h3>قَد قَلتِ حَقاً وَلَكِن لَيسَ يَسمَعُهُ</h3>
            <h3>مِنَ النَوى كُلَّ يَومٍ ما يُروعُهُ</h3>
            <h3>مُوَكَّلٍ بِفَضاءِ اللَهِ يَذرَعُهُ</h3>
            <h3>للرزق كداً وكم ممن يودعُهُ</h3>
            <h3>بِالكَرخِ مِن فَلَكِ الأَزرارَ مَطلَعُهُ</h3>
            <h3>صَفوَ الحَياةِ وَأَنّى لا أَودعُهُ</h3>
            <h3>وَأَدمُعِي مُستَهِلّاتٍ وَأَدمُعُهُ</h3>
            <h3>عَنّى بِفُرقَتِهِ لَكِن أَرَقِّعُهُ</h3>
            <h3>وَكُلُّ مَن لا يُسُوسُ المُلكَ يَخلَعُهُ</h3>
            <h3>آثارُهُ وَعَفَت مُذ بِنتُ أَربُعُهُ</h3>
            <h3>أَم اللَيالِي الَّتي أَمضَتهُ تُرجِعُهُ</h3>
            <h3>فَأَضيَقُ الأَمرِ إِن فَكَّرتَ أَوسَعُهُ</h3>
            <h3>جِسمي سَتَجمَعُنِي يَوماً وَتَجمَعُهُ</h3>
          </div>
        </div>`;
    }
});
let currentS = 0;
let nextS = 1;
let prevS = -1;
let test = [1, 2, 3, 4, 5, 6, 7];

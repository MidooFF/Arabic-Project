"use strict";
const body = document.body;
const container = document.querySelector(".container");
let slideOne = document.querySelector(".up");
let slideTwo = document.querySelector(".middle");
let slideThree = document.querySelector(".down");
class GetHouse {
    constructor(house, words, explain, idea, img) {
        this.house = house;
        this.words = words;
        this.explain = explain;
        this.idea = idea;
        this.img = img;
    }
}
body.addEventListener("keypress", function (e) {
    if (e.key === "w") {
        if (nextS < houses.length + 5) {
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
            src="assets/img/intro.jpg"
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
        <div class="row0">
        <h3>1.</h3>
<h3>2.</h3>
<h3>3.</h3>
<h3>4.</h3>
<h3>5.</h3>
<h3>6.</h3>
<h3>7.</h3>
<h3>8.</h3>
<h3>9.</h3>
<h3>10.</h3>
<h3>11.</h3>
<h3>12.</h3>
<h3>13.</h3>
        </div>
          <div class="row1">
            <h3>لا تَعذَلِيه فَإِنَّ العَذلَ يُولِعُهُ</h3>
            <h3>يَكفِيهِ مِن لَوعَةِ التَشتِيتِ أَنَّ لَهُ</h3>
            <h3>كَأَنَّما هُوَ فِي حِلِّ وَمُرتحلٍ</h3>
            <h3>تأبى المطامعُ إلا أن تُجَشّمه</h3>
            <h3>اِستَودِعُ اللَهَ فِى بَغدادَ لِى قَمَراً</h3>
            <h3>وَدَّعتُهُ وَبوُدّي لَو يُوَدِّعُنِي</h3>
            <h3>وَكَم تَشبَّثَ بي يَومَ الرَحيلِ ضُحَىً</h3>
            <h3>لا أَكُذب اللَهَ ثوبُ الصَبرِ مُنخَرقٌ</h3>
            <h3>رُزِقتُ مُلكاً فَلَم أَحسِن سِياسَتَهُ</h3>
            <h3>بِاللَهِ يا مَنزِلَ العَيشِ الَّذي دَرَست</h3>
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
            <h3>صَفوَ الحَياةِ وَأَنّي لا أَودعُهُ</h3>
            <h3>وَأَدمُعِي مُستَهِلّاتٍ وَأَدمُعُهُ</h3>
            <h3>عَنّي بِفُرقَتِهِ لَكِن أَرَقِّعُهُ</h3>
            <h3>وَكُلُّ مَن لا يُسُوسُ المُلكَ يَخلَعُهُ</h3>
            <h3>آثارُهُ وَعَفَت مُذ بِنتُ أَربُعُهُ</h3>
            <h3>أَم اللَيالِي الَّتي أَمضَتهُ تُرجِعُهُ</h3>
            <h3>فَأَضيَقُ الأَمرِ إِن فَكَّرتَ أَوسَعُهُ</h3>
            <h3>جِسمي سَتَجمَعُنِي يَوماً وَتَجمَعُهُ</h3>
          </div>
        </div>`;
    }
    if (currentS === 17) {
        slideTwo.innerHTML = `
      <h2>انتهى العرض</h2>
      <div class="student-made">
                <h3>اعداد الطالبان</h3>
                <h4>مالك حوشان</h4>
                <h4>محمد خير الشالاتي</h4>
            </div>
    `;
    }
    if (currentS > 3) {
        let house = houses[currentS - 4];
        let houseDiv = document.createElement("div");
        houseDiv.className = "houseDiv";
        let partOneH2 = document.createElement("h2");
        partOneH2.className = "part-one";
        let partTwoH2 = document.createElement("h2");
        partTwoH2.className = "part-two";
        let partOne = house.house.split(",")[0];
        let partTwo = house.house.split(",")[1];
        partOne = partOne.split(" ");
        partTwo = partTwo.split(" ");
        for (let i = 0; i < partOne.length; i++) {
            let span = document.createElement("span");
            span.innerHTML = partOne[i] + " ";
            if (house.words[0].includes(partOne[i])) {
                span.setAttribute("data-meaning", house.words[1][house.words[0].indexOf(partOne[i])]);
                span.classList.add("have-meaning");
            }
            partOneH2.appendChild(span);
        }
        for (let i = 0; i < partTwo.length; i++) {
            let span = document.createElement("span");
            span.innerHTML = partTwo[i] + " ";
            if (house.words[0].includes(partTwo[i])) {
                span.setAttribute("data-meaning", house.words[1][house.words[0].indexOf(partTwo[i])]);
                span.classList.add("have-meaning");
            }
            partTwoH2.appendChild(span);
        }
        houseDiv.appendChild(partOneH2);
        houseDiv.appendChild(partTwoH2);
        slideTwo.classList.add("house");
        slideTwo.innerHTML = `<div class="image">
    <img src="${house.img}"/>
    </div>
        <div class="text">
          
        <div class="houseDiv">
        ${houseDiv.innerHTML}
        </div>
          <div class="explain">
            <h2>شرح البيت:</h2>
            <p>${house.explain}</p>
          </div>
          <div class="idea">
            <h2>فكرة البيت:</h2>
            <p>${house.idea}</p>
          </div>
          <div class="word-meaning">
            <h2></h2>
            <p></p>
          </div>
        </div>`;
    }
    slideTwo.addEventListener("click", function (e) {
        if (e.target.getAttribute("data-meaning")) {
            let wordH2 = document.querySelector(".middle .text .word-meaning h2");
            let meaningP = document.querySelector(".middle .text .word-meaning p");
            let wordMeaningDiv = document.querySelector(".middle .text .word-meaning");
            wordH2.textContent = e.target.textContent + ":";
            meaningP.textContent = e.target.getAttribute("data-meaning");
            if (wordMeaningDiv.classList.contains("active")) {
                wordMeaningDiv.classList.remove("active");
                wordMeaningDiv.classList.add("active");
            }
            else {
                wordMeaningDiv.classList.add("active");
            }
        }
    });
});
let currentS = 0;
let nextS = 1;
let prevS = -1;
let test = [1, 2, 3, 4, 5, 6, 7];
let houses = [];
houses.push(new GetHouse(" 1.لا تَعذَلِيه فَإِنَّ العَذلَ يُولِعُه,قَد قَلتِ حَقاً وَلَكِن لَيسَ يَسمَعُهُ", [
    ["تَعذَلِيه", "العَذلَ", "يُولِعُه"],
    ["لا تلوميه", "اللوم الشديد المؤلم", "يزيده تعلقا أو يزيده شوقا"],
], `يناجي الشاعر نفسه ويطلب منها ألا تطيل في العتب واللوم لأن العتب يزيد عذابه 
    ويعلم أنها تقول الحق لكنه في حالة صراع بين نداء الروح والواقع`, "صراع الشاعر الشديد بين روحه والواقع الحر", "../../assets/img/house1 (2).jpg"));
houses.push(new GetHouse(" 2.يَكفِيهِ مِن لَوعَةِ التَشتِيتِ أَنَّ لَهُ,مِنَ النَوى كُلَّ يَومٍ ما يُروعُهُ", [
    ["التَشتِيتِ", "النَوى", "يُروعُهُ"],
    ["ألم الفراق", "البعد", "يخيفه"],
], `يكفيه من الحزن والهم تلك المخاوف التي يعاني منها أثناء سفره وترحاله
    ويضاف عليها بعده عن محبوبته وما كان هذا إلا ليزيده هما`, "مخاوف البعد والتشتت من الغربة", "../../assets/img/house2.jpg"));
houses.push(new GetHouse(" 3.كَأَنَّما هُوَ فِى حِلِّ وَمُرتحلٍ,مُوَكَّلٍ بِفَضاءِ اللَهِ يَذرَعُهُ", [
    ["حِلِّ", "وَمُرتحلٍ", "يَذرَعُهُ"],
    ["إقامة", "رحيل", "يقيسه بسرعة"],
], `يبين الشاعر أنه أصبح دائم الترحال لا يستقر في مكان ما وكأنه موكل 
    بقطع بقاع الأرض ذهابا و أيابا على الدوام`, "ترحال الشاعر الدائم", "../../assets/img/house3.jpg"));
houses.push(new GetHouse(" 4.تأبى المطامعُ إلا أن تُجَشّمه,للرزق كداً وكم ممن يودعُهُ", [
    ["تُجَشّمه", "كداً"],
    ["تثقله", "تعبا"],
], `تفرض عليه حاجاته ورغباته أن يتكلف التعب والمشقة وراء سعييه لرغد العيش, 
    فما أكثر من ودعهم من أحبائه`, "سعي الشاعر الدائم لطلب الرزق", "../../assets/img/house4.jpg"));
houses.push(new GetHouse(" 5.اِستَودِعُ اللَهَ فِي بَغدادَ لِي قَمَراً,بِالكَرخِ مِن فَلَكِ الأَزرارَ مَطلَعُهُ", [
    ["بِالكَرخِ", "الأَزرارَ"],
    ["حي من أياء بغداد", "النجوم"],
], `لتكن في رعاية الله زوجتي التي تقيم بالكرخ في بغداد وكأن وجهها قمر
    في طلتها يشعشع نورا وسط نجوم السماء التي تزينه`, "استوداع المحبوبة برعاية الله في الوطن", "../../assets/img/house5.jpg"));
houses.push(new GetHouse(" 6.وَدَّعتُهُ وَبوُدّي لَو يُوَدِّعُنِي,بصَفوَ الحَياةِ وَأَنّي لا أَودعُهُ", [
    ["بصَفوَ", "أَودعُهُ"],
    ["رغد", "أفارقه"],
], `ودت لو أنني في لحظة الفراق أفارق رغد الحياة وصفاء الأيام ولا أودع زوجتي 
    ولا أصل إللى لحظة الوداع الأليمة هذه`, "تمني الشاعر عدم الفراق", "../../assets/img/house6.jpg"));
houses.push(new GetHouse(" 7.وَكَم تَشبَّثَ بي يَومَ الرَحيلِ ضُحَىً,وَأَدمُعِي مُستَهِلّاتٍ وَأَدمُعُهُ", [
    ["تَشبَّثَ", "مُستَهِلّاتٍ"],
    ["تمسك وتعلق", "متدفقات"],
], `كثيرا ما تمسكت بي زوجتي في كل مرة أهم بها بالسفر فجرا فأبكي وتبكي معي 
    بكاء مريرا `, "تعلق الشاعر الشديد بزوجته", "../../assets/img/house7.jpg"));
houses.push(new GetHouse(" 8.لا أَكُذب اللَهَ ثوبُ الصَبرِ مُنخَرقٌ,عَنّى بِفُرقَتِهِ لَكِن أَرَقِّعُهُ", [
    ["مُنخَرقٌ", "أَرَقِّعُهُ"],
    ["مثقوب", "أخيطه"],
], `أصدق الله تعالى بنفاذ صبري وشدة اشتياقي لزوجتي الحبيبة لكنني أحاول أن 
    ألتزم الصبر و أضبط نفسي `, "الصبر ومحاولة ضبط النفس", "../../assets/img/house8.jpg"));
houses.push(new GetHouse("9.رُزِقتُ مُلكاً فَلَم أَحسِن سِياسَتَهُ,وَكُلُّ مَن لا يُسُوسُ المُلكَ يَخلَعُهُ", [
    ["سِياسَتَهُ", "يَخلَعُهُ"],
    ["إدارته", "يتركه وينفك عنه"],
], `وهبني الله نعمة وملكا لم أستطع أن أحافظ عليهما وكل من لا يقدر النعمة تزول 
    عنه ويخسرها`, "زوال النعم عن الشاعر", "../../assets/img/house9.jpg"));
houses.push(new GetHouse(" 10.بِاللَهِ يا مَنزِلَ العَيشِ الَّذي دَرَست,آثارُهُ وَعَفَت مُذ بِنتُ أَربُعُهُ", [
    ["بِنتُ", "أَربُعُهُ"],
    ["ابتعدت", "المنازل والديار"],
], `لك الله يا دارا كنا قد أقمنا فيها, والآن قد اندثرت معالمها وانمحت  
    لما غادرتها وابتعدت عنها `, "مناشدة الديار التي فارقها الشاعر", "../../assets/img/house10.jpg"));
houses.push(new GetHouse(" 11.هَل الزَمانُ مَعِيدُ فِيكَ لَذَّتُنا,أَم اللَيالِي الَّتى أَمضَتهُ تُرجِعُهُ", [["تُرجِعُهُ"], ["نعيده"]], `هل من الممكن أن يعود بنا الزمان إلى تلك الأيام الهنيئة التي عشناها فيكي 
    أم أن الليالي قد تعيد إلينا تلك الأيام الهنيئة`, "تمني الشاعر عودة الأيام الجميلة", "../../assets/img/house11.jpg"));
houses.push(new GetHouse(" 12.عِلماً بِأَنَّ اِصطِباري مُعقِبُ فَرَجاً,فَأَضيَقُ الأَمرِ إِن فَكَّرتَ أَوسَعُهُ", [
    ["اِصطِبارى", "مُعقِبُ"],
    ["الصبر", "متبع, أي تتابع الأشياء"],
], `و أنا على يقين أن مكافئة صبري وضبط نفسي هي الفرج والسرور فمهما اشتدت 
    وضاقت علي الأمور فإذا ما تأملناها قليلا سنجد لها الحلول`, "توقع الشاعر للفرج والأمل", "../../assets/img/house12.jpg"));
houses.push(new GetHouse(" 13.عَسى اللَيالي الَّتى أَضنَت بِفُرقَتَنا,جِسمي سَتَجمَعُنِي يَوماً وَتَجمَعُهُ", [["أَضنَت"], ["أضعفت"]], `لعل الأيام التي أضعفت جسدي وأنهكته أن تجمعني يوما مع زوجتي في لقاء قريب `, "أمل الشاعر في لقاء زوجته", "../../assets/img/house13.jpg"));

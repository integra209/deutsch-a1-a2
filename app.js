const lessons = [
 {title:"Повседневная жизнь",tag:"ЛЕКСИКА · ALLTAG",desc:"10 полезных слов о ежедневных делах.",words:[
 ["aufstehen","вставать","Ich stehe um 7 Uhr auf."],["das Frühstück, -e","завтрак","Das Frühstück ist fertig."],["die Mahlzeit, -en","приём пищи","Das ist eine warme Mahlzeit."],["einkaufen","делать покупки","Ich gehe heute einkaufen."],["der Einkauf, -̈e","покупка","Der Einkauf dauert nicht lange."],["kochen","готовить","Am Abend koche ich Suppe."],["die Wohnung, -en","квартира","Meine Wohnung ist hell."],["aufräumen","наводить порядок","Ich räume mein Zimmer auf."],["müde","уставший","Nach der Arbeit bin ich müde."],["später","позже","Wir sprechen später."]],
 recall:[["das Haus","дом"],["lernen","учить(ся)"],["heute","сегодня"],["die Arbeit","работа"],["trinken","пить"]],
 tasks:[["Я встаю в 8 часов.","Ich stehe um 8 Uhr auf."],["Сегодня я иду за покупками.","Heute gehe ich einkaufen."],["Я очень устал.","Ich bin sehr müde."],["Я готовлю завтрак.","Ich mache das Frühstück."],["Позже я убираю квартиру.","Später räume ich die Wohnung auf."]],
 quiz:[["Ich bin sehr ____.","müde"],["Ich ____ um 7 Uhr auf.","stehe"],["Heute gehe ich ____.","einkaufen"],["Ich räume die ____ auf.","Wohnung"],["Das ____ ist um 8 Uhr.","Frühstück"]]},
 {title:"В городе",tag:"ЛЕКСИКА · IN DER STADT",desc:"Слова, которые пригодятся на улице и в поездке.",words:[
 ["die Straße, -n","улица","Die Straße ist breit."],["die Kreuzung, -en","перекрёсток","An der Kreuzung links."],["der Bahnhof, -̈e","вокзал","Der Bahnhof ist in der Nähe."],["die Haltestelle, -n","остановка","Wo ist die Haltestelle?"],["der Fahrplan, -̈e","расписание","Ich sehe den Fahrplan."],["einsteigen","садиться в транспорт","Wir steigen hier ein."],["aussteigen","выходить из транспорта","Ich steige am Markt aus."],["geradeaus","прямо","Gehen Sie geradeaus."],["links","налево","Dann gehen Sie links."],["rechts","направо","Die Apotheke ist rechts."]],
 recall:[["aufstehen","вставать"],["das Frühstück","завтрак"],["einkaufen","делать покупки"],["müde","уставший"],["später","позже"]],
 tasks:[["Где находится вокзал?","Wo ist der Bahnhof?"],["Идите прямо.","Gehen Sie geradeaus."],["Я выхожу здесь.","Ich steige hier aus."],["Остановка рядом.","Die Haltestelle ist in der Nähe."],["Поверните налево.","Gehen Sie links."]],
 quiz:[["Der ____ ist nicht weit.","Bahnhof"],["Gehen Sie ____.","geradeaus"],["Ich steige hier ____.","aus"],["Die ____ ist dort.","Haltestelle"],["Dann gehen Sie ____.","rechts"]]},
 {title:"Еда и покупки",tag:"ЛЕКСИКА · ESSEN",desc:"Заказываем еду и покупаем продукты.",words:[
 ["das Gemüse","овощи","Ich kaufe frisches Gemüse."],["das Obst","фрукты","Obst ist gesund."],["das Brot, -e","хлеб","Das Brot ist frisch."],["die Flasche, -n","бутылка","Eine Flasche Wasser, bitte."],["das Angebot, -e","предложение, акция","Der Käse ist im Angebot."],["bezahlen","платить","Kann ich mit Karte bezahlen?"],["die Rechnung, -en","счёт","Die Rechnung, bitte."],["lecker","вкусный","Die Suppe ist lecker."],["teuer","дорогой","Das ist mir zu teuer."],["günstig","недорогой, выгодный","Heute ist das Gemüse günstig."]],
 recall:[["die Straße","улица"],["der Bahnhof","вокзал"],["die Haltestelle","остановка"],["links","налево"],["geradeaus","прямо"]],
 tasks:[["Я покупаю свежие овощи.","Ich kaufe frisches Gemüse."],["Счёт, пожалуйста.","Die Rechnung, bitte."],["Это слишком дорого.","Das ist zu teuer."],["Можно оплатить картой?","Kann ich mit Karte bezahlen?"],["Хлеб очень вкусный.","Das Brot ist sehr lecker."]],
 quiz:[["Ich kaufe ____ Obst.","frisches"],["Die Suppe ist ____.","lecker"],["Kann ich mit Karte ____?","bezahlen"],["Die ____, bitte.","Rechnung"],["Das ist sehr ____.","teuer"]]},
 {title:"Грамматика: отделяемые глаголы",tag:"GRAMMATIK · A1",desc:"Небольшая грамматическая тема и практика.",grammar:true,words:[
 ["aufstehen","вставать","Ich stehe früh auf."],["einkaufen","делать покупки","Ich kaufe am Samstag ein."],["anrufen","звонить","Ich rufe dich später an."],["aufräumen","убирать","Sie räumt das Zimmer auf."],["fernsehen","смотреть телевизор","Wir sehen am Abend fern."],["mitkommen","идти вместе","Kommst du heute mit?"],["zumachen","закрывать","Mach bitte die Tür zu."],["aufmachen","открывать","Ich mache das Fenster auf."],["abholen","забирать","Er holt seine Tochter ab."],["anfangen","начинать","Der Film fängt um acht an."]],
 recall:[["das Gemüse","овощи"],["bezahlen","платить"],["die Rechnung","счёт"],["lecker","вкусный"],["günstig","недорогой"]],
 tasks:[["Я звоню тебе вечером.","Ich rufe dich am Abend an."],["Она убирает комнату.","Sie räumt das Zimmer auf."],["Мы смотрим телевизор.","Wir sehen fern."],["Фильм начинается в восемь.","Der Film fängt um acht an."],["Открой, пожалуйста, окно.","Mach bitte das Fenster auf."]],
 quiz:[["Ich ____ dich später an. (anrufen)","rufe"],["Sie räumt das Zimmer ____.","auf"],["Wir sehen am Abend ____.","fern"],["Der Film ____ um acht an.","fängt"],["Mach bitte die Tür ____.","zu"]]}
];
const stateKey="deutsch-a1a2-v1";
let state=JSON.parse(localStorage.getItem(stateKey)||'{"done":[],"completedCount":0,"known":[],"difficult":[],"lastDate":"","streak":0}');
let lessonIndex=0,step=0,answersChecked=false;
const $=id=>document.getElementById(id);
function save(){localStorage.setItem(stateKey,JSON.stringify(state));renderStats()}
function today(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`}
function renderStats(){
 $("lessonsDone").textContent=state.completedCount||state.done.length;
 $("wordsKnown").textContent=state.known.length;
 $("streak").innerHTML=`${state.streak} <small>дней</small>`;
 const idx=(state.completedCount||state.done.length)%lessons.length; const l=lessons[idx];
 $("lessonNumber").textContent=`УРОК ${String(idx+1).padStart(2,"0")}`;
 $("lessonTag").textContent=l.tag;$("lessonTitle").textContent=l.title;$("lessonDescription").textContent=l.desc;
 $("lessonProgress").style.width=state.done.includes(idx)?"100%":"0%";
 $("lessonStatus").textContent=state.done.includes(idx)?"Сегодняшний урок завершён":"Можно начинать";
}
function openLesson(){lessonIndex=(state.completedCount||state.done.length)%lessons.length;step=0;answersChecked=false;renderStep();$("lessonModal").hidden=false;document.body.style.overflow="hidden"}
function closeLesson(){$("lessonModal").hidden=true;document.body.style.overflow=""}
function renderStep(){
 const l=lessons[lessonIndex];$("modalStep").textContent=`ШАГ ${step+1} ИЗ 4`;$("modalProgress").style.width=`${(step+1)*25}%`;
 $("backBtn").disabled=step===0;$("nextBtn").textContent=step===3?"Завершить урок ✓":"Далее →";
 let html="";
 if(step===0){
  html=`<h2 class="step-title">Сначала вспомним</h2><p class="step-desc">Переведи слова на немецкий. Вспоминай самостоятельно — это помогает запоминанию.</p><div class="exercise-list">${l.recall.map((x,i)=>`<div class="exercise"><label>${i+1}. ${x[0]}</label><input data-kind="recall" data-i="${i}" placeholder="Перевод на немецком" autocomplete="off"></div>`).join("")}</div>`;
 }else if(step===1){
  html=`<h2 class="step-title">Новые слова</h2><p class="step-desc">Прочитай слова, обрати внимание на артикли и примеры. Нажми «Знаю», если слово уже знакомо.</p><div class="vocab-list">${l.words.map((w,i)=>`<article class="vocab-item"><div class="vocab-top"><span class="vocab-word">${w[0]}</span><button data-known="${i}">${state.known.includes(w[0])?"✓ знаю":"+ знаю"}</button></div><div class="vocab-translation">${w[1]}</div><div class="vocab-example">${w[2]}</div></article>`).join("")}</div>`;
 }else if(step===2){
  const grammar=l.grammar?`<div class="grammar-box"><b>Правило.</b> У отделяемых глаголов приставка в простом повествовательном предложении уходит в конец: <b>aufstehen → Ich stehe um 7 Uhr auf.</b><br>Спрягаем основную часть глагола, а приставку ставим после остальных слов. В вопросе без вопросительного слова глагол стоит первым: <b>Stehst du früh auf?</b></div><br>`:"";
  html=`<h2 class="step-title">${l.grammar?"Немного грамматики":"Применяем новые слова"}</h2><p class="step-desc">${l.grammar?"Отделяемая приставка не теряется — она перемещается в конец предложения.":"Переведи предложения на немецкий. Не стремись к дословному переводу — важен естественный немецкий."}</p>${grammar}<div class="exercise-list">${l.tasks.map((x,i)=>`<div class="exercise"><label>${i+1}. ${x[0]}</label><input data-kind="task" data-i="${i}" placeholder="Твой вариант на немецком" autocomplete="off"></div>`).join("")}</div>`;
 }else{
  html=`<h2 class="step-title">Финальная проверка</h2><p class="step-desc">Вставь пропущенное слово или часть глагола.</p><div class="exercise-list">${l.quiz.map((x,i)=>`<div class="exercise"><label>${i+1}. ${x[0]}</label><input data-kind="quiz" data-i="${i}" placeholder="Ответ" autocomplete="off"></div>`).join("")}</div><div id="checkResult"></div>`;
 }
 $("lessonContent").innerHTML=html;
 document.querySelectorAll("[data-known]").forEach(b=>b.addEventListener("click",()=>{const w=l.words[+b.dataset.known][0];state.known=state.known.includes(w)?state.known.filter(x=>x!==w):[...state.known,w];save();b.textContent=state.known.includes(w)?"✓ знаю":"+ знаю"}));
 document.querySelectorAll("input").forEach(inp=>{const k=`${lessonIndex}-${step}-${inp.dataset.kind}-${inp.dataset.i}`;inp.value=sessionStorage.getItem(k)||"";inp.addEventListener("input",()=>sessionStorage.setItem(k,inp.value))});
}
function normalize(s){return s.toLowerCase().trim().replace(/[.,!?;:]/g,"").replace(/\s+/g," ").replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss")}
function checkStep(){
 const l=lessons[lessonIndex];let inputs=[...document.querySelectorAll("#lessonContent input")];let correct=0;
 inputs.forEach(inp=>{
  const i=+inp.dataset.i,kind=inp.dataset.kind;
  let expected=kind==="recall"?l.recall[i][1]:kind==="task"?l.tasks[i][1]:l.quiz[i][1];
  const ok=normalize(inp.value)===normalize(expected);
  if(ok)correct++;
  let fb=inp.parentElement.querySelector(".feedback");if(!fb){fb=document.createElement("div");fb.className="feedback";inp.parentElement.append(fb)}
  fb.className=`feedback ${ok?"correct":"incorrect"}`;fb.textContent=ok?"Верно ✓":`Пока не совсем. Ответ: ${expected}`;
  if(!ok&&kind==="quiz"){const w=l.words.find(x=>normalize(x[0]).includes(normalize(expected)));if(w&&!state.difficult.includes(w[0]))state.difficult.push(w[0])}
 });
 if(step===3){$("checkResult").innerHTML=`<div class="answer-summary">Результат: <b>${correct} из ${inputs.length}</b>. ${correct===inputs.length?"Отлично! Alles richtig!":"Ошибки — это подсказка, что стоит повторить."}</div>`}
 answersChecked=true;save();return correct;
}
function next(){
 if(step===0||step===2||step===3){if(!answersChecked){checkStep();if(step!==3){$("nextBtn").textContent="Продолжить →";return}}}
 if(step<3){step++;answersChecked=false;renderStep();return}
 state.done.push(lessonIndex);state.completedCount=(state.completedCount||0)+1;
 const d=today();if(state.lastDate!==d){const yd=new Date();yd.setDate(yd.getDate()-1);const y=`${yd.getFullYear()}-${String(yd.getMonth()+1).padStart(2,"0")}-${String(yd.getDate()).padStart(2,"0")}`;state.streak=state.lastDate===y?state.streak+1:1;state.lastDate=d}
 save();closeLesson();toast("Урок завершён. Sehr gut!");renderStats();
}
function back(){if(step>0){step--;answersChecked=false;renderStep()}}
function toast(msg){$("toast").textContent=msg;$("toast").classList.add("show");setTimeout(()=>$("toast").classList.remove("show"),2300)}
function review(){
 const list=state.difficult.length?state.difficult:lessons.flatMap(l=>l.words.map(w=>w[0])).filter(w=>!state.known.includes(w)).slice(0,10);
 if(!list.length){toast("Пока нет слов для повторения — отлично!");return}
 const found=lessons.flatMap(l=>l.words).filter(w=>list.includes(w[0]));
 $("lessonContent").innerHTML=`<h2 class="step-title">Повторение слов</h2><p class="step-desc">Вспомни перевод, затем нажми на слово, чтобы увидеть подсказку.</p><div class="vocab-list">${found.map(w=>`<article class="vocab-item"><div class="vocab-word">${w[0]}</div><button class="reveal" data-reveal="${encodeURIComponent(w[0])}">Показать перевод</button><div class="vocab-translation" hidden>${w[1]}</div><div class="vocab-example">${w[2]}</div></article>`).join("")}</div>`;
 $("modalStep").textContent="ПОВТОРЕНИЕ";$("modalProgress").style.width="100%";$("backBtn").disabled=true;$("nextBtn").textContent="Закрыть";$("nextBtn").onclick=closeLesson;$("lessonModal").hidden=false;document.body.style.overflow="hidden";
 document.querySelectorAll(".reveal").forEach(b=>b.addEventListener("click",()=>{b.nextElementSibling.hidden=false;b.textContent="Перевод"}));
}
$("startBtn").addEventListener("click",openLesson);$("continueBtn").addEventListener("click",openLesson);$("closeModal").addEventListener("click",closeLesson);$("backBtn").addEventListener("click",back);$("nextBtn").addEventListener("click",()=>{if($("modalStep").textContent==="ПОВТОРЕНИЕ"){closeLesson();$("nextBtn").onclick=null;return}next()});$("reviewBtn").addEventListener("click",review);
renderStats();
let installEvent;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();installEvent=e;$("installBtn").hidden=false});
$("installBtn").addEventListener("click",async()=>{if(!installEvent)return;installEvent.prompt();await installEvent.userChoice;installEvent=null;$("installBtn").hidden=true});
if("serviceWorker" in navigator && location.protocol.startsWith("http"))navigator.serviceWorker.register("./sw.js").catch(()=>{});

(()=>{"use strict";const t=new class{constructor(){this.body=document.querySelector("body")}buildForm(){this.body.insertAdjacentHTML("afterbegin",'\n    <div class="widget">\n      <div class="card">\n        <img src="assets/img/visa.png" class="visa">\n        <img src="assets/img/mastercard.png" class="mastercard">\n        <img src="assets/img/mir.png" class="mir">\n      </div>\n      <form>\n        <input type="text">\n        <button type="submit">Проверить карту</button>\n      </form>\n    </div>\n    ')}statusCheckLuhn(t){"passed"===t&&this.body.insertAdjacentHTML("beforeend",'<div class="luhn">✅  Проверка луна</div>'),"false"===t&&this.body.insertAdjacentHTML("beforeend",'<div class="luhn">❌ Проверка луна</div>')}};t.buildForm();const s=new class{constructor(){this.item=null}inputValue(){this.checkLengthInputValue(document.querySelector("input").value)}checkLengthInputValue(t){t=String(t).replace(/\D/g,""),/\d{13,16}/.test(t)&&(this.item=Number(t))}checkCard(t){return/^(4)/.test(t)?"visa":/^(220[0-4])/.test(t)?"mir":!!/(^(5[1-5])|^2221|^2720)/.test(t)&&"mastercard"}disableImg(t){this.icons=document.querySelectorAll(".card img"),!1!==t?this.icons.forEach((s=>{s.classList.contains(t)||s.classList.add("disable")})):this.icons.forEach((t=>{t.classList.contains("disable")&&t.classList.remove("disable")}))}luhn(){return null!==this.item&&function(t){if(/[^0-9-\s]+/.test(t))return!1;let s=0,e=!1;const n=t.toString();for(let t=n.length-1;t>=0;t--){const i=n.charAt(t);let c=parseInt(i,10);e&&(c*=2)>9&&(c-=9),s+=c,e=!e}return 0!==s&&(0!==s?s%10==0:void 0)}(this.item)}};let e;document.addEventListener("input",(()=>{s.item=null,clearTimeout(e),e=setTimeout((()=>{s.inputValue(),s.disableImg(s.checkCard(s.item))}),1e3)})),document.addEventListener("submit",(e=>{e.preventDefault(),s.luhn()?t.statusCheckLuhn("passed"):t.statusCheckLuhn("false")}))})();
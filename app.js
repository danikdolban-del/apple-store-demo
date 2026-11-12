// Демо-данные витрины. Названия, цены, характеристики, остатки и сроки легко заменить здесь.
const CONFIG = {
  city: "[ГОРОД]",
  address: "[АДРЕС]",
  phone: "[ТЕЛЕФОН]",
  messenger: "[ССЫЛКА НА МЕССЕНДЖЕР]"
};

const PRODUCTS = [
  {
    id:"iphone-13-pro",type:"iphone",category:"iPhone",model:"iPhone 13 Pro",image:"assets/iphone.jpg",kind:"phone",
    memory:"256 ГБ",color:"Графитовый",battery:89,condition:"Очень хорошее",price:1540,updated:8,
    screen:"6,1″ · OLED",body:"На рамке есть две малозаметные точки. Экран без заметных царапин. Осмотр показан для примера.",
    package:"Кабель USB‑C, нейтральная коробка (пример)",warranty:"90 дней · пример",stock:"Демо: 2 шт. (примерно)",
    checks:"Экран, камеры, Face ID, связь, микрофон и динамики — пример результата проверки.",
    variants:[{memory:"256 ГБ",color:"Графитовый",price:1540},{memory:"512 ГБ",color:"Золотой",price:1690}]
  },
  {
    id:"iphone-13",type:"iphone",category:"iPhone",model:"iPhone 13",image:"assets/iphone-blue.png",kind:"phone-studio",
    memory:"128 ГБ",color:"Синий",battery:92,condition:"Отличное",price:1260,updated:7,
    screen:"6,1″ · OLED",body:"На корпусе заметных следов нет. Экран чистый, по краю есть лёгкая потёртость (пример).",
    package:"Кабель USB‑C (пример)",warranty:"90 дней · пример",stock:"Демо: 1 шт. (примерно)",
    checks:"Камеры, Face ID, звук, связь и кнопки — пример результата проверки.",
    variants:[{memory:"128 ГБ",color:"Синий",price:1260},{memory:"256 ГБ",color:"Синий",price:1390}]
  },
  {
    id:"iphone-14",type:"iphone",category:"iPhone",model:"iPhone 14",image:"assets/iphone.jpg",kind:"phone",
    memory:"128 ГБ",color:"Светлая звезда",battery:87,condition:"Очень хорошее",price:1490,updated:6,
    screen:"6,1″ · OLED",body:"На боковой грани видна небольшая точка. Экран и камеры без видимых повреждений (пример).",
    package:"Кабель, коробка магазина (пример)",warranty:"90 дней · пример",stock:"Демо: 2 шт. (примерно)",
    checks:"True Tone, камеры, Face ID, микрофон и связь — пример результата проверки.",
    variants:[{memory:"128 ГБ",color:"Светлая звезда",price:1490},{memory:"256 ГБ",color:"Голубой",price:1650}]
  },
  {
    id:"macbook-air-m1",type:"mac",category:"MacBook",model:"MacBook Air 13″ M1",image:"assets/macbook.jpg",kind:"mac",
    memory:"256 ГБ",color:"Серебристый",battery:88,condition:"Очень хорошее",price:2390,updated:5,
    screen:"13,3″ · Retina",body:"На крышке лёгкие следы использования, экран чистый. Клавиатура без залипаний (пример).",
    package:"Блок питания и кабель (пример)",warranty:"60 дней · пример",stock:"Демо: 1 шт. (примерно)",
    checks:"Дисплей, порты, клавиши, камера, динамики и зарядка — пример результата проверки.",
    variants:[{memory:"256 ГБ",color:"Серебристый",price:2390},{memory:"512 ГБ",color:"Космический серый",price:2690}]
  },
  {
    id:"macbook-pro-14",type:"mac",category:"MacBook",model:"MacBook Pro 14″ M1 Pro",image:"assets/macbook.jpg",kind:"mac",
    memory:"512 ГБ",color:"Космический серый",battery:91,condition:"Отличное",price:4190,updated:4,
    screen:"14″ · Liquid Retina XDR",body:"Корпус аккуратный, на нижней крышке едва заметная отметина (пример).",
    package:"Ноутбук и адаптер питания (пример)",warranty:"60 дней · пример",stock:"Демо: 1 шт. (примерно)",
    checks:"Экран, клавиатура, порты, камеры, звук и состояние батареи — пример результата проверки.",
    variants:[{memory:"512 ГБ",color:"Космический серый",price:4190},{memory:"1 ТБ",color:"Серебристый",price:4580}]
  },
  {
    id:"ipad-air-5",type:"ipad",category:"iPad",model:"iPad Air 5",image:"assets/ipad.jpg",kind:"pad",
    memory:"64 ГБ",color:"Серый космос",battery:90,condition:"Очень хорошее",price:1480,updated:3,
    screen:"10,9″ · Liquid Retina",body:"На гранях есть лёгкие следы использования. Дисплей без заметных царапин (пример).",
    package:"Кабель USB‑C (пример)",warranty:"60 дней · пример",stock:"Демо: 2 шт. (примерно)",
    checks:"Сенсор, Touch ID, камеры, динамики, Wi‑Fi и зарядка — пример результата проверки.",
    variants:[{memory:"64 ГБ",color:"Серый космос",price:1480},{memory:"256 ГБ",color:"Звёздный",price:1780}]
  },
  {
    id:"watch-se-2",type:"watch",category:"Apple Watch",model:"Apple Watch SE 2",image:"assets/watch.jpg",kind:"watch",
    memory:"",color:"Чёрный",battery:86,condition:"Очень хорошее",price:590,updated:2,
    screen:"44 мм · GPS",body:"На корпусе малозаметные следы по нижней грани. Стекло чистое (пример).",
    package:"Часы, ремешок, кабель (пример)",warranty:"60 дней · пример",stock:"Демо: 1 шт. (примерно)",
    checks:"Экран, коронка, кнопка, зарядка, микрофон и динамик — пример результата проверки.",
    variants:[{size:"44 мм",color:"Чёрный",price:590},{size:"40 мм",color:"Серебристый",price:560}]
  },
  {
    id:"airpods-pro-2",type:"audio",category:"AirPods",model:"AirPods Pro 2",image:"assets/airpods.jpg",kind:"audio",
    memory:"",color:"Белый",battery:92,condition:"Отличное",price:530,updated:1,
    screen:"USB‑C · шумоподавление",body:"На кейсе есть едва заметная потёртость. Амбушюры заменены перед продажей (пример).",
    package:"Кейс, наушники, кабель, комплект амбушюр (пример)",warranty:"30 дней · пример",stock:"Демо: 2 шт. (примерно)",
    checks:"Шумоподавление, микрофоны, датчики, зарядка кейса и сопряжение — пример результата проверки.",
    variants:[{size:"USB‑C",color:"Белый",price:530},{size:"Lightning",color:"Белый",price:480}]
  }
];

const $ = (selector, root) => (root || document).querySelector(selector);
const $$ = (selector, root) => Array.from((root || document).querySelectorAll(selector));
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[char]));
const priceText = value => new Intl.NumberFormat("ru-BY",{maximumFractionDigits:0}).format(value) + " BYN";
const loadState = (key, fallback) => { try { const value=localStorage.getItem(key); return value?JSON.parse(value):fallback; } catch (_) { return fallback; } };
let favorites = new Set(loadState("verified-shop-demo-v1-favorites",[]));
let cart = loadState("verified-shop-demo-v1-cart",[]);
let currentCategory = "all";
let favoritesOnly = false;
let toastTimer = 0;
let lastFocused = null;

function saveState(){
  try { localStorage.setItem("verified-shop-demo-v1-favorites",JSON.stringify(Array.from(favorites))); localStorage.setItem("verified-shop-demo-v1-cart",JSON.stringify(cart)); } catch(_){}
}
function applyContacts(){
  $$("[data-contact]").forEach(node=>{ const key=node.dataset.contact; if(CONFIG[key]) node.textContent=CONFIG[key]; });
  const phone=String(CONFIG.phone||"").replace(/[^\d+]/g,"");
  const phoneLink=$('[data-contact-link="phone"]');
  if(phoneLink) phoneLink.href=phone.length>6?"tel:"+phone:"#contacts";
  const messenger=$("[data-messenger]");
  const messengerValue=String(CONFIG.messenger||"");
  if(messenger) messenger.href=/^https?:\/\//i.test(messengerValue)?messengerValue:"#contacts";
  $("#footerYear").textContent=String(new Date().getFullYear());
}
function populateFilters(){
  const models=Array.from(new Set(PRODUCTS.map(p=>p.model))).sort();
  const memories=Array.from(new Set(PRODUCTS.flatMap(p=>p.variants.map(v=>v.memory)).filter(Boolean))).sort((a,b)=>parseInt(a)-parseInt(b));
  const colors=Array.from(new Set(PRODUCTS.flatMap(p=>p.variants.map(v=>v.color)))).sort();
  $("#modelFilter").innerHTML='<option value="">Все модели</option>'+models.map(v=>'<option>'+escapeHtml(v)+'</option>').join("");
  $("#memoryFilter").innerHTML='<option value="">Любой объём</option>'+memories.map(v=>'<option>'+escapeHtml(v)+'</option>').join("");
  $("#colorFilter").innerHTML='<option value="">Любой цвет</option>'+colors.map(v=>'<option>'+escapeHtml(v)+'</option>').join("");
  $$("#categoryTabs .category-tab").forEach(tab=>{ if(tab.dataset.category==="all") tab.querySelector("span").textContent=String(PRODUCTS.length); });
}
function categoryTitle(type){ return ({iphone:"iPhone",mac:"MacBook",ipad:"iPad",watch:"Apple Watch",audio:"AirPods"}[type]||"Техника"); }
function categoryClass(type){ return ({iphone:"phone",mac:"mac",ipad:"pad",watch:"watch",audio:"audio"}[type]||"phone"); }
function productCard(product){
  const liked=favorites.has(product.id);
  const batteryText=product.battery?"АКБ "+product.battery+"% · пример":"";
  return '<article class="product-card" data-card="'+escapeHtml(product.id)+'">'+
    '<div class="product-photo photo-'+escapeHtml(product.kind)+'">'+
      '<button class="product-open photo-open" type="button" data-open-product="'+escapeHtml(product.id)+'" aria-label="Подробнее: '+escapeHtml(product.model)+'"><img src="'+escapeHtml(product.image)+'" alt="'+escapeHtml(product.model)+' — фото для примера" loading="lazy"><span class="demo-tag">ПРИМЕР · ДЕМО</span></button>'+
      '<button class="favorite-button" type="button" data-favorite="'+escapeHtml(product.id)+'" aria-label="'+(liked?"Убрать из":"Добавить в")+' избранное: '+escapeHtml(product.model)+'" aria-pressed="'+String(liked)+'"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 8.8c0 5.1-8.5 10.3-8.5 10.3S3.5 13.9 3.5 8.8a4.5 4.5 0 0 1 8.5-2.1 4.5 4.5 0 0 1 8.5 2.1Z"/></svg></button>'+
    '</div><div class="product-info">'+
      '<div class="product-kicker"><span>'+escapeHtml(categoryTitle(product.type))+'</span><span>Состояние · '+escapeHtml(product.condition.toLowerCase())+'</span></div>'+
      '<h3 class="product-title"><button class="product-title-button" type="button" data-open-product="'+escapeHtml(product.id)+'">'+escapeHtml(product.model)+'</button></h3>'+
      '<div class="product-spec">'+escapeHtml(product.memory?product.memory+" · ":"")+escapeHtml(product.color)+" · "+escapeHtml(product.screen)+"</div>"+
      '<div class="product-tags"><span class="product-tag">'+escapeHtml(product.condition)+'</span>'+(batteryText?'<span class="product-tag battery-tag">'+escapeHtml(batteryText)+'</span>':'')+'</div>'+
      '<div class="product-bottom"><span class="product-price">'+priceText(product.price)+'<small>примерная цена</small></span><button class="product-action" type="button" data-add="'+escapeHtml(product.id)+'" aria-label="Добавить '+escapeHtml(product.model)+' в корзину"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></button></div>'+
      '<p class="stock-demo">Демо: наличие указано для примера</p>'+
    '</div></article>';
}
function getFilteredProducts(){
  const query=$("#searchInput").value.trim().toLocaleLowerCase("ru");
  const model=$("#modelFilter").value;
  const memory=$("#memoryFilter").value;
  const color=$("#colorFilter").value;
  const condition=$("#conditionFilter").value;
  const minBattery=Number($("#batteryFilter").value||0);
  const maxPrice=Number($("#priceFilter").value||0);
  let items=PRODUCTS.filter(p=>{
    const variants=p.variants;
    return (currentCategory==="all"||p.type===currentCategory)
      &&(!favoritesOnly||favorites.has(p.id))
      &&(!query||(p.model+" "+p.category+" "+p.color+" "+p.condition+" "+p.memory).toLocaleLowerCase("ru").includes(query))
      &&(!model||p.model===model)
      &&(!memory||variants.some(v=>v.memory===memory))
      &&(!color||variants.some(v=>v.color===color))
      &&(!condition||p.condition===condition)
      &&(!minBattery||p.battery>=minBattery)
      &&(!maxPrice||p.price<=maxPrice);
  });
  const sort=$("#sortSelect").value;
  if(sort==="priceAsc") items.sort((a,b)=>a.price-b.price);
  else if(sort==="priceDesc") items.sort((a,b)=>b.price-a.price);
  else items.sort((a,b)=>b.updated-a.updated);
  return items;
}
function renderProducts(){
  const products=getFilteredProducts();
  $("#productGrid").innerHTML=products.map(productCard).join("");
  $("#emptyState").hidden=products.length!==0;
  $("#productGrid").hidden=products.length===0;
  const count=products.length;
  $("#resultsCount").textContent=count===1?"1 пример":count>=2&&count<=4?count+" примера":count+" примеров";
  $("#favoriteToggle").setAttribute("aria-pressed",String(favoritesOnly));
  $("#favoriteToggle").setAttribute("aria-label",favoritesOnly?"Показать все товары":"Показать избранное");
}
function renderCounts(){
  const count=cart.reduce((total,item)=>total+item.quantity,0);
  $("#cartCount").textContent=String(count);
  $("#mobileCartCount").textContent=String(count);
  $("#favoriteCount").textContent=String(favorites.size);
  $("#mobileFavoriteCount").textContent=String(favorites.size);
}
function showToast(message){
  const toast=$("#toast");
  toast.textContent=message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer=window.setTimeout(()=>toast.classList.remove("is-visible"),2300);
}
function toggleFavorite(id){
  if(favorites.has(id)){ favorites.delete(id); showToast("Убрали из избранного"); }
  else { favorites.add(id); showToast("Добавили в избранное"); }
  saveState(); renderProducts(); renderCounts();
}
function selectedVariant(product,index){
  const safeIndex=Math.max(0,Math.min(Number(index)||0,product.variants.length-1));
  return product.variants[safeIndex];
}
function openProduct(id){
  const product=PRODUCTS.find(p=>p.id===id);
  if(!product) return;
  lastFocused=document.activeElement;
  const options=product.variants.map((variant,index)=>'<option value="'+index+'">'+escapeHtml((variant.memory||variant.size)+" · "+variant.color)+" — "+priceText(variant.price)+'</option>').join("");
  const batteryLabel=product.battery?"Ёмкость аккумулятора · пример":"Состояние аккумулятора · пример";
  const batteryValue=product.battery?product.battery+"%":"проверен";
  $("#productDetail").innerHTML=
    '<div class="detail-layout" data-detail-id="'+escapeHtml(product.id)+'">'+
      '<div class="detail-gallery photo-'+escapeHtml(product.kind)+'"><img class="detail-img-'+escapeHtml(product.kind)+'" src="'+escapeHtml(product.image)+'" alt="'+escapeHtml(product.model)+' — демонстрационное фото"><span class="detail-photo-caption">Фото устройства для примера</span></div>'+
      '<div class="detail-copy"><span class="detail-category">'+escapeHtml(categoryTitle(product.type))+" · демо-товар</span><h2 id=\"detailTitle\">"+escapeHtml(product.model)+'</h2><p class="detail-subtitle">'+escapeHtml(product.screen)+" · "+escapeHtml(product.condition)+'</p>'+
      '<div class="detail-price" id="detailPrice">'+priceText(product.price)+'<small>Примерная цена в BYN</small></div>'+
      '<div class="detail-selects"><label class="field-label" for="variantSelect">Выберите вариант<select id="variantSelect">'+options+'</select></label></div>'+
      '<div class="detail-spec-grid"><div class="spec-cell"><small>Цвет · пример</small><strong id="detailColor">'+escapeHtml(product.color)+'</strong></div><div class="spec-cell"><small>'+escapeHtml(batteryLabel)+'</small><strong>'+escapeHtml(batteryValue)+'</strong></div><div class="spec-cell"><small>Комплектация · пример</small><strong>'+escapeHtml(product.package)+'</strong></div><div class="spec-cell"><small>Гарантия · пример</small><strong>'+escapeHtml(product.warranty)+'</strong></div></div>'+
      '<div class="detail-condition"><strong>Состояние корпуса · '+escapeHtml(product.condition)+'</strong>'+escapeHtml(product.body)+'<br><br><strong>Результат проверки · демо</strong>'+escapeHtml(product.checks)+'</div>'+
      '<div class="detail-add-row"><button class="button button-primary" type="button" data-detail-add="'+escapeHtml(product.id)+'">Добавить в корзину <span aria-hidden="true">＋</span></button><button class="detail-consult" type="button" data-consult>Спросить о товаре</button></div><p class="detail-stock">'+escapeHtml(product.stock)+" · наличие — только пример</p></div></div>";
  $("#variantSelect").addEventListener("change",()=>{
    const variant=selectedVariant(product,$("#variantSelect").value);
    $("#detailPrice").innerHTML=priceText(variant.price)+'<small>Примерная цена в BYN</small>';
    $("#detailColor").textContent=variant.color;
  });
  const dialog=$("#productDialog");
  dialog.showModal(); document.body.classList.add("has-dialog");
  $(".close-button",dialog).focus();
}
function addToCart(id,variantIndex,fromDetail){
  const product=PRODUCTS.find(p=>p.id===id);
  if(!product) return;
  const index=Number(variantIndex)||0;
  const existing=cart.find(item=>item.id===id&&item.variantIndex===index);
  if(existing) existing.quantity+=1;
  else cart.push({id:id,variantIndex:index,quantity:1});
  saveState(); renderCart(); renderCounts();
  if(fromDetail){ $("#productDialog").close(); }
  showToast(product.model+" добавлен в демо-корзину");
}
function renderCart(){
  const count=cart.reduce((sum,item)=>sum+item.quantity,0);
  const total=cart.reduce((sum,item)=>{const p=PRODUCTS.find(prod=>prod.id===item.id);const v=p&&selectedVariant(p,item.variantIndex);return sum+(v?v.price*item.quantity:0);},0);
  $("#cartItemsLabel").textContent=count+" "+(count===1?"товар":count>=2&&count<=4?"товара":"товаров");
  $("#cartTotal").textContent=priceText(total);
  $("#cartEmpty").hidden=count!==0;
  $("#cartSummary").hidden=count===0;
  $("#cartItems").innerHTML=cart.map((item,index)=>{
    const product=PRODUCTS.find(p=>p.id===item.id);
    if(!product) return "";
    const variant=selectedVariant(product,item.variantIndex);
    return '<article class="cart-line" data-line="'+index+'"><div class="cart-line-img photo-'+escapeHtml(product.kind)+'"><img class="cart-img-'+escapeHtml(product.kind)+'" src="'+escapeHtml(product.image)+'" alt="" loading="lazy"></div><div><div class="cart-line-title">'+escapeHtml(product.model)+'</div><div class="cart-line-variant">'+escapeHtml((variant.memory||variant.size)+" · "+variant.color)+'</div><div class="cart-line-price">'+priceText(variant.price*item.quantity)+'</div><div class="quantity-control"><button type="button" data-quantity="-1" data-index="'+index+'" aria-label="Уменьшить количество: '+escapeHtml(product.model)+'">−</button><span>'+item.quantity+'</span><button type="button" data-quantity="1" data-index="'+index+'" aria-label="Увеличить количество: '+escapeHtml(product.model)+'">+</button></div></div><button class="remove-line" type="button" data-remove="'+index+'" aria-label="Удалить '+escapeHtml(product.model)+' из корзины">×</button></article>';
  }).join("");
}
function openCart(){
  lastFocused=document.activeElement;
  renderCart();
  const dialog=$("#cartDialog"); dialog.showModal(); document.body.classList.add("has-dialog");
  $(".close-button",dialog).focus();
}
function openCheckout(){
  if(cart.length===0) return;
  $("#checkoutContent").hidden=false; $("#orderConfirmation").hidden=true; $("#checkoutForm").reset();
  $("#cartDialog").close();
  const dialog=$("#checkoutDialog"); dialog.showModal(); document.body.classList.add("has-dialog");
  $("#checkoutForm [name=name]").focus();
}
function closeAllState(){
  if(!document.querySelector("dialog[open]")){
    document.body.classList.remove("has-dialog");
    if(lastFocused&&document.contains(lastFocused)) lastFocused.focus();
  }
}
function resetFilters(){
  $("#searchInput").value=""; $("#modelFilter").value=""; $("#memoryFilter").value=""; $("#colorFilter").value="";
  $("#conditionFilter").value=""; $("#batteryFilter").value="0"; $("#priceFilter").value="";
  $("#sortSelect").value="newest"; currentCategory="all"; favoritesOnly=false;
  $$("#categoryTabs .category-tab").forEach(tab=>{const active=tab.dataset.category==="all";tab.classList.toggle("is-active",active);tab.setAttribute("aria-pressed",String(active));});
  renderProducts();
}
function init(){
  applyContacts(); populateFilters(); renderProducts(); renderCounts(); renderCart();
  $("#searchInput").addEventListener("input",renderProducts);
  ["modelFilter","memoryFilter","colorFilter","conditionFilter","batteryFilter","priceFilter","sortSelect"].forEach(id=>$("#"+id).addEventListener("input",renderProducts));
  $$("#categoryTabs .category-tab").forEach(tab=>tab.addEventListener("click",()=>{
    currentCategory=tab.dataset.category;
    $$("#categoryTabs .category-tab").forEach(other=>{const active=other===tab;other.classList.toggle("is-active",active);other.setAttribute("aria-pressed",String(active));});
    renderProducts();
  }));
  $("#resetFilters").addEventListener("click",resetFilters);
  $("#emptyReset").addEventListener("click",resetFilters);
  $("#favoriteToggle").addEventListener("click",()=>{
    if(!favoritesOnly&&favorites.size===0){showToast("Нажмите ♡ на карточке, чтобы сохранить товар");return;}
    favoritesOnly=!favoritesOnly;renderProducts();$("#catalog").scrollIntoView({behavior:"smooth"});
  });
  $("#mobileFavorites").addEventListener("click",()=>{
    if(favorites.size===0){showToast("Нажмите ♡ на карточке, чтобы сохранить товар");return;}
    favoritesOnly=true;renderProducts();$("#catalog").scrollIntoView({behavior:"smooth"});
  });
  $("#mobileCart").addEventListener("click",openCart);
  $("#openCart").addEventListener("click",openCart);
  $("#startCheckout").addEventListener("click",openCheckout);
  $("#productGrid").addEventListener("click",event=>{
    const favorite=event.target.closest("[data-favorite]");
    if(favorite){toggleFavorite(favorite.dataset.favorite);return;}
    const add=event.target.closest("[data-add]");
    if(add){event.stopPropagation();addToCart(add.dataset.add,0,false);return;}
    const open=event.target.closest("[data-open-product]");
    if(open){openProduct(open.dataset.openProduct);}
  });
  $("#productDetail").addEventListener("click",event=>{
    const add=event.target.closest("[data-detail-add]");
    if(add){addToCart(add.dataset.detailAdd,$("#variantSelect").value,true);return;}
    if(event.target.closest("[data-consult]")){$("#productDialog").close();$("#contacts").scrollIntoView({behavior:"smooth"});}
  });
  $("#cartItems").addEventListener("click",event=>{
    const remove=event.target.closest("[data-remove]");
    if(remove){cart.splice(Number(remove.dataset.remove),1);saveState();renderCart();renderCounts();return;}
    const quantity=event.target.closest("[data-quantity]");
    if(quantity){const item=cart[Number(quantity.dataset.index)];if(item){item.quantity+=Number(quantity.dataset.quantity);if(item.quantity<1)cart.splice(Number(quantity.dataset.index),1);saveState();renderCart();renderCounts();}}
  });
  $("#checkoutForm").addEventListener("submit",event=>{
    event.preventDefault();
    if(!event.currentTarget.reportValidity()) return;
    const number="DEMO-"+String(Math.floor(1000+Math.random()*9000));
    $("#demoOrderNumber").textContent=number; $("#checkoutContent").hidden=true; $("#orderConfirmation").hidden=false;
    $("#orderConfirmation button").focus();
  });
  $$("[data-close-dialog]").forEach(button=>button.addEventListener("click",()=>{
    const dialog=$("#"+button.dataset.closeDialog);
    if(dialog&&dialog.open) dialog.close();
    if(button.hasAttribute("data-clear-cart")){cart=[];saveState();renderCart();renderCounts();}
    if(button.hasAttribute("data-scroll-catalog"))window.setTimeout(()=>$("#searchInput").focus({preventScroll:true}),30);
  }));
  $$("dialog").forEach(dialog=>{
    dialog.addEventListener("close",closeAllState);
    dialog.addEventListener("click",event=>{if(event.target===dialog)dialog.close();});
    dialog.addEventListener("cancel",()=>{window.setTimeout(closeAllState,0);});
  });
}
init();

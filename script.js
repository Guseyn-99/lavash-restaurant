const menuData = [
  {group:'Шашлык — курица',cat:'grill',name:'Куриные бёдра',weight:'200 г',price:'350 ₽',desc:'Сочные куриные бёдра на мангале, маринованный лук, соус.'},
  {group:'Шашлык — курица',cat:'grill',name:'Куриная грудка',weight:'200 г',price:'350 ₽',desc:'Куриная грудка на мангале, маринованный лук, соус.'},
  {group:'Шашлык — курица',cat:'grill',name:'Куриные крылышки',weight:'200 г',price:'330 ₽',desc:'Куриные крылышки на мангале, маринованный лук, соус.'},
  {group:'Шашлык — курица',cat:'grill',name:'Цыплёнок',weight:'350 г',price:'390 ₽',desc:'Цыплёнок на мангале, маринованный лук, соус.'},
  {group:'Баранина',cat:'grill',name:'Каре баранины',weight:'350 г',price:'650 ₽',desc:'Каре баранины на мангале, маринованный лук, соус.'},
  {group:'Баранина',cat:'grill',name:'Мякоть баранины',weight:'250 г',price:'600 ₽',desc:'Мякоть баранины на мангале, маринованный лук, соус.'},
  {group:'Баранина',cat:'grill',name:'Люля из баранины',weight:'250 г',price:'460 ₽',desc:'Рубленая баранина, лук, специи; маринованный лук и соус.'},
      {group:'Говядина',cat:'grill',name:'Бастырма из говядины',weight:'250 г',price:'780 ₽',desc:'Маринованная говядина на мангале, лук, соус.'},
  {group:'Рыба и морепродукты',cat:'fish',name:'Дорадо',weight:'350 г',price:'650 ₽',desc:'Целая дорадо на гриле, лимон, соус наршараб.'},
  {group:'Рыба и морепродукты',cat:'fish',name:'Форель радужная',weight:'300 г',price:'580 ₽',desc:'Радужная форель на гриле, лимон, соус наршараб.'},
  {group:'Рыба и морепродукты',cat:'fish',name:'Креветки',weight:'120 г',price:'460 ₽',desc:'Креветки на гриле, лимон, фирменный соус.'},
  {group:'Гарниры',cat:'sides',name:'Овощи на мангале',weight:'300 г',price:'290 ₽',desc:'Баклажан, помидор и перец, обжаренные на мангале.'},
  {group:'Гарниры',cat:'sides',name:'Грибы на мангале',weight:'200 г',price:'250 ₽',desc:'Шампиньоны, обжаренные на мангале.'},
  {group:'Гарниры',cat:'sides',name:'Картошка с курдюком',weight:'150 г',price:'200 ₽',desc:'Картофель и курдюк на шампуре, обжаренные на мангале.'},
  {group:'Гарниры',cat:'sides',name:'Картофель фри',weight:'150 г',price:'150 ₽',desc:'Классический хрустящий картофель фри.'},
  {group:'Гарниры',cat:'sides',name:'Картофель айдахо',weight:'150 г',price:'180 ₽',desc:'Картофельные дольки со специями, запечённые до золотистой корочки.'},
  {group:'Шаверма и донер',cat:'shawarma',name:'Шаверма из курицы классическая',weight:'300 г',price:'300 ₽',desc:'Лаваш, курица, морковь, маринованная капуста, помидор, огурец, фирменный соус.'},
  {group:'Шаверма и донер',cat:'shawarma',name:'Шаверма-мини',weight:'200 г',price:'180 ₽',desc:'Лаваш, курица, морковь, маринованная капуста, помидор, огурец, фирменный соус.'},
  {group:'Шаверма и донер',cat:'shawarma',name:'Шаверма на тарелке',weight:'350 г',price:'390 ₽',desc:'Курица, картофель фри, морковь, маринованная капуста, помидор, огурец, фирменный соус, тандырный хлеб.'},
  {group:'Шаверма и донер',cat:'shawarma',name:'Донер с говядиной',weight:'350 г',price:'350 ₽',desc:'Хлеб, говядина, огурцы, помидоры, лук, фирменный соус.'},
  {group:'Шаверма и донер',cat:'shawarma',name:'Шаверма по-бакински',weight:'300 г',price:'380 ₽',desc:'Лаваш, курица, картофель фри, солёные огурцы, белый соус.'},
  {group:'Салаты',cat:'salads',name:'Салат Цезарь',weight:'250 г',price:'270 ₽',desc:'Салат романо, курица, помидоры черри, пармезан, сухарики, соус «Цезарь».'},
  {group:'Салаты',cat:'salads',name:'Чобан салат',weight:'250 г',price:'250 ₽',desc:'Помидоры, огурцы, красный лук, свежая зелень, лёгкая заправка.'},
  {group:'Салаты',cat:'salads',name:'Красная квашеная капуста',weight:'200 г',price:'180 ₽',desc:'Домашняя квашеная красная капуста.'},
  {group:'Супы',cat:'soups',name:'Суп чечевичный',weight:'200 г',price:'260 ₽',desc:'Красная чечевица, овощная основа, специи; подаётся с лимоном.'},
  {group:'Супы',cat:'soups',name:'Куриный суп',weight:'300 г',price:'280 ₽',desc:'Куриный бульон, курица, домашняя лапша, зелень.'},
  {group:'Супы',cat:'soups',name:'Суп пити',weight:'350 г',price:'500 ₽',desc:'Баранина, нут, картофель, лук, насыщенный бульон и специи.'},
  {group:'Супы',cat:'soups',name:'Суп буглама',weight:'350 г',price:'500 ₽',desc:'Баранина, помидоры, лук, перец, бульон и специи.'},
  {group:'Горячие закуски и хлеб',cat:'hot',name:'Долма в виноградных листьях',weight:'250 г',price:'450 ₽',desc:'Виноградные листья, мясная начинка, рис, лук; подаётся с белым гатыгом.'},
  {group:'Горячие закуски и хлеб',cat:'hot',name:'Лаваш тандырный',weight:'250 г',price:'100 ₽',desc:'Свежий тандырный хлеб.'},
  {group:'Минеральная вода',cat:'drinks',name:'Боржоми',weight:'0,5 л',price:'300 ₽',desc:'Газированная минеральная вода.'},
  {group:'Минеральная вода',cat:'drinks',name:'Рычал-Су',weight:'0,5 л',price:'200 ₽',desc:'Газированная минеральная вода.'},
  {group:'Минеральная вода',cat:'drinks',name:'Нарзан',weight:'0,5 л',price:'200 ₽',desc:'Минеральная вода.'},
  {group:'Минеральная вода',cat:'drinks',name:'Святой Источник газированная',weight:'0,5 л',price:'100 ₽',desc:'Питьевая газированная вода.'},
  {group:'Минеральная вода',cat:'drinks',name:'Святой Источник негазированная',weight:'0,5 л',price:'100 ₽',desc:'Питьевая негазированная вода.'},
  {group:'Лимонады и газированные напитки',cat:'drinks',name:'Натахтари',weight:'0,5 л',price:'200 ₽',desc:'Грузинский газированный лимонад. Вкусы: груша, тархун, фейхоа.'},
  {group:'Лимонады и газированные напитки',cat:'drinks',name:'Добрый Cola',weight:'0,5 л',price:'180 ₽',desc:'Газированный напиток со вкусом колы.'},
  {group:'Лимонады и газированные напитки',cat:'drinks',name:'Добрый Апельсин',weight:'0,5 л',price:'180 ₽',desc:'Газированный апельсиновый напиток.'},
  {group:'Лимонады и газированные напитки',cat:'drinks',name:'Pepsi',weight:'0,5 л',price:'180 ₽',desc:'Газированный напиток со вкусом пепси.'},
  {group:'Лимонады и газированные напитки',cat:'drinks',name:'Добрый Cola (0,3 л)',weight:'0,3 л',price:'130 ₽',desc:'Газированный напиток со вкусом колы.'},
  {group:'Лимонады и газированные напитки',cat:'drinks',name:'Добрый Апельсин (0,3 л)',weight:'0,3 л',price:'130 ₽',desc:'Газированный апельсиновый напиток.'},
  {group:'Лимонады и газированные напитки',cat:'drinks',name:'Pepsi (0,3 л)',weight:'0,3 л',price:'130 ₽',desc:'Газированный напиток со вкусом пепси.'},
  {group:'Лимонады и газированные напитки',cat:'drinks',name:'Роял (гранат)',weight:'0,3 л',price:'130 ₽',desc:'Газированный гранатовый напиток.'},
  {group:'Супы',cat:'soups',name:'Довга',weight:'0,5 л',price:'150 ₽',desc:'Холодный суп на кефире с зеленью и солью.'},
];

const catVisuals = {
  all:{caption:'Любимые блюда La’vash',images:[['assets/img/shawarma-plate-display.webp','Шаверма на тарелке'],['assets/img/fish1-display.webp','Рыба на мангале'],['assets/img/chicken-display.webp','Курица на мангале']]},
  grill:{caption:'Мясо с живого огня',images:[['assets/img/grill1-display.webp','Баранина на мангале'],['assets/img/beef-selected-display.webp','Бастырма из говядины'],['assets/img/chicken-display.webp','Куриный шашлык']]},
  shawarma:{caption:'Шаверма и донер',images:[['assets/img/doner-beef-display.webp','Донер с говядиной'],['assets/img/shawarma-plate-display.webp','Шаверма на тарелке'],['assets/img/shawarma-baku-display.webp','Шаверма по-бакински']]},
  fish:{caption:'Рыба и морепродукты',images:[['assets/img/fish1-display.webp','Дорадо на мангале'],['assets/img/trout-user.webp','Форель радужная'],['assets/img/menu-131035.webp','Креветки на гриле']]},
  sides:{caption:'Гарниры к мясу и рыбе',images:[['assets/img/vegetables-selected-display.webp','Овощи на мангале'],['assets/img/sides2-display.webp','Грибы на мангале'],['assets/img/sides3-display.webp','Картофель с курдюком']]},
  salads:{caption:'Свежие салаты',images:[['assets/img/salad-caesar-display.webp','Салат «Цезарь»'],['assets/img/salad-choban-final.webp','Чобан салат'],['assets/img/salads3-display.webp','Красная квашеная капуста']]},
  soups:{caption:'Горячие супы',images:[['assets/img/soups1-display.webp','Чечевичный суп'],['assets/img/soups2-display.webp','Куриный суп'],['assets/img/soups3-display.webp','Суп буглама']]},
  hot:{caption:'Традиционные горячие блюда',images:[['assets/img/dolma-single-display.webp','Долма в виноградных листьях']]},
  drinks:{caption:'Напитки к любимым блюдам',images:[]}
};

let currentFilter='all';
const list=document.getElementById('menuList');
const search=document.getElementById('menuSearch');
const visual=document.getElementById('categoryVisual');
const caption=document.getElementById('categoryCaption');

let currentPhoto=0;
function updateVisual(){
  const v=catVisuals[currentFilter] || catVisuals.all;
  caption.textContent=v.caption;
  const gallery=v.images;
  visual.className='visual-media visual-single-slide';
  if(currentFilter==='drinks'){visual.innerHTML='<div class="drinks-illustration"><span>LA’VASH</span><strong>Напитки</strong><small>Прохладные напитки к любимым блюдам</small></div>';document.getElementById('photoCount').textContent='Вода · лимонады';document.getElementById('photoPrev').disabled=true;document.getElementById('photoNext').disabled=true;return;}
  visual.innerHTML=`<img src="${gallery[currentPhoto][0]}" alt="${gallery[currentPhoto][1]}" draggable="false">`;
  document.getElementById('photoCount').textContent=`${currentPhoto+1} / ${gallery.length} · ${gallery[currentPhoto][1]}`;
  document.getElementById('photoPrev').disabled=gallery.length===1;
  document.getElementById('photoNext').disabled=gallery.length===1;
}
function stepPhoto(delta){
  const len=catVisuals[currentFilter].images.length;
  if(!len)return;
  currentPhoto=(currentPhoto+delta+len)%len;
  updateVisual();
}
document.getElementById('photoPrev').addEventListener('click',()=>stepPhoto(-1));
document.getElementById('photoNext').addEventListener('click',()=>stepPhoto(1));
visual.tabIndex=0; visual.setAttribute('role','group'); visual.setAttribute('aria-label','Фотографии блюд, переключайте стрелками');
visual.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();stepPhoto(e.key==='ArrowRight'?1:-1)}});
let touchStart=null;
visual.addEventListener('touchstart',e=>{touchStart=e.changedTouches[0].clientX},{passive:true});
visual.addEventListener('touchend',e=>{if(touchStart===null)return;const dx=e.changedTouches[0].clientX-touchStart;if(Math.abs(dx)>45)stepPhoto(dx<0?1:-1);touchStart=null},{passive:true});

const dishPhotos = {
  "Дорадо": "assets/img/fish1-display.webp",
  "Форель радужная": "assets/img/trout-user.webp",
  "Креветки": "assets/img/menu-131035.webp",
  "Куриные бёдра": "assets/img/menu-130947.webp",
  "Куриная грудка": "assets/img/menu-130952.webp",
  "Куриные крылышки": "assets/img/menu-130955.webp",
  "Цыплёнок": "assets/img/menu-130959.webp",
  "Каре баранины": "assets/img/menu-131003.webp",
  "Мякоть баранины": "assets/img/menu-131023.webp",
  "Люля из баранины": "assets/img/menu-131025.webp",
      "Бастырма из говядины": "assets/img/menu-131628.webp",
  "Овощи на мангале": "assets/img/vegetables-selected-display.webp",
  "Грибы на мангале": "assets/img/sides2-display.webp",
  "Картошка с курдюком": "assets/img/sides3-display.webp",
  "Картофель фри": "assets/img/menu-131051.webp",
  "Картофель айдахо": "assets/img/menu-131327.webp",
  "Шаверма из курицы классическая": "assets/img/shawarma-classic-2026.webp",
  "Шаверма-мини": "assets/img/shawarma-mini-2026.webp",
  "Шаверма на тарелке": "assets/img/shawarma-plate-display.webp",
  "Донер с говядиной": "assets/img/doner-beef-display.webp",
  "Шаверма по-бакински": "assets/img/menu-131554.webp",
  "Салат Цезарь": "assets/img/salad-caesar-display.webp",
  "Чобан салат": "assets/img/salad-choban-final.webp",
  "Красная квашеная капуста": "assets/img/salads3-display.webp",
  "Суп чечевичный": "assets/img/menu-131413.webp",
  "Куриный суп": "assets/img/soups2-display.webp",
  "Суп пити": "assets/img/soup-piti.png",
  "Суп буглама": "assets/img/menu-131402.webp",
  "Долма в виноградных листьях": "assets/img/menu-131511.webp",
  "Лаваш тандырный": "assets/img/menu-131836.webp"
};
function render(){
  const q=(search.value||'').trim().toLowerCase();
  const filtered=menuData.filter(x=>(currentFilter==='all'||x.cat===currentFilter) && (`${x.name} ${x.desc} ${x.group}`).toLowerCase().includes(q));
  list.innerHTML='';
  if(!filtered.length){list.innerHTML='<div class="empty-state">Ничего не найдено. Попробуйте другой запрос.</div>';return}
  for(const x of filtered){
    const c=document.createElement('article');c.className='menu-card dish-card';
    const src=dishPhotos[x.name];
    const img=x.cat==='drinks'?'':src?`<img class="dish-photo" loading="lazy" src="${src}" alt="${x.name}" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'dish-placeholder',textContent:'Фотография скоро появится'}))">`:'<div class="dish-placeholder"><span>Фото скоро появится</span></div>';
    if(x.cat==='drinks') c.classList.add('drink-card');
    c.innerHTML=`${img}<div class="dish-info"><h3>${x.name}</h3><span class="dish-price">${x.price}</span><div class="meta">${x.weight||'Вес уточняется'}</div><p>${x.desc}</p></div>`;
    if(src){c.querySelector("img")?.addEventListener("click",()=>openDishPhoto(src,x.name));c.querySelector("img")?.setAttribute("title","Нажмите, чтобы увеличить фото");c.querySelector("img")?.setAttribute("tabindex","0");c.querySelector("img")?.addEventListener("keydown",e=>{if(e.key==="Enter")openDishPhoto(src,x.name)})}
    list.appendChild(c)
  }
}

document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  currentFilter=btn.dataset.filter;
  currentPhoto=0;
  updateVisual();
  render();
}));

search.addEventListener('input',render);
updateVisual();
render();

const navToggle=document.querySelector('.nav-toggle'), nav=document.querySelector('.nav');
navToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');navToggle.setAttribute('aria-expanded',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

function openDishPhoto(src,name){const d=document.getElementById('dishLightbox');d.querySelector('img').src=src;d.querySelector('img').alt=name;d.querySelector('.lb-title').textContent=name;d.hidden=false;document.body.style.overflow='hidden';d.querySelector('button').focus()}
function closeDishPhoto(){document.getElementById('dishLightbox').hidden=true;document.body.style.overflow=''}
document.getElementById('dishLightbox').addEventListener('click',e=>{if(e.target.id==='dishLightbox'||e.target.closest('.lb-close'))closeDishPhoto()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDishPhoto()});

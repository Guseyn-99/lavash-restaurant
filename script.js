const menuData = [
  {group:'Рыба и морепродукты',cat:'fish',name:'Дорадо',weight:'350 г',price:'650 ₽',desc:'Целая дорадо на гриле, лимон, соус наршараб.'},
  {group:'Рыба и морепродукты',cat:'fish',name:'Форель радужная',weight:'300 г',price:'580 ₽',desc:'Радужная форель на гриле, лимон, соус наршараб.'},
  {group:'Гарниры',cat:'sides',name:'Креветки',weight:'120 г',price:'460 ₽',desc:'Креветки на гриле, лимон, фирменный соус.'},
  {group:'Шашлык — курица',cat:'grill',name:'Куриные бёдра',weight:'200 г',price:'350 ₽',desc:'Сочные куриные бёдра на мангале, маринованный лук, соус.'},
  {group:'Шашлык — курица',cat:'grill',name:'Куриная грудка',weight:'200 г',price:'350 ₽',desc:'Куриная грудка на мангале, маринованный лук, соус.'},
  {group:'Шашлык — курица',cat:'grill',name:'Куриные крылышки',weight:'200 г',price:'330 ₽',desc:'Куриные крылышки на мангале, маринованный лук, соус.'},
  {group:'Шашлык — курица',cat:'grill',name:'Цыплёнок',weight:'350 г',price:'390 ₽',desc:'Цыплёнок на мангале, маринованный лук, соус.'},
  {group:'Баранина',cat:'grill',name:'Каре баранины',weight:'350 г',price:'650 ₽',desc:'Каре баранины на мангале, маринованный лук, соус.'},
  {group:'Баранина',cat:'grill',name:'Мякоть баранины',weight:'250 г',price:'600 ₽',desc:'Мякоть баранины на мангале, маринованный лук, соус.'},
  {group:'Баранина',cat:'grill',name:'Люля из баранины',weight:'250 г',price:'460 ₽',desc:'Рубленая баранина, лук, специи; маринованный лук и соус.'},
  {group:'Баранина',cat:'grill',name:'Печень баранины',weight:'200 г',price:'250 ₽',desc:'Баранья печень на мангале, лук, соус.'},
  {group:'Баранина',cat:'grill',name:'Почки и сердце',weight:'200 г',price:'300 ₽',desc:'Бараньи почки и сердце на мангале, лук, соус.'},
  {group:'Говядина',cat:'grill',name:'Бастырма из говядины',weight:'250 г',price:'590 ₽',desc:'Маринованная говядина на мангале, лук, соус.'},
  {group:'Говядина',cat:'grill',name:'Люля из говядины',weight:'250 г',price:'460 ₽',desc:'Рубленая говядина, лук, специи; маринованный лук и соус.'},
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
  {group:'Супы',cat:'soups',name:'Суп буглама',weight:'350 г',price:'350 ₽',desc:'Баранина, помидоры, лук, перец, бульон и специи.'},
  {group:'Горячие закуски и хлеб',cat:'hot',name:'Долма в виноградных листьях',weight:'250 г',price:'450 ₽',desc:'Виноградные листья, мясная начинка, рис, лук; подаётся с белым гатыгом.'},
  {group:'Горячие закуски и хлеб',cat:'hot',name:'Лаваш тандырный',weight:'250 г',price:'50 ₽',desc:'Свежий тандырный хлеб.'}
];

const catVisuals = {
  all:{caption:'Любимые блюда La’vash',images:[['assets/img/shawarma-plate-display.webp','Шаверма на тарелке'],['assets/img/fish1-display.webp','Рыба на мангале'],['assets/img/chicken-display.webp','Курица на мангале']]},
  grill:{caption:'Мясо с живого огня',images:[['assets/img/grill1-display.webp','Баранина на мангале'],['assets/img/beef-selected-display.webp','Бастырма из говядины'],['assets/img/chicken-display.webp','Куриный шашлык']]},
  shawarma:{caption:'Шаверма и донер',images:[['assets/img/doner-beef-display.webp','Донер с говядиной'],['assets/img/shawarma-plate-display.webp','Шаверма на тарелке'],['assets/img/shawarma-baku-display.webp','Шаверма по-бакински']]},
  fish:{caption:'Рыба на мангале',images:[['assets/img/fish1-display.webp','Дорадо на мангале'],['assets/img/trout-user.webp','Форель радужная']]},
  sides:{caption:'Гарниры к мясу и рыбе',images:[['assets/img/vegetables-selected-display.webp','Овощи на мангале'],['assets/img/sides2-display.webp','Грибы на мангале'],['assets/img/sides3-display.webp','Картофель с курдюком']]},
  salads:{caption:'Свежие салаты',images:[['assets/img/salad-caesar-display.webp','Салат «Цезарь»'],['assets/img/salad-choban-final.webp','Чобан салат'],['assets/img/salads3-display.webp','Красная квашеная капуста']]},
  soups:{caption:'Горячие супы',images:[['assets/img/soups1-display.webp','Чечевичный суп'],['assets/img/soups2-display.webp','Куриный суп'],['assets/img/soups3-display.webp','Суп буглама']]},
  hot:{caption:'Традиционные горячие блюда',images:[['assets/img/dolma-single-display.webp','Долма в виноградных листьях']]}
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
  visual.innerHTML=`<img src="${gallery[currentPhoto][0]}" alt="${gallery[currentPhoto][1]}" draggable="false">`;
  document.getElementById('photoCount').textContent=`${currentPhoto+1} / ${gallery.length} · ${gallery[currentPhoto][1]}`;
  document.getElementById('photoPrev').disabled=gallery.length===1;
  document.getElementById('photoNext').disabled=gallery.length===1;
}
function stepPhoto(delta){
  const len=catVisuals[currentFilter].images.length;
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

function render(){
  const q=(search.value||'').trim().toLowerCase();
  const filtered=menuData.filter(x=>(currentFilter==='all'||x.cat===currentFilter) && (`${x.name} ${x.desc} ${x.group}`).toLowerCase().includes(q));
  list.innerHTML='';
  if(!filtered.length){list.innerHTML='<div class="empty-state">Ничего не найдено. Попробуйте другой запрос.</div>';return}
  let last='';
  for(const x of filtered){
    if(x.group!==last){
      const h=document.createElement('div');h.className='menu-group-title';h.textContent=x.group;list.appendChild(h);last=x.group;
    }
    const c=document.createElement('article');c.className='menu-card';
    c.innerHTML=`<h3>${x.name}</h3><div class="price">${x.price}</div><div class="meta">${x.weight||'Уточняйте вес'}</div><p>${x.desc}</p>`;
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

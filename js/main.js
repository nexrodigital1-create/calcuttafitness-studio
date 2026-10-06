const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>30));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('.nav-link').forEach(a=>a.addEventListener('click',()=>{
  const menu=document.getElementById('menu');
  if(menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
}));

let current=0;
const reviews=[...document.querySelectorAll('.review')];
const counter=document.getElementById('counter');
function showReview(i){current=(i+reviews.length)%reviews.length;reviews.forEach((r,n)=>r.classList.toggle('active',n===current));counter.textContent=`0${current+1} / 0${reviews.length}`}
document.getElementById('next').onclick=()=>showReview(current+1);
document.getElementById('prev').onclick=()=>showReview(current-1);
setInterval(()=>showReview(current+1),7000);

document.getElementById('form').addEventListener('submit',e=>{
 e.preventDefault();
 document.getElementById('formNote').textContent='Demo enquiry submitted. Connect this form to email/CRM before launch.';
 e.target.reset();
});

document.getElementById('wa').addEventListener('click',e=>{
 e.preventDefault();
 alert('Replace [WHATSAPP NUMBER] in js/main.js before publishing.');
});

// Replace these values before client launch.
const CONFIG = {
  whatsappNumber: "91XXXXXXXXXX",
  phone: "",
  email: ""
};

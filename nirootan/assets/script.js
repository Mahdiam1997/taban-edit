'use strict';
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
function closeMenu(){if(!menuToggle||!mobileMenu)return;mobileMenu.hidden=true;menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','باز کردن منو');}
if(menuToggle&&mobileMenu){
 menuToggle.addEventListener('click',()=>{const open=mobileMenu.hidden;mobileMenu.hidden=!open;menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'بستن منو':'باز کردن منو');});
 mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
}
const toast=document.getElementById('toast');let toastTask;
function notify(msg){if(!toast)return;toast.textContent=msg;toast.classList.add('show');clearTimeout(toastTask);toastTask=setTimeout(()=>toast.classList.remove('show'),2800);}
document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',async()=>{
 const value=button.dataset.copy;
 try {await navigator.clipboard.writeText(value);notify('شماره کپی شد: '+value);}
 catch(e){const temp=document.createElement('textarea');temp.value=value;document.body.appendChild(temp);temp.select();try{document.execCommand('copy');notify('شماره کپی شد: '+value);}catch(_) {notify(value);}temp.remove();}
}));
const revealEls=document.querySelectorAll('.reveal');
if('IntersectionObserver'in window){const io=new IntersectionObserver((entries,observer)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target);}});},{threshold:.075,rootMargin:'0px 0px -10px 0px'});revealEls.forEach(e=>io.observe(e));}
else revealEls.forEach(e=>e.classList.add('is-visible'));
const year=document.getElementById('year');if(year)year.textContent=new Intl.NumberFormat('fa-IR',{useGrouping:false}).format(new Date().getFullYear());

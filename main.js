
document.addEventListener('DOMContentLoaded',()=>{
  const menu=document.querySelector('.menu-toggle');
  const links=document.querySelector('.nav-links');
  if(menu&&links){menu.addEventListener('click',()=>links.classList.toggle('open'));}
  document.querySelectorAll('.nav-drop-toggle').forEach(btn=>btn.addEventListener('click',(e)=>{e.preventDefault();btn.closest('.nav-dropdown').classList.toggle('open');btn.setAttribute('aria-expanded', btn.closest('.nav-dropdown').classList.contains('open') ? 'true' : 'false');}));
  document.querySelectorAll('.faq-q').forEach(btn=>btn.addEventListener('click',()=>btn.closest('.faq-item').classList.toggle('open')));
  const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')})},{threshold:.14});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
});

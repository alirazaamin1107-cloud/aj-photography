const menuToggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');if(menuToggle){menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}))}
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const filters=document.querySelectorAll('.filter');const items=document.querySelectorAll('.gallery-item');
function applyFilter(filter){filters.forEach(b=>b.classList.toggle('active',b.dataset.filter===filter));items.forEach(item=>{item.classList.toggle('hidden',filter!=='all'&&item.dataset.category!==filter)});}
filters.forEach(button=>button.addEventListener('click',()=>applyFilter(button.dataset.filter)));
document.querySelectorAll('[data-service-filter]').forEach(link=>link.addEventListener('click',()=>{const filter=link.dataset.serviceFilter;setTimeout(()=>applyFilter(filter),50)}));
document.getElementById('year').textContent=new Date().getFullYear();

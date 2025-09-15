// Shared auth + nav logic
const AUTH_USER='SAI', AUTH_PASS='SAI';
function ensureAuth(){
  const authed = localStorage.getItem('pacs_auth') === '1';
  const ov = document.getElementById('loginOverlay');
  if(authed){
    document.body.classList.remove('app-locked');
    if(ov) ov.style.display='none';
  }else{
    document.body.classList.add('app-locked');
    if(ov) ov.style.display='flex';
    setTimeout(()=>document.getElementById('loginId')?.focus(), 0);
  }
}
function handleLogin(e){
  e.preventDefault();
  const id = document.getElementById('loginId')?.value.trim() || '';
  const pw = document.getElementById('loginPw')?.value.trim() || '';
  const err = document.getElementById('loginErr');
  if(id===AUTH_USER && pw===AUTH_PASS){
    localStorage.setItem('pacs_auth','1');
    if(err) err.style.display='none';
    ensureAuth();
  }else{
    if(err) err.style.display='inline-block';
  }
  return false;
}
function logout(){ localStorage.removeItem('pacs_auth'); ensureAuth(); }
// Active tab highlighting by filename
(function setActive(){
  const file = (location.pathname.split('/').pop()||'index.html').toLowerCase();
  document.querySelectorAll('.tabs a.tab').forEach(a=>{
    const href = (a.getAttribute('href')||'').toLowerCase();
    a.classList.toggle('active', href.endsWith(file));
  });
})();
// CSV helper
function downloadCSV(filename, rows){
  const processRow = row => row.map(v => `"${(v??'').toString().replace(/"/g,'""')}"`).join(',');
  const csv = rows.map(processRow).join('\n');
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href=url; a.download=filename; a.click();
  setTimeout(()=>URL.revokeObjectURL(url), 1000);
}
// Shared auth + nav logic
const AUTH_USER='SAI', AUTH_PASS='SAI';

function ensureAuth(){
  const authed = localStorage.getItem('pacs_auth') === '1';
  // keep HTML class in sync (prevents overlay flash and accidental "logout" feel)
  document.documentElement.classList.toggle('authed', authed);

  const ov = document.getElementById('loginOverlay');
  if(authed){
    if(ov) ov.style.display='none';
  }else{
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

function logout(){
  localStorage.removeItem('pacs_auth');
  ensureAuth();
}

// Active tab highlighting by filename
(function setActive(){
  const file = (location.pathname.split('/').pop()||'index.html').toLowerCase();
  document.querySelectorAll('.tabs a.tab').forEach(a=>{
    const href = (a.getAttribute('href')||'').toLowerCase();
    a.classList.toggle('active', href.endsWith(file));
  });
})();

// CSV helper (global)
function downloadCSV(filename, rows){
  const processRow = row => row.map(v => `"${(v??'').toString().replace(/"/g,'""')}"`).join(',');
  const csv = rows.map(processRow).join('\n');
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href=url; a.download=filename; a.click();
  setTimeout(()=>URL.revokeObjectURL(url), 500);
}
window.downloadCSV = downloadCSV;

/* ----- Snapshot helpers (unchanged) ----- */
function openList(kind){
  alert((kind==='borrowers' ? 'Borrowers vs Non-borrowers' : 'TD vs Non-TD') + ' list (demo).');
}

function downloadMembersCSV(memberwise=false){
  if (typeof villages==='undefined' || typeof borrowData==='undefined') {
    alert('Data not loaded'); return;
  }
  const rows=[['Village','Borrowers','Non-borrowers']];
  villages.forEach((v,i)=>rows.push([v, borrowData.borrowers[i], borrowData.nonBorrowers[i]]));
  downloadCSV(memberwise ? 'members_memberwise.csv' : 'members.csv', rows);
}

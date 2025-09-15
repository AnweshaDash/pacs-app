// Demo data reused across pages
const POP=24500, WOMEN_SHARE=0.35, YOUTH_SHARE=0.45;
const villages=['Utai','Bhothli','Gunderdehi','Gopalpur'];
const profiling={ d30:[22,24,20,25], d60:[10,12,12,15], d90:[5,8,10,10] };
const borrowData = { borrowers:[520,480,560,490], nonBorrowers:[120,110,140,110] };
const scoreBins=['<60','60-69','70-79','80-89','90-100'];
const distCounts=[2,5,9,10,4];
const people = [
  {name:'Ramesh Sahu', village:'Utai', acres:3.5, score:92, eligible:95000, mobile:'+91-98xxxx01'},
  {name:'Seema Verma', village:'Bhothli', acres:2.7, score:89, eligible:88000, mobile:'+91-98xxxx02'},
  {name:'Mahesh Patel', village:'Gunderdehi', acres:4.0, score:87, eligible:100000, mobile:'+91-98xxxx03'},
  {name:'Sunita Kashyap', village:'Gopalpur', acres:3.2, score:85, eligible:82000, mobile:'+91-98xxxx04'}
];
const cashflow={ months:['Jan-24','Feb-24','Mar-24','Apr-24'],
  inflow:[3.2,2.8,3.6,3.1], outflow:[2.5,3.0,3.8,3.4], net:[0.7,-0.2,-0.2,-0.3] };
const repayment={ months:['May-24','Jun-24','Jul-24','Aug-24'],
  upcoming:[220,260,280,240], overdue:[45,38,35,40] };
const dpdByVillage = { labels:villages, d30:[34,28,26,30], d60:[16,14,13,15], d90:[9,12,10,11] };
const utilRaw = { labels:villages, cultivable:[2200,1600,1500,980], kccCovered:[1500,980,900,620] };
const utilizationPct = utilRaw.kccCovered.map((k,i)=> Math.round((k/utilRaw.cultivable[i])*1000)/10);
const peerVillages=['Utai','Dhaba','Surgi','Somni','Karanja Bhillai','Nankatthi'];
const avgTicket=[72,80,66,61,78,59];
const repayPct=[86,92,78,74,89,71];
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const fertSales = { Urea:[520,560,480,510,670,880,920,800,720,710,860,930],
  DAP:[260,290,250,270,340,460,520,430,380,360,480,510],
  MOP:[140,160,150,155,170,220,260,230,200,195,230,250],
  NPK:[180,210,190,200,240,300,340,300,260,250,320,350] };
const fertStock = { labels:['Urea','DAP','MOP','NPK'], stock:[420,250,180,220], reorder:[400,300,200,240] };
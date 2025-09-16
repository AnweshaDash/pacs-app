// ---------- Shared Demo Data ----------
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

// ---------- Loan Profile Demo Data ----------
const creditPenetration = {
  members: 2316,
  borrowers: 2050,
  landOwned: 6200,
  landFinanced: 4460
};

const coverage = {
  villages: ['Utai','Bhothli','Gunderdehi','Gopalpur'],
  crops: ['Paddy','Wheat','Maize','Vegetables'],
  matrix: [
    [72,64,38,55],
    [81,69,43,62],
    [61,52,28,49],
    [76,71,45,58]
  ]
};

const landVsFinanced = {
  owned:[1800,1500,1600,1300],
  financed:[1280,1060,980,840]
};

const termSplit = [68,22,10];
const seasonKCC = { seasons:['Kharif','Rabi'], disbursed:[145,128] };
const insurance = { crops:['Paddy','Wheat','Maize','Vegetables'], coveragePct:[78,92,63,70] };
const ticketBuckets = { labels:['<50k','50k–1L','1–2L','2–3L','3L+'], counts:[220,540,430,190,70] };
const endUse = { labels:['Agri','Dairy','Fisheries','Animal Husbandry','Others'], shares:[62,12,6,14,6] };

const cohort = {
  labels:['Kharif 2022','Rabi 2022','Kharif 2023','Rabi 2023'],
  onTime:[73,92,78,88],
  delayed:[18,6,15,9],
  defaulted:[9,2,7,3]
};

const aging = { labels:['<15d','15–30d','30–60d','60+d'], amountLakh:[9.5,8.2,6.7,3.1] };
const dpdBuckets = { labels:['1–30','31–60','61–90','>90'], amountLakh:[12.4,6.1,3.7,1.8] };
const npa = { labels:['SMA-0','SMA-1','SMA-2','NPA-Substandard','NPA-Doubtful','NPA-Loss'], amountLakh:[14.8,6.2,3.9,1.7,0.6,0.2] };

const concentration = {
  data:[
    {name:'Paddy',share:42},
    {name:'Wheat',share:18},
    {name:'Maize',share:12},
    {name:'Veg',share:10},
    {name:'Others',share:18}
  ]
};

const peerVillages=['Utai','Dhaba','Surgi','Somni','Karanja Bhillai','Nankatthi'];
const avgTicket=[72,80,66,61,78,59];
const repayPct=[86,92,78,74,89,71];

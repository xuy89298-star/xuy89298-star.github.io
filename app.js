const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer=matchMedia('(pointer:fine)').matches;

const signalData={
  data:{kicker:'EVIDENCE / 01',value:'完整研究链路',text:'用模型、模拟和实验逐层验证结论。'},
  user:{kicker:'EVIDENCE / 02',value:'20 万最高阅读',text:'从真实阅读行为判断用户偏好。'},
  drive:{kicker:'EVIDENCE / 03',value:'500+ 人次参与',text:'拆解任务、协调资源并推进到现场。'}
};
const journeyData={
  club:{type:'CAMPUS / CLUB',count:'03 EXPERIENCES',title:'从参与者到活动推进者',summary:'在社团活动中训练沟通、分工和现场推进，也在辩论中持续提升观点组织与表达能力。',result:'目标对齐 · 任务拆解 · 沟通协作 · 现场执行',cards:[
    {tag:'社团工作',title:'活动策划与组织',text:'主导草坪音乐节、英语角等活动，负责方案、分工、协调与现场推进。',note:'累计覆盖 500+ 人次'},
    {tag:'表达训练',title:'校辩论队经历',text:'训练观点拆解、证据组织和异议回应，多次参与校内辩论活动。',note:'多次获得全场最佳'},
    {tag:'待补充',title:'更多社团经历',text:'这里已经预留内容空间，可继续添加职位、活动或成果。',note:'等待你的补充',placeholder:true}
  ]},
  innovation:{type:'CAMPUS / INNOVATION',count:'02 RECORDS',title:'把研究问题推进到实验验证',summary:'围绕未爆弹磁异常模拟与特征研究，参与理论推导、数值模拟、数据分析和物理实验。',result:'问题拆解 · 数据分析 · 跨环节协作 · 验证闭环',cards:[
    {tag:'校级大学生创新项目',title:'未爆弹磁异常模拟与特征研究',text:'担任第二负责人，对接指导老师、整合团队意见并推动模型、模拟和实验衔接。',note:'项目顺利结题'},
    {tag:'项目方法',title:'建立完整验证链路',text:'将抽象研究问题拆成理论模型、数值模拟与物理实验三个可检查阶段。',note:'MODEL → SIMULATE → TEST'},
    {tag:'待补充',title:'更多大创细节',text:'这里可继续添加项目周期、个人贡献、研究成果或相关材料。',note:'等待你的补充',placeholder:true}
  ]},
  achievement:{type:'CAMPUS / ACHIEVEMENT',count:'04 ACHIEVEMENTS',title:'持续积累的个人成果',summary:'奖学金、荣誉与技能证书记录了我的学习投入，也证明我具备持续完成目标的能力。',result:'学习能力 · 英语能力 · 计算机能力 · 持续投入',cards:[
    {tag:'奖学金',title:'校级二等奖学金',text:'在校期间获得校级二等奖学金。',note:'SCHOLARSHIP'},
    {tag:'荣誉',title:'院级优秀学生',text:'获得学院优秀学生荣誉。',note:'HONOR'},
    {tag:'语言能力',title:'大学英语四、六级',text:'通过大学英语四级与六级考试。',note:'CET-4 · CET-6'},
    {tag:'计算机能力',title:'全国计算机二级证书',text:'获得全国计算机等级考试二级证书。',note:'NCRE-2'},
    {tag:'待补充',title:'更多个人成就',text:'这里可继续添加竞赛、荣誉、证书或成绩。',note:'等待你的补充',placeholder:true}
  ]}
};
const projectData={
  writing:{index:'01 / 03',meta:'2024.09 — 至今 · 独立创作者',kicker:'CONTENT × USER INSIGHT',title:'用 90 万字，建立一套读者反馈循环',lead:'长篇内容的难点不是一次写好，而是持续判断读者为什么留下。',judgement:'阅读行为比口头偏好更接近真实需求。',action:'对比题材与节奏表现，调整下一阶段内容，再用新数据验证。',result:'累计创作 <b>90 万字</b>，单部最高阅读 <b>20 万</b>',insight:'用户说什么值得听，用户实际选择什么更值得看。'},
  aigc:{index:'02 / 03',meta:'独立项目 · AIGC 内容创作',kicker:'AIGC × SHORT VIDEO',title:'AIGC 宠物短视频创作项目',lead:'基于 AI 视频生成与剪辑工具，独立完成宠物主题短视频的创意策划与内容制作。',judgement:'把抽象创意先转化为具体场景与视觉表达，再逐轮检查画面效果和内容连贯性。',action:'使用即梦、LibTV 生成素材，结合剪映完成筛选、剪辑与成片优化，并持续调整生成方案。',result:'完成宠物主题短视频，沉淀 <b>创意—生成—剪辑—迭代</b> 工作流',insight:'快速试验与持续调整，能把生成的不确定性转化为可管理的创作过程。'},
  tracker:{index:'03 / 03',meta:'独立设计与开发 · 求职管理工具',kicker:'PRODUCT DESIGN × DEVELOPMENT',title:'OfferFlow 求职投递管理系统',lead:'围绕岗位管理、投递进度跟踪与待办事项关联，梳理核心业务流程并完成产品功能设计。',judgement:'求职管理的核心不是记录更多信息，而是让岗位、进度与下一步行动保持关联。',action:'实现状态流转、数据统计与导出、数据持久化，并通过多轮功能测试和回归测试验证业务逻辑与数据一致性。',result:'持续优化工作台、投递看板与表单交互，提升求职流程的 <b>可视化与管理效率</b>',insight:'稳定的数据逻辑与清晰的状态反馈，共同决定管理工具是否真正可用。'}
};

document.querySelectorAll('.signal').forEach(button=>button.addEventListener('click',()=>{
  const key=button.dataset.signal,data=signalData[key],output=document.querySelector('.signal-output');
  document.querySelectorAll('.signal').forEach(item=>item.classList.toggle('active',item===button));
  output.classList.add('changing');
  setTimeout(()=>{document.querySelector('#signal-kicker').textContent=data.kicker;document.querySelector('#signal-value').textContent=data.value;document.querySelector('#signal-text').textContent=data.text;output.classList.remove('changing');},140);
}));

document.querySelectorAll('[data-journey]').forEach(button=>button.addEventListener('click',()=>{
  const data=journeyData[button.dataset.journey];
  document.querySelectorAll('[data-journey]').forEach(item=>{item.classList.toggle('active',item===button);item.setAttribute('aria-selected',item===button)});
  const detail=document.querySelector('.campus-detail');detail.classList.add('changing');
  setTimeout(()=>{
    document.querySelector('#journey-type').textContent=data.type;document.querySelector('#journey-count').textContent=data.count;document.querySelector('#journey-title').textContent=data.title;document.querySelector('#journey-summary').textContent=data.summary;document.querySelector('#journey-result').textContent=data.result;
    document.querySelector('#journey-cards').innerHTML=data.cards.map(card=>`<article${card.placeholder?' class="placeholder"':''}><span>${card.tag}</span><h4>${card.title}</h4><p>${card.text}</p><small>${card.note}</small></article>`).join('');
    detail.classList.remove('changing');
  },160);
}));

const projectButtons=[...document.querySelectorAll('[data-project]')];
const panel=document.querySelector('.project-panel');
let wheelDragged=false;
function selectProject(key,focus=false){
  const data=projectData[key],button=projectButtons.find(item=>item.dataset.project===key);if(!data||!button)return;
  projectButtons.forEach(item=>{item.classList.toggle('active',item===button);item.setAttribute('aria-selected',item===button)});
  panel.classList.add('switching');
  setTimeout(()=>{
    panel.className=`project-panel variant-${key}`;
    document.querySelector('#project-hub-title').textContent=button.querySelector('b').textContent;
    document.querySelector('#project-index').textContent=data.index;document.querySelector('#project-meta').textContent=data.meta;document.querySelector('#project-kicker').textContent=data.kicker;document.querySelector('#project-title').textContent=data.title;document.querySelector('#project-lead').textContent=data.lead;document.querySelector('#project-judgement').textContent=data.judgement;document.querySelector('#project-action').textContent=data.action;document.querySelector('#project-result').innerHTML=data.result;document.querySelector('#project-insight').textContent=data.insight;
    if(focus)panel.focus?.();
  },180);
}
projectButtons.forEach(button=>button.addEventListener('click',()=>{if(wheelDragged)return;selectProject(button.dataset.project)}));
document.querySelector('.project-lab').addEventListener('keydown',event=>{
  if(!['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(event.key))return;event.preventDefault();
  const current=projectButtons.findIndex(button=>button.classList.contains('active'));const next=(current+(event.key==='ArrowUp'||event.key==='ArrowLeft'?-1:1)+projectButtons.length)%projectButtons.length;projectButtons[next].focus();selectProject(projectButtons[next].dataset.project);
});
document.querySelectorAll('[data-jump]').forEach(button=>button.addEventListener('click',()=>{selectProject(button.dataset.jump);document.querySelector('#projects').scrollIntoView({behavior:reduced?'auto':'smooth'});}));

document.querySelectorAll('[data-pop]').forEach(button=>button.addEventListener('click',()=>{
  const popped=button.classList.toggle('popped');button.setAttribute('aria-pressed',popped);
  button.querySelector('b').textContent=popped?button.dataset.pop:'?';
  button.querySelector('i').textContent=popped?'×':'＋';
}));

const projectWheel=document.querySelector('[data-wheel]');
let wheelAngle=0,wheelStartAngle=0,wheelStartX=0,wheelPointer=null;
function renderWheel(angle,animated=true){
  wheelAngle=angle;projectWheel.classList.toggle('dragging',!animated);projectWheel.style.transform=`rotate(${angle}deg)`;
  projectButtons.forEach(button=>button.style.setProperty('--card-rotation',`${-angle}deg`));
}
projectWheel.addEventListener('pointerdown',event=>{wheelPointer=event.pointerId;wheelStartX=event.clientX;wheelStartAngle=wheelAngle;wheelDragged=false});
projectWheel.addEventListener('pointermove',event=>{if(event.pointerId!==wheelPointer)return;const distance=event.clientX-wheelStartX;if(Math.abs(distance)>6&&!wheelDragged){wheelDragged=true;projectWheel.setPointerCapture(event.pointerId);projectWheel.classList.add('dragging')}if(wheelDragged)renderWheel(wheelStartAngle+distance*.32,false)});
function finishWheel(event){if(event.pointerId!==wheelPointer)return;wheelPointer=null;const snapped=Math.round(wheelAngle/120)*120;projectWheel.classList.remove('dragging');renderWheel(snapped,true);setTimeout(()=>wheelDragged=false,100)}
projectWheel.addEventListener('pointerup',finishWheel);projectWheel.addEventListener('pointercancel',finishWheel);

const copyButton=document.querySelector('#copy');
copyButton.addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText('2123181811@qq.com');copyButton.textContent='已复制 ✓';status.textContent='邮箱已写入剪贴板';}catch{status.textContent='请手动复制上方邮箱';}setTimeout(()=>{copyButton.textContent='复制邮箱';status.textContent='';},2400)});

const revealItems=[...document.querySelectorAll('[data-reveal]')];
if(reduced||!('IntersectionObserver' in window))revealItems.forEach(item=>item.classList.add('visible'));else{const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.09});revealItems.forEach(item=>observer.observe(item))}

const navLinks=[...document.querySelectorAll('.topbar nav a')];
const navObserver=new IntersectionObserver(entries=>{const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(visible)navLinks.forEach(link=>link.classList.toggle('active',link.hash===`#${visible.target.id}`))},{rootMargin:'-30% 0px -60%',threshold:[0,.1,.5]});
['profile','journey','projects','contact'].forEach(id=>navObserver.observe(document.querySelector(`#${id}`)));

addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;document.querySelector('.scroll-progress i').style.width=`${max?scrollY/max*100:0}%`},{passive:true});
if(!reduced&&finePointer){
  const glow=document.querySelector('.pointer-glow');addEventListener('pointermove',event=>{glow.style.left=`${event.clientX}px`;glow.style.top=`${event.clientY}px`},{passive:true});
  const lab=document.querySelector('.lab-canvas');lab.addEventListener('pointermove',event=>{const rect=lab.getBoundingClientRect(),x=(event.clientX-rect.left)/rect.width-.5,y=(event.clientY-rect.top)/rect.height-.5;document.querySelector('.signal-output').style.transform=`translate(${x*8}px,${y*8}px)`});lab.addEventListener('pointerleave',()=>document.querySelector('.signal-output').style.transform='');
  document.querySelectorAll('.magnetic').forEach(item=>item.addEventListener('pointermove',event=>{const rect=item.getBoundingClientRect();item.style.transform=`translate(${(event.clientX-rect.left-rect.width/2)*.08}px,${(event.clientY-rect.top-rect.height/2)*.12}px)`}));document.querySelectorAll('.magnetic').forEach(item=>item.addEventListener('pointerleave',()=>item.style.transform=''));
}

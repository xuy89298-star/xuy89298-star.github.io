const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer=matchMedia('(pointer:fine)').matches;

const skillData={
  product:{index:'01',kicker:'FIELD / 01',title:'产品设计与执行',summary:'从识别问题、梳理流程到形成方案，并通过 AI 协同把想法推进为可运行的结果。',modules:[
    {title:'需求分析',label:'识别问题 · 明确目标',detail:'明确问题、用户与目标，为后续方案建立清晰起点。'},
    {title:'业务流程梳理',label:'角色 · 任务 · 节点',detail:'拆解角色、任务和关键节点，让复杂过程变得可理解。'},
    {title:'产品提案',label:'洞察 · 方案 · 表达',detail:'将洞察和解决思路组织成可沟通、可执行的方案。'},
    {title:'Vibe Coding',label:'描述 · 开发 · 调试',detail:'用自然语言与 AI 协同开发，在调试中快速验证想法。'}
  ]},
  ai:{index:'02',kicker:'FIELD / 02',title:'AI 创作与应用',summary:'根据创作和开发目标组合不同 AI 工具，把创意、素材与功能逐步转化为可交付成果。',modules:[
    {title:'剪映',label:'剪辑 · 节奏 · 成片',detail:'完成素材筛选、视频剪辑、节奏调整与成片优化。'},
    {title:'LibTV',label:'AI 视频 · 素材生成',detail:'围绕内容构思生成视频素材，并根据画面效果持续调整。'},
    {title:'即梦',label:'提示词 · 视觉生成',detail:'将抽象创意转化为具体场景，通过提示词迭代视觉结果。'},
    {title:'Codex',label:'开发 · 调试 · 迭代',detail:'用自然语言协同完成页面开发、问题定位和功能迭代。'}
  ]},
  data:{index:'03',kicker:'FIELD / 03',title:'数据处理与分析',summary:'使用表格、编程与数值工具整理研究数据，让原始信息转化为可判断、可表达的结果。',modules:[
    {title:'Excel',label:'整理 · 统计 · 表达',detail:'进行数据整理、基础统计与结果汇总，支持研究和项目判断。'},
    {title:'Python',label:'清洗 · 分析 · 自动化',detail:'通过脚本处理重复任务，完成数据清洗、分析与结果输出。'},
    {title:'MATLAB',label:'计算 · 模拟 · 验证',detail:'用于数值计算和研究模拟，辅助验证分析结果。'},
    {title:'数据清洗',label:'规范 · 缺失 · 一致性',detail:'处理字段格式、缺失值和异常数据，提升数据可用性与一致性。'}
  ]}
};
const journeyData={
  club:{type:'CAMPUS / CLUB',count:'03 ASPECTS',title:'校级英语社团｜副主席',summary:'围绕学生兴趣策划活动、整合宣传渠道并推进现场执行，在实践中理解从用户触达到活动体验的完整链路。',result:'活动策划 · 用户增长 · 渠道整合 · 现场组织',layout:'narrative',cards:[
    {title:'活动策划与落地',text:'策划并组织“草坪乐节”“校内外往来书信”等英语角活动，围绕学生兴趣设计活动形式，推动活动从创意策划到现场执行的完整落地。'},
    {title:'用户增长与推广',text:'主导草坪乐节前期海报设计与宣传策划，采用线上线下联动推广方式扩大活动覆盖面，最终吸引 500+ 人到场并参与活动。'},
    {title:'能力沉淀',text:'通过活动实践，积累用户兴趣洞察、宣传渠道整合与现场组织经验，深化对“用户触达—参与转化—活动体验”完整链路的理解。'}
  ]},
  innovation:{type:'CAMPUS / INNOVATION',count:'03 ASPECTS',title:'校级大学生创新创业训练计划｜项目第二负责人',summary:'围绕项目顺利结题，协助统筹跨专业团队，以目标拆解、数据分析和协作交付推动研究任务形成闭环。',result:'目标管理 · 数据分析 · 跨专业协作 · 成果交付',layout:'narrative',cards:[
    {title:'目标管理与项目推进',text:'以项目顺利结题为核心目标，协助统筹 5 人跨专业团队，拆解研究任务、明确成员分工与阶段性目标，协调项目进度，推动研究任务落地。'},
    {title:'数据处理与分析',text:'运用 Excel、Python、MATLAB 完成约 80 条研究数据的清洗、整理与分析，为研究报告撰写及研究结论提供数据支持。'},
    {title:'跨专业协作与成果交付',text:'协调不同专业成员的研究工作，整合研究成果并参与阶段性汇报，推动项目成功结题，最终交付 1 份完整研究报告，形成从目标制定、过程推进到成果交付的项目闭环。'}
  ]},
  achievement:{type:'CAMPUS / ACHIEVEMENT',count:'04 ACHIEVEMENTS',title:'持续积累的个人成果',summary:'奖学金、荣誉与技能证书记录了我的学习投入，也证明我具备持续完成目标的能力。',result:'学习能力 · 英语能力 · 计算机能力 · 持续投入',cards:[
    {tag:'奖学金',title:'校级二等奖学金',text:'在校期间获得校级二等奖学金。',note:'SCHOLARSHIP'},
    {tag:'荣誉',title:'院级优秀学生',text:'获得学院优秀学生荣誉。',note:'HONOR'},
    {tag:'语言能力',title:'大学英语四、六级',text:'通过大学英语四级与六级考试。',note:'CET-4 · CET-6'},
    {tag:'计算机能力',title:'全国计算机二级证书',text:'获得全国计算机等级考试二级证书。',note:'NCRE-2'}
  ]}
};
const projectData={
  writing:{index:'01 / 03',meta:'独立内容创作者 · 原创内容实践',kicker:'CONTENT CREATION × COMMERCIALIZATION',title:'独立内容创作者｜原创内容策划与商业化实践',lead:'从市场选题到内容生产，再以阅读反馈和商业结果验证创作策略。',items:[
    {title:'内容策划与独立执行',text:'独立完成 80+ 篇原创短篇小说，累计约 90 万字，负责市场选题、内容架构、文案撰写及作品交付，具备完整的内容策划与独立项目执行能力。'},
    {title:'市场洞察与数据驱动',text:'通过平台热门榜单、读者反馈及阅读数据分析用户偏好，动态调整创作题材、叙事方式与内容策略，持续优化作品的市场适配度。'},
    {title:'用户增长与商业化成果',text:'通过内容创作与策略调整，单篇作品最高获得 20 万+ 阅读量、实现单篇 3,000+ 元收入，形成从市场分析、内容生产到传播效果与商业价值验证的完整闭环。'}
  ]},
  aigc:{index:'02 / 03',meta:'AIGC 短视频创作 · 独立内容创作者',kicker:'AIGC × SHORT VIDEO',title:'AIGC 短视频创作｜独立内容创作者',lead:'围绕宠物主题，把抽象创意转化为可观看、可迭代的视频内容。',items:[
    {title:'AI 工具应用',text:'熟练使用即梦、LibTV、剪映等工具，结合 AI 视频生成与后期剪辑技术，完成从创意构思、素材生成到视频制作的完整流程。'},
    {title:'创意策划',text:'围绕宠物主题独立构思视频创意、故事情节及视觉呈现方式，将抽象创意转化为具体的视频内容，探索 AIGC 在创意表达中的应用。'},
    {title:'独立执行',text:'独立推进短视频制作全流程，通过调整生成提示词、筛选素材及优化剪辑效果，持续完善视频内容，具备自主学习、创意落地与迭代优化能力。'}
  ]},
  tracker:{index:'03 / 03',meta:'OfferFlow · 独立产品设计与开发',kicker:'PRODUCT DESIGN × AI DEVELOPMENT',title:'OfferFlow 求职跟踪管理平台｜独立产品设计与开发',lead:'从求职过程中的真实痛点出发，独立完成需求分析、产品设计、AI 协同开发与测试迭代。',link:'https://xuy89298-star.github.io/offerflow/',items:[
    {title:'需求分析与产品设计',text:'针对求职过程中岗位信息分散、投递进度难以追踪等痛点，独立梳理用户需求与业务流程，设计岗位管理、投递状态跟踪、数据统计等核心功能。'},
    {title:'AI 协同开发',text:'运用 Vibe Coding 开发模式，通过自然语言描述需求、拆解功能模块、与 AI 多轮交互及调试，推动产品从功能设计到可运行网站的落地。'},
    {title:'产品迭代与交付',text:'围绕实际使用场景持续开展功能测试与交互优化，完善数据持久化、投递看板及信息管理体验，形成从需求分析—产品设计—AI 辅助开发—测试迭代的完整产品闭环。'}
  ]}
};

function bindSkillModules(){
  document.querySelectorAll('[data-module-detail]').forEach(button=>button.addEventListener('click',()=>{
    document.querySelectorAll('[data-module-detail]').forEach(item=>item.classList.toggle('active',item===button));
    document.querySelector('#skill-focus').innerHTML=`<span>CURRENT FOCUS</span> <b>${button.querySelector('b').textContent}</b> · ${button.dataset.moduleDetail}`;
  }));
}
function selectSkill(key){
  const data=skillData[key];if(!data)return;
  document.querySelectorAll('[data-skill]').forEach(button=>{const active=button.dataset.skill===key;button.classList.toggle('active',active);button.setAttribute('aria-selected',active)});
  const display=document.querySelector('.skill-display');display.classList.add('switching');
  setTimeout(()=>{
    document.querySelector('#skill-kicker').textContent=data.kicker;document.querySelector('#skill-index').textContent=data.index;document.querySelector('#skill-title').textContent=data.title;document.querySelector('#skill-summary').textContent=data.summary;
    document.querySelector('#skill-modules').innerHTML=data.modules.map((module,index)=>`<button data-module-detail="${module.detail}"><span>${String(index+1).padStart(2,'0')}</span><b>${module.title}</b><small>${module.label}</small></button>`).join('');
    document.querySelector('#skill-focus').innerHTML='<span>CLICK A MODULE</span> 点击任一模块，查看我的使用方式。';bindSkillModules();display.classList.remove('switching');
  },180);
}
document.querySelectorAll('[data-skill]').forEach(button=>button.addEventListener('click',()=>selectSkill(button.dataset.skill)));
bindSkillModules();
document.querySelectorAll('[data-general]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-general]').forEach(item=>item.classList.toggle('active',item===button));
  document.querySelector('#general-status').innerHTML=`<b>${button.querySelector('b').textContent}</b> · ${button.dataset.general}`;
}));

document.querySelectorAll('[data-journey]').forEach(button=>button.addEventListener('click',()=>{
  const data=journeyData[button.dataset.journey];
  document.querySelectorAll('[data-journey]').forEach(item=>{item.classList.toggle('active',item===button);item.setAttribute('aria-selected',item===button)});
  const detail=document.querySelector('.campus-detail');detail.classList.add('changing');
  setTimeout(()=>{
    document.querySelector('#journey-type').textContent=data.type;document.querySelector('#journey-count').textContent=data.count;document.querySelector('#journey-title').textContent=data.title;document.querySelector('#journey-summary').textContent=data.summary;document.querySelector('#journey-result').textContent=data.result;
    const cards=document.querySelector('#journey-cards');
    cards.className=`campus-cards${data.layout==='narrative'?' narrative':''}`;
    cards.innerHTML=data.layout==='narrative'
      ?`<div class="experience-sheet">${data.cards.map((card,index)=>`<article><span>${String(index+1).padStart(2,'0')}</span><div><h4>${card.title}</h4><p>${card.text}</p></div></article>`).join('')}</div>`
      :data.cards.map(card=>`<article${card.placeholder?' class="placeholder"':''}><span>${card.tag}</span><h4>${card.title}</h4><p>${card.text}</p><small>${card.note}</small></article>`).join('');
    detail.classList.remove('changing');
  },160);
}));

const projectButtons=[...document.querySelectorAll('[data-project]')];
const panel=document.querySelector('.project-panel');
function selectProject(key,focus=false){
  const data=projectData[key],button=projectButtons.find(item=>item.dataset.project===key);if(!data||!button)return;
  projectButtons.forEach(item=>{item.classList.toggle('active',item===button);item.setAttribute('aria-selected',item===button)});
  panel.classList.add('switching');
  setTimeout(()=>{
    panel.className=`project-panel variant-${key}`;
    document.querySelector('#project-index').textContent=data.index;document.querySelector('#project-meta').textContent=data.meta;document.querySelector('#project-kicker').textContent=data.kicker;document.querySelector('#project-title').textContent=data.title;document.querySelector('#project-lead').textContent=data.lead;
    const liveLink=document.querySelector('#project-link');liveLink.hidden=!data.link;if(data.link)liveLink.href=data.link;
    document.querySelector('#project-narrative').innerHTML=data.items.map((item,index)=>`<article><span>${String(index+1).padStart(2,'0')}</span><div><h4>${item.title}</h4><p>${item.text}</p></div></article>`).join('');
    if(focus)panel.focus?.();
  },180);
}
projectButtons.forEach(button=>button.addEventListener('click',()=>selectProject(button.dataset.project)));
document.querySelector('.project-index').addEventListener('keydown',event=>{
  if(!['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(event.key))return;event.preventDefault();
  const current=projectButtons.findIndex(button=>button.classList.contains('active'));const next=(current+(event.key==='ArrowUp'||event.key==='ArrowLeft'?-1:1)+projectButtons.length)%projectButtons.length;projectButtons[next].focus();selectProject(projectButtons[next].dataset.project);
});
document.querySelectorAll('[data-jump]').forEach(button=>button.addEventListener('click',()=>{selectProject(button.dataset.jump);document.querySelector('#projects').scrollIntoView({behavior:reduced?'auto':'smooth'});}));

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
  const skillDisplay=document.querySelector('.skill-display');skillDisplay.addEventListener('pointermove',event=>{const rect=skillDisplay.getBoundingClientRect();skillDisplay.style.setProperty('--mx',`${event.clientX-rect.left}px`);skillDisplay.style.setProperty('--my',`${event.clientY-rect.top}px`)});
  document.querySelectorAll('.magnetic').forEach(item=>item.addEventListener('pointermove',event=>{const rect=item.getBoundingClientRect();item.style.transform=`translate(${(event.clientX-rect.left-rect.width/2)*.08}px,${(event.clientY-rect.top-rect.height/2)*.12}px)`}));document.querySelectorAll('.magnetic').forEach(item=>item.addEventListener('pointerleave',()=>item.style.transform=''));
}
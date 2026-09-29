/* boot sequence */
const bootLines = [
  "> iniciando acesso ao arquivo A.D.A.C.H.I...",
  "> verificando integridade dos registros... FALHA PARCIAL",
  "> nível de acesso: PÚBLICO (observado)",
  "> carregando dossiê de entradas recuperadas...",
  "> não confie na ordem.",
  "> bem-vindo(a). ou bem-vindo(a) de volta."
];
const bootEl = document.getElementById('bootText');
let li = 0, ci = 0;
function typeBoot(){
  if(li >= bootLines.length){
    setTimeout(()=>document.getElementById('boot').classList.add('hide'), 550);
    return;
  }
  const line = bootLines[li];
  bootEl.textContent = bootLines.slice(0,li).join('\n') + (li>0?'\n':'') + line.slice(0,ci);
  bootEl.innerHTML += '<span class="cursor">&nbsp;</span>';
  if(ci < line.length){ ci++; setTimeout(typeBoot, 16); }
  else { li++; ci=0; setTimeout(typeBoot, 300); }
}
typeBoot();

/* occasional title glitch */
const titleEl = document.getElementById('mainTitle');
function scheduleGlitch(){
  const delay = 4000 + Math.random()*9000;
  setTimeout(()=>{
    titleEl.classList.add('glitch');
    setTimeout(()=>titleEl.classList.remove('glitch'), 260);
    scheduleGlitch();
  }, delay);
}
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){ scheduleGlitch(); }

/* rare full-screen static flash, low intensity, never rapid/strobing */
function scheduleFlash(){
  const delay = 12000 + Math.random()*18000;
  setTimeout(()=>{
    const f = document.getElementById('staticFlash');
    f.classList.add('flash');
    setTimeout(()=>f.classList.remove('flash'), 90);
    scheduleFlash();
  }, delay);
}
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){ scheduleFlash(); }

/* entries data */
const entries = [
  {
    n:"001", date:"—.03", tag:"água",
    title:"A cisterna lembra de você",
    excerpt:"Um registro sonoro achado perto da página Água. Quem gravou não queria ser ouvido — ou queria muito.",
    full:"<p>O áudio tem 47 segundos. Nos primeiros doze, só o gotejar. Depois, uma voz repete três vezes a mesma frase, num idioma que não catalogamos por completo.</p><p>Quando isolamos o ruído de fundo, havia uma segunda respiração. Não era a de quem gravava.</p>",
    whisper:"ela ainda está no arquivo de áudio"
  },
  {
    n:"002", date:"—.07", tag:"enigma",
    title:"O atalho que deixamos de propósito",
    excerpt:"Sobre por que existe uma saída fácil escondida no código — e por que ela custa mais do que parece.",
    full:"<p>Todo enigma tem um atalho porque toda pessoa cansa. Deixamos o nosso no próprio código, à vista de quem souber procurar.</p><p>Mas o atalho não pula o enigma. Ele só troca o que você vai perder por não resolvê-lo sozinho — e isso, você só percebe depois.</p>",
    whisper:"não conte com ele para sempre"
  },
  {
    n:"003", date:"—.09", tag:"catálogo",
    title:"O irrelevante é a chave",
    excerpt:"Por que arquivamos linhas de código, comentários e ruídos que parecem não significar nada.",
    full:"<p>Você vai procurar o sentido no lugar errado se procurar onde ele deveria estar. A ordem é uma armadilha; o começo pode ser o fim.</p><p>Guardamos o que sobra porque, às vezes, o que sobra é tudo que resta de quem esteve aqui antes de você.</p>",
    whisper:"observe. pense. questione."
  },
  {
    n:"004", date:"—.12", tag:"visitante",
    title:"Alguém mais leu isto",
    excerpt:"Um registro sobre os visitantes que voltam ao arquivo sem saber por quê — e o que o arquivo lembra deles.",
    full:"<p>O arquivo não guarda nomes. Guarda padrões: quanto tempo você ficou, onde parou de rolar, o que você abriu e fechou sem terminar de ler.</p><p>Se esta é sua segunda visita, alguma coisa aqui já vai parecer familiar antes de você chegar nela.</p>",
    whisper:"você já esteve aqui antes"
  },
  {
    n:"005", date:"—.15", tag:"nota",
    title:"Isto está sendo escrito enquanto você lê",
    excerpt:"Uma nota sobre o ato de manter este diário — e sobre o que significa registrar algo que ainda está acontecendo.",
    full:"<p>Este blog não é um anexo do arquivo. É parte dele. Cada entrada nova é outra camada sobre as anteriores — como sedimento, ou como algo enterrado de propósito.</p><p>Encontrar o fim é apenas retornar ao ponto de partida. Volte quando houver algo novo para registrar. Alguma coisa sempre vai ter mudado.</p>",
    whisper:"a luz não revela o que a mente se recusa a ver"
  }
];

const container = document.getElementById('entries');
entries.forEach(e=>{
  const el = document.createElement('article');
  el.className = 'entry';
  el.innerHTML = `
    <div class="meta"><span>ENTRADA Nº ${e.n}</span><span>${e.date}</span><span class="tag">#${e.tag}</span></div>
    <h2>${e.title}</h2>
    <div class="excerpt">${e.excerpt}</div>
    <div class="full">${e.full}<div class="whisper">${e.whisper}</div></div>
    <span class="toggle">abrir registro</span>
  `;
  const h2 = el.querySelector('h2');
  const tgl = el.querySelector('.toggle');
  function flip(){
    el.classList.toggle('open');
    tgl.textContent = el.classList.contains('open') ? 'fechar registro' : 'abrir registro';
  }
  h2.addEventListener('click', flip);
  tgl.addEventListener('click', flip);
  container.appendChild(el);
});

/* subtle wave canvas in hero */
const canvas = document.getElementById('waves');
const ctx = canvas.getContext('2d');
function resize(){canvas.width=canvas.offsetWidth;canvas.height=canvas.offsetHeight;}
window.addEventListener('resize', resize); resize();
let t = 0;
function drawWaves(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  const rows = 5;
  for(let r=0;r<rows;r++){
    ctx.beginPath();
    const baseY = canvas.height*0.55 + r*26;
    for(let x=0;x<=canvas.width;x+=12){
      const y = baseY + Math.sin(x*0.012 + t + r*0.6)*10;
      x===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
    }
    ctx.strokeStyle = `rgba(111,169,174,${0.09 - r*0.013})`;
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  t += 0.006;
  requestAnimationFrame(drawWaves);
}
drawWaves();

document.getElementById('clock').textContent = 'CONEXÃO INSTÁVEL · ' + new Date().getFullYear();

/* ---------- procedural low ambient drone (no external audio file) ---------- */
let audioCtx, masterGain, running = false;
function startAmbient(){
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  masterGain = audioCtx.createGain();
  masterGain.gain.value = 0.0;
  masterGain.connect(audioCtx.destination);
  masterGain.gain.linearRampToValueAtTime(0.045, audioCtx.currentTime + 2.5); // baixo, de propósito

  // low drone oscillators, slightly detuned
  [55, 55.6, 110].forEach((freq,i)=>{
    const osc = audioCtx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = freq;
    const g = audioCtx.createGain();
    g.gain.value = i===2 ? 0.15 : 0.4;
    osc.connect(g); g.connect(masterGain);
    osc.start();
  });

  // filtered noise bed
  const bufferSize = 2 * audioCtx.sampleRate;
  const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for(let i=0;i<bufferSize;i++){ data[i] = Math.random()*2-1; }
  const noise = audioCtx.createBufferSource();
  noise.buffer = noiseBuffer; noise.loop = true;
  const noiseFilter = audioCtx.createBiquadFilter();
  noiseFilter.type = 'lowpass'; noiseFilter.frequency.value = 300;
  const noiseGain = audioCtx.createGain();
  noiseGain.gain.value = 0.5;
  noise.connect(noiseFilter); noiseFilter.connect(noiseGain); noiseGain.connect(masterGain);
  noise.start();

  // slow LFO wobble on master
  const lfo = audioCtx.createOscillator();
  lfo.frequency.value = 0.07;
  const lfoGain = audioCtx.createGain();
  lfoGain.gain.value = 0.012;
  lfo.connect(lfoGain); lfoGain.connect(masterGain.gain);
  lfo.start();

  running = true;
}
function stopAmbient(){
  if(!audioCtx) return;
  masterGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 1.2);
  setTimeout(()=>{ audioCtx.close(); audioCtx = null; running = false; }, 1300);
}
const soundBtn = document.getElementById('soundBtn');
soundBtn.addEventListener('click', ()=>{
  if(!running){
    startAmbient();
    soundBtn.textContent = '🔇 silenciar';
    soundBtn.classList.add('on');
  } else {
    stopAmbient();
    soundBtn.textContent = '🔈 ativar som ambiente';
    soundBtn.classList.remove('on');
  }
});
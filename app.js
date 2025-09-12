(function(){
  const LS_KEY = 'thinktank_data_v3';
  class ThinkTankApp{
    constructor(){
      this.data = this.getDefaultData();
      if(window.__CONFIG_JSON__) this.mergeExternal(window.__CONFIG_JSON__);
      const cached = localStorage.getItem(LS_KEY);
      if(cached){ try{ this.data = JSON.parse(cached);}catch(e){} }
      document.addEventListener('DOMContentLoaded',()=>{
        this.setupEventListeners(); this.renderAll();
      });
    }
    getDefaultData(){
      return {config:{project:{name:'ThinkTank IIBA × GECAM',deadline:'2025-12-01'},
        riskConfig:{levels:['bas','moyen','eleve'],labels:{bas:'Bas',moyen:'Moyen',eleve:'Élevé'}},
        statuses:['Icebox','A_faire','En_cours','En_revue','Termine']},
        contributeurs:[{id:'u1',nom:'Rosine',role:'Admin'},{id:'u2',nom:'William',role:'Admin'},{id:'u3',nom:'Eddy',role:'Coord'}],
        sousSections:[],jalons:[]};
    }
    mergeExternal(ex){ if(ex.config) this.data.config=Object.assign({},this.data.config,ex.config);
      if(Array.isArray(ex.contributeurs)) this.data.contributeurs=ex.contributeurs;
      if(Array.isArray(ex.sousSections)) this.data.sousSections=ex.sousSections;
      if(Array.isArray(ex.jalons)) this.data.jalons=ex.jalons; }
    setupEventListeners(){
      const bx=document.getElementById('exportExcel'); bx&&bx.addEventListener('click',()=>this.exportExcelMulti());
      const bj=document.getElementById('exportJson'); bj&&bj.addEventListener('click',()=>this.exportJson());
      const bi=document.getElementById('importExcel'); bi&&bi.addEventListener('click',()=>document.getElementById('inputExcel').click());
      const ii=document.getElementById('inputExcel'); ii&&ii.addEventListener('change',e=>this.importExcel(e));
    }
    renderAll(){ this.renderKanban(); this.renderAffectations(); this.renderRessources(); this.renderKPIs(); this.drawCharts(); }
    renderKanban(){ document.querySelectorAll('.list[data-status]').forEach(l=>l.innerHTML='');
      this.data.sousSections.forEach(s=>{const c=document.createElement('div');c.className='card';c.draggable=true;c.dataset.taskId=s.id;
        c.addEventListener('dragstart',ev=>ev.dataTransfer.setData('text/plain',s.id));
        c.innerHTML=`<div class="task-meta">${s.document} ${s.section} · ${s.sectionTitre||''}</div>
                     <div class="task-title" title="${s.document} · ${s.sectionTitre}">${s.titre}</div>`;
        const list=document.querySelector('.list[data-status="'+s.statut+'"]')||document.querySelector('.list[data-status="Icebox"]');
        list&&list.appendChild(c);}); }
    renderAffectations(){ const tb=document.getElementById('affectationsTableBody'); if(!tb) return;
      tb.innerHTML=this.data.sousSections.map(s=>{const coord=this.data.contributeurs.find(c=>c.id===s.coordinateur);
        const contribs=(s.contributeurs||[]).map(id=>this.data.contributeurs.find(c=>c.id===id)?.nom||id).join(', ');
        const options=this.data.contributeurs.map(c=>`<option value="${c.id}" ${c.id===s.coordinateur?'selected':''}>${c.nom}</option>`).join('');
        const contribOptions=this.data.contributeurs.map(c=>`<option value="${c.id}" ${s.contributeurs?.includes(c.id)?'selected':''}>${c.nom}</option>`).join('');
        return `<tr><td>${s.id}</td><td>${s.titre}</td><td>${s.document}</td>
          <td>${s.section} – ${s.sectionTitre}</td>
          <td><select data-role="coord" data-id="${s.id}"><option value="">—</option>${options}</select></td>
          <td><select multiple data-role="contrib" data-id="${s.id}">${contribOptions}</select></td>
          <td>${s.statut}</td><td>${s.echeance||''}</td>
          <td><button data-action="assign" data-id="${s.id}">Assigner</button></td></tr>`;}).join('');
      tb.querySelectorAll('button[data-action="assign"]').forEach(btn=>btn.onclick=()=>{
        const id=btn.dataset.id; const s=this.data.sousSections.find(x=>x.id===id);
        const coord=tb.querySelector(`select[data-role="coord"][data-id="${id}"]`).value;
        const contribSel=Array.from(tb.querySelector(`select[data-role="contrib"][data-id="${id}"]`).selectedOptions).map(o=>o.value);
        s.coordinateur=coord; s.contributeurs=contribSel; this.persist(); alert('Assigné!'); }); }
    renderRessources(){ const lb=document.getElementById('lbList'),gd=document.getElementById('gdList');
      if(!lb||!gd) return; const make=s=>`<div class="doc"><div class="title">${s.section}. ${s.sectionTitre}</div>
        <div class="muted small">${s.titre}</div><div class="links">${(s.referentiels||[]).map(r=>
          `<a href="${r.url||'#'}" target="_blank">${r.label||r}</a>`).join(' ')}</div></div>`;
      lb.innerHTML=this.data.sousSections.filter(s=>s.document==='Livre Blanc').map(make).join('');
      gd.innerHTML=this.data.sousSections.filter(s=>s.document==='Guide Pratique').map(make).join(''); }
    renderKPIs(){ const t=document.getElementById('kpiTasks'); if(t) t.textContent=this.data.sousSections.length; }
    drawCharts(){}
    exportJson(){const b=new Blob([JSON.stringify(this.data,null,2)],{type:'application/json'});
      const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='thinktank.json';a.click();}
    exportExcelMulti(){if(!window.XLSX)return;const wb=XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb,XLSX.utils.json_to_sheet(this.data.sousSections),'SousSections');
      XLSX.utils.book_append_sheet(wb,XLSX.utils.json_to_sheet(this.data.contributeurs),'Contributeurs');
      XLSX.utils.book_append_sheet(wb,XLSX.utils.json_to_sheet(this.data.jalons),'Jalons');
      XLSX.utils.book_append_sheet(wb,XLSX.utils.json_to_sheet([this.data.config.project]),'Projet');
      XLSX.writeFile(wb,'ThinkTank.xlsx');}
    importExcel(evt){const f=evt.target.files[0]; if(!f) return; const r=new FileReader();
      r.onload=e=>{const wb=XLSX.read(e.target.result,{type:'binary'});
        const SS=XLSX.utils.sheet_to_json(wb.Sheets['SousSections']); if(SS) this.data.sousSections=SS;
        const CC=XLSX.utils.sheet_to_json(wb.Sheets['Contributeurs']); if(CC) this.data.contributeurs=CC;
        const JL=XLSX.utils.sheet_to_json(wb.Sheets['Jalons']); if(JL) this.data.jalons=JL;
        this.persist(); this.renderAll();}; r.readAsBinaryString(f); }
    persist(){localStorage.setItem(LS_KEY,JSON.stringify(this.data));}
  }
  window.ThinkTankApp=ThinkTankApp;
  if(document.readyState==='complete'||document.readyState==='interactive') new ThinkTankApp();
  else document.addEventListener('DOMContentLoaded',()=>new ThinkTankApp());
})();

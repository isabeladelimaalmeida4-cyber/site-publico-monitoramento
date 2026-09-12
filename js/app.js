(function(){
  "use strict";

  /* ---------------- ICON SYSTEM ---------------- */
  // Minimal line-icon set (stroke based), consistent weight, replaces emoji for a
  // professional, institutional feel in line with a municipal services app.
  function svg(inner, size){
    size = size || 20;
    return '<svg class="icn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="'+size+'" height="'+size+
      '" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+inner+'</svg>';
  }
  var ICONS = {
    shield: '<path d="M12 2.5 4.5 5.5v5.2c0 5.2 3.4 8.7 7.5 10.8 4.1-2.1 7.5-5.6 7.5-10.8V5.5L12 2.5z"/><path d="m9 12 2 2 4-4.2"/>',
    map: '<polygon points="3 6 9 3.5 15 6 21 3.5 21 18 15 20.5 9 18 3 20.5"/><line x1="9" y1="3.5" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="20.5"/>',
    plus: '<circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>',
    search: '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.4" y2="16.4"/>',
    chart: '<line x1="4" y1="21" x2="4" y2="13"/><line x1="10" y1="21" x2="10" y2="7"/><line x1="16" y1="21" x2="16" y2="11"/><line x1="21" y1="21" x2="3" y2="21"/>',
    camera: '<path d="M4 8.5h3l1.4-2h7.2l1.4 2h3a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 20 20.5H4A1.5 1.5 0 0 1 2.5 19v-9A1.5 1.5 0 0 1 4 8.5z"/><circle cx="12" cy="14.2" r="3.4"/>',
    gps: '<circle cx="12" cy="12" r="6.2"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/><line x1="12" y1="2" x2="12" y2="5.3"/><line x1="12" y1="18.7" x2="12" y2="22"/><line x1="2" y1="12" x2="5.3" y2="12"/><line x1="18.7" y1="12" x2="22" y2="12"/>',
    check: '<circle cx="12" cy="12" r="9.5"/><polyline points="7.7 12.3 10.6 15.2 16.3 8.8"/>',
    pin: '<path d="M12 21.5s6.8-6.9 6.8-12.2a6.8 6.8 0 0 0-13.6 0c0 5.3 6.8 12.2 6.8 12.2z"/><circle cx="12" cy="9.3" r="2.4"/>',
    building: '<path d="M6 21.5V6.5L12 3l6 3.5v15"/><line x1="3" y1="21.5" x2="21" y2="21.5"/><line x1="9.5" y1="10" x2="9.5" y2="10.01"/><line x1="14.5" y1="10" x2="14.5" y2="10.01"/><line x1="9.5" y1="14" x2="9.5" y2="14.01"/><line x1="14.5" y1="14" x2="14.5" y2="14.01"/>',
    road: '<path d="M9.5 3h5l3.5 18h-4l-1-6h-2l-1 6h-4L9.5 3z"/><line x1="12" y1="8" x2="12" y2="10.5"/><line x1="12" y1="13.5" x2="12" y2="15.5"/>',
    bulb: '<path d="M12 2.5a6 6 0 0 0-3.6 10.8c.8.6 1.1 1.1 1.1 2.2h5a2.6 2.6 0 0 1 1.1-2.2A6 6 0 0 0 12 2.5z"/><line x1="9.8" y1="19" x2="14.2" y2="19"/><line x1="10.4" y1="21.5" x2="13.6" y2="21.5"/>',
    trash: '<line x1="3.5" y1="6.5" x2="20.5" y2="6.5"/><path d="M8.5 6.5v-2A1.5 1.5 0 0 1 10 3h4a1.5 1.5 0 0 1 1.5 1.5v2"/><path d="M18.3 6.5 17.4 20a1.5 1.5 0 0 1-1.5 1.4H8.1A1.5 1.5 0 0 1 6.6 20L5.7 6.5"/><line x1="10.3" y1="10.5" x2="10.3" y2="17"/><line x1="13.7" y1="10.5" x2="13.7" y2="17"/>',
    rain: '<path d="M17.5 16A4.5 4.5 0 0 0 16 7.2a6.2 6.2 0 0 0-11.9 2A4 4 0 0 0 5 17"/><line x1="8" y1="18.5" x2="7" y2="21.5"/><line x1="12.5" y1="18.5" x2="11.5" y2="21.5"/><line x1="17" y1="18.5" x2="16" y2="21.5"/>',
    cone: '<path d="M12 3 2.5 21h19L12 3z"/><line x1="9.3" y1="15.5" x2="14.7" y2="15.5"/><line x1="7.2" y1="19.3" x2="16.8" y2="19.3"/>',
    tree: '<path d="M12 2.5 7.5 9.8h2.6L6 16.2h3.2L6.5 21h11l-2.7-4.8h3.2l-4.1-6.4h2.6L12 2.5z"/><line x1="12" y1="21" x2="12" y2="16.2"/>',
    footprints: '<path d="M8 4.5c1.7 0 2.6 1.3 2.6 3s-.9 2.6-.9 4.4S11 15 11 17a2.4 2.4 0 0 1-4.8 0c0-1.6.9-2.8.9-4.5S5.4 10.4 5.4 8.4 6.3 4.5 8 4.5z"/><path d="M16 8.5c1.7 0 2.6 1.3 2.6 3s-.9 2.6-.9 4.4.9 2.6.9 4.6a2.4 2.4 0 0 1-4.8 0c0-1.6.9-2.8.9-4.5s-1.7-2.1-1.7-4.1.3-3.4 2-3.4z"/>',
    traffic: '<rect x="9" y="2.5" width="6" height="14" rx="2.6"/><circle cx="12" cy="6" r="1.15" fill="currentColor" stroke="none"/><circle cx="12" cy="9.5" r="1.15" fill="currentColor" stroke="none"/><circle cx="12" cy="13" r="1.15" fill="currentColor" stroke="none"/><line x1="12" y1="16.5" x2="12" y2="19"/><line x1="8" y1="21.5" x2="16" y2="21.5"/>',
    spark: '<line x1="12" y1="3" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="21"/><line x1="3" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="21" y2="12"/><line x1="5.8" y1="5.8" x2="9.2" y2="9.2"/><line x1="14.8" y1="14.8" x2="18.2" y2="18.2"/><line x1="18.2" y1="5.8" x2="14.8" y2="9.2"/><line x1="9.2" y1="14.8" x2="5.8" y2="18.2"/>',
    grid: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>'
  };
  function icon(name, size){ return svg(ICONS[name] || ICONS.spark, size); }

  var CAT_ICONS = {
    pavimentacao:"road", iluminacao:"bulb", limpeza:"trash", drenagem:"rain",
    transito:"traffic", outros:"spark"
  };

  /* ---------------- STATIC ICON SLOTS ---------------- */
  document.getElementById("brand-mark").innerHTML = icon("shield", 21);
  document.getElementById("photo-empty").innerHTML = icon("camera", 20);
  document.getElementById("gate-icon").innerHTML = icon("building", 26);
  document.getElementById("confirm-check").innerHTML = icon("check", 26);
  document.getElementById("btn-gps").innerHTML = icon("gps", 15) + '<span>Usar minha localização</span>';
  document.getElementById("btn-photo").innerHTML = icon("camera", 15) + '<span>Anexar foto (opcional)</span>';
  document.getElementById("btn-proto-search").innerHTML = icon("search", 15) + '<span>Buscar</span>';
  document.getElementById("proto-icon-slot").innerHTML = icon("search", 11);
  document.getElementById("proto-icon-slot").style.background = "var(--blue-700)";

  var TAB_META = [
    {view:"mapa", label:"Mapa", ic:"map"},
    {view:"registrar", label:"Registrar", ic:"plus"},
    {view:"protocolo", label:"Protocolo", ic:"search"},
    {view:"painel", label:"Painel", ic:"chart"}
  ];
  document.querySelectorAll(".tab-btn").forEach(function(btn, i){
    var m = TAB_META[i];
    btn.innerHTML = icon(m.ic, 20) + '<span>'+m.label+'</span>';
  });

  /* ---------------- CONFIG ---------------- */
  var CITY_CENTER = [-16.4706, -54.6356]; // Rondonópolis - MT
  var SUPABASE_URL = "https://lgffswhzrvnasvzqkvgt.supabase.co";
  var SUPABASE_ANON_KEY = "sb_publishable_LGudHVZsK68JzrXp_ITT9w_tFufz18K";
  var sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  var CATEGORIES = [
    {id:"pavimentacao", label:"Vias e calçadas"},
    {id:"iluminacao", label:"Iluminação"},
    {id:"limpeza", label:"Limpeza urbana"},
    {id:"drenagem", label:"Água e drenagem"},
    {id:"transito", label:"Trânsito e sinalização"},
    {id:"outros", label:"Outros"}
  ];

  var STATUSES = [
    {id:"recebido", label:"Recebido", hex:"#5C6570"},
    {id:"triagem", label:"Em triagem", hex:"#B8791A"},
    {id:"encaminhado", label:"Encaminhado", hex:"#5C6570"},
    {id:"atendimento", label:"Em atendimento", hex:"#B8791A"},
    {id:"validacao", label:"Aguardando validação", hex:"#B8791A"},
    {id:"resolvido", label:"Resolvido", hex:"#3A6B45"},
    {id:"duplicado", label:"Duplicado", hex:"#8A929B"},
    {id:"improcedente", label:"Improcedente", hex:"#A23B2E"},
    {id:"fora_competencia", label:"Fora da competência municipal", hex:"#8A929B"}
  ];
  var STATUS_FLOW = ["recebido","triagem","encaminhado","atendimento","validacao","resolvido"];

  // Bairros oficiais de Rondonópolis (principais, por população — fonte: IBGE/Wikipédia)
  var BAIRROS = [
    "Centro",
    "Centro B",
    "Cidade Natal",
    "Cidade Salmen",
    "Conjunto Hab. Cidade de Deus",
    "Conjunto Hab. Lucia Maggi",
    "Coophalis",
    "Jardim Ana Carla",
    "Jardim Atlântico",
    "Jardim Belo Horizonte",
    "Jardim Brasília",
    "Jardim Eldorado",
    "Jardim Europa",
    "Jardim Gramado",
    "Jardim Guanabara",
    "Jardim Hd",
    "Jardim Iguassu Primeira Parte",
    "Jardim Iguassu Segunda Parte",
    "Jardim Ipanema",
    "Jardim Irapua",
    "Jardim Liberdade 1ª parte",
    "Jardim Lourdes",
    "Jardim Maria Tereza",
    "Jardim Morumbi",
    "Jardim Nilmara",
    "Jardim Oliveira",
    "Jardim Padre Rodolfo Lunkenbei",
    "Jardim Paulista",
    "Jardim Pindorama 2a Parte",
    "Jardim Primavera Primeira Parte",
    "Jardim Primavera Segunda Parte",
    "Jardim Residencial São José",
    "Jardim Riviera",
    "Jardim Rondônia",
    "Jardim Rui Barbosa",
    "Jardim Santa Clara",
    "Jardim Santa Luz d'a'yara",
    "Jardim Serra Dourada 1ª Parte",
    "Jardim Sumaré",
    "Jardim São Bento",
    "Jardim Tancredo Neves",
    "Jardim Tropical",
    "Jardim das Flores",
    "Jardim das Hortências",
    "Jardim das Paineiras",
    "Jardim dos Pioneiros",
    "Loteamento Alves",
    "Loteamento Carlos Bezerra",
    "Loteamento Cellos",
    "Loteamento Monte Líbano",
    "Loteamento N. Senhora Aparecida",
    "Loteamento N. Senhora de Carmo",
    "Loteamento Parque das Rosas",
    "Loteamento Pedra Noventa",
    "Loteamento Quitéria Teruel Lopes",
    "Loteamento Zé Sobrinho",
    "Núcleo Hab. Marechal Rondon",
    "Núcleo Hab. São José Dois",
    "Núcleo Hab. São José Três",
    "Núcleo Hab. São José Um",
    "Núcleo Habitacional Participação",
    "Parque Real",
    "Parque Residencial Buriti",
    "Parque Residencial Cidade Alta",
    "Parque Residencial Universitário",
    "Parque São Jorge",
    "Parque Sagrada Família",
    "Residencial Margaridas",
    "Residencial Sítio Farias",
    "Residencial Vila Mineira",
    "Santa Cruz",
    "Vila Adriana",
    "Vila Amizade",
    "Vila Aurora 1ª parte",
    "Vila Aurora Segunda Parte",
    "Vila Birigui",
    "Vila Cardoso",
    "Vila Castelo",
    "Vila Esperança",
    "Vila Goulart",
    "Vila Ipiranga",
    "Vila Iracy",
    "Vila Itamaraty",
    "Vila Mamed",
    "Vila Mariana",
    "Vila Olinda",
    "Vila Operária",
    "Vila Planalto",
    "Vila Poroxo",
    "Vila Rica",
    "Vila São José",
    "Vila São Paulo",
    "Vila São Sebastião Dois",
    "Vila São Sebastião Um",
    "Vila União"
  ].sort(function(a,b){ return a.localeCompare(b,"pt-BR"); });

  function catById(id){ for(var i=0;i<CATEGORIES.length;i++) if(CATEGORIES[i].id===id) return CATEGORIES[i]; return CATEGORIES[CATEGORIES.length-1]; }
  function statusById(id){ for(var i=0;i<STATUSES.length;i++) if(STATUSES[i].id===id) return STATUSES[i]; return STATUSES[0]; }
  function catIcon(id){ return icon(CAT_ICONS[id] || "spark", 13); }

  /* ---------------- STATE ---------------- */
  var pickedLatLng = null;
  var selectedBairro = "";
  var pendingPhotoBlob = null;
  var mapPublic, mapPick, pickMarker;
  var publicMarkers = [];
  var activeCatFilter = "todas";
  var adminStatusFilter = "todas";
  var occurrences = []; // in-memory cache

  /* ---------------- STORAGE (Supabase) ----------------
     As ocorrências agora ficam de verdade no banco Postgres do Supabase,
     compartilhadas entre todos os cidadãos e a equipe da prefeitura —
     substituindo o antigo localStorage (que era isolado por navegador).
  ------------------------------------------------------------------- */

  // Converte uma linha do banco (snake_case) para o formato usado no app (camelCase)
  function rowToOccurrence(r){
    return {
      id: r.id,
      category: r.category,
      bairro: r.bairro,
      description: r.description,
      lat: r.lat,
      lng: r.lng,
      status: r.status,
      photo: r.photo,
      history: r.history || [],
      createdAt: r.created_at,
      updatedAt: r.updated_at
    };
  }

  async function loadOccurrences(){
    try{
      var res = await sb.from("ocorrencias").select("*").order("created_at", {ascending:false});
      if(res.error){ throw res.error; }
      occurrences = (res.data || []).map(rowToOccurrence);
    }catch(e){
      occurrences = [];
      showToast("Não foi possível carregar as ocorrências agora.");
    }
    return occurrences;
  }

  // Insere uma nova ocorrência no banco. Faz algumas tentativas em caso de
  // colisão rara de protocolo (chave primária duplicada).
  async function insertOccurrence(occurrence){
    for(var tries=0; tries<5; tries++){
      var row = {
        id: occurrence.id,
        category: occurrence.category,
        bairro: occurrence.bairro,
        description: occurrence.description,
        lat: occurrence.lat,
        lng: occurrence.lng,
        status: occurrence.status,
        photo: occurrence.photo,
        history: occurrence.history,
        created_at: occurrence.createdAt,
        updated_at: occurrence.updatedAt
      };
      var res = await sb.from("ocorrencias").insert(row).select().single();
      if(!res.error){ return rowToOccurrence(res.data); }
      // 23505 = violação de chave única (protocolo já existe) — gera outro e tenta de novo
      if(res.error.code === "23505"){
        occurrence.id = nextProtocol();
        row.id = occurrence.id;
        continue;
      }
      throw res.error;
    }
    throw new Error("Não foi possível gerar um protocolo único. Tente novamente.");
  }

  // Atualiza o status de uma ocorrência. Só funciona se quem estiver logado
  // tiver sessão de Administrador/Editor no Supabase (ver RLS em schema-ocorrencias.sql).
  // Chamado apenas pela aba "Painel" — se não houver sessão, o Supabase recusa a
  // alteração e devolve um erro, que tratamos mostrando um aviso ao usuário.
  async function updateOccurrenceStatus(id, novoStatus, novoHistoryEntry){
    var occ = occurrences.find(function(o){ return o.id===id; });
    var history = (occ ? occ.history.slice() : []);
    history.push(novoHistoryEntry);
    var res = await sb.from("ocorrencias")
      .update({ status: novoStatus, updated_at: novoHistoryEntry.date, history: history })
      .eq("id", id)
      .select()
      .single();
    if(res.error){ throw res.error; }
    return rowToOccurrence(res.data);
  }

  function nextProtocol(){
    // Código único: RDN + dois blocos de três números aleatórios (000–999), ex: RDN-482-917
    var a = String(Math.floor(Math.random()*1000)).padStart(3,"0");
    var b = String(Math.floor(Math.random()*1000)).padStart(3,"0");
    return "RDN-" + a + "-" + b;
  }

  /* ---------------- TOAST ---------------- */
  var toastTimer;
  function showToast(msg){
    var t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ t.classList.remove("show"); }, 2400);
  }

  /* ---------------- NAV ---------------- */
  var tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach(function(btn){
    btn.addEventListener("click", function(){ switchView(btn.getAttribute("data-view")); });
  });
  document.getElementById("btn-hero-registrar").addEventListener("click", function(){ switchView("registrar"); });

  function switchView(name){
    document.querySelectorAll(".view").forEach(function(v){ v.classList.remove("active"); });
    document.getElementById("view-"+name).classList.add("active");
    tabButtons.forEach(function(b){ b.classList.toggle("active", b.getAttribute("data-view")===name); });
    if(name === "mapa"){
      setTimeout(function(){ if(mapPublic) mapPublic.invalidateSize(); }, 50);
      renderPublicMarkers();
    }
    if(name === "registrar"){
      setTimeout(function(){ if(mapPick) mapPick.invalidateSize(); }, 50);
    }
    if(name === "painel" && document.getElementById("painel-content").style.display !== "none"){
      renderPainel();
    }
  }

  /* ---------------- CATEGORY FILTER CHIPS (mapa) ---------------- */
  function buildCatFilters(){
    var wrap = document.getElementById("cat-filters");
    var all = [{id:"todas", label:"Todas", ic:"grid"}].concat(CATEGORIES);
    wrap.innerHTML = "";
    all.forEach(function(c){
      var chip = document.createElement("div");
      chip.className = "chip" + (activeCatFilter===c.id ? " active":"");
      chip.innerHTML = (c.ic ? icon(c.ic, 13) : catIcon(c.id)) + '<span>'+c.label+'</span>';
      chip.addEventListener("click", function(){
        activeCatFilter = c.id;
        buildCatFilters();
        renderPublicMarkers();
      });
      wrap.appendChild(chip);
    });
  }

  function buildLegend(){
    var wrap = document.getElementById("legend-strip");
    wrap.innerHTML = "";
    STATUSES.slice(0,6).forEach(function(s){
      var el = document.createElement("span");
      el.innerHTML = '<span class="legend-dot" style="background:'+s.hex+'"></span>'+s.label;
      wrap.appendChild(el);
    });
  }

  /* ---------------- BAIRRO SELECT (registrar) ---------------- */
  function buildBairroSelect(){
    var sel = document.getElementById("bairro-select");
    var html = '<option value="" disabled selected>Selecione o bairro</option>';
    BAIRROS.forEach(function(b){ html += '<option value="'+b+'">'+b+'</option>'; });
    sel.innerHTML = html;
    sel.addEventListener("change", function(){ selectedBairro = sel.value; });
  }

  /* ---------------- MAPS ---------------- */
  function initMaps(){
    if(typeof L === "undefined"){
      // Leaflet não carregou (ex: sem conexão) — evita travar o app e avisa o usuário.
      ["map-public","map-pick"].forEach(function(id){
        var el = document.getElementById(id);
        if(el) el.innerHTML = '<div class="empty-note">Não foi possível carregar o mapa. Verifique sua conexão com a internet e recarregue a página.</div>';
      });
      return;
    }
    mapPublic = L.map("map-public", {zoomControl:true}).setView(CITY_CENTER, 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom:19, attribution:'&copy; OpenStreetMap'
    }).addTo(mapPublic);

    mapPick = L.map("map-pick", {zoomControl:false}).setView(CITY_CENTER, 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom:19, attribution:'&copy; OpenStreetMap'
    }).addTo(mapPick);

    mapPick.on("click", function(e){ setPickedLocation(e.latlng.lat, e.latlng.lng); });

    // Garante que o mapa ocupe corretamente o espaço disponível em qualquer dispositivo/orientação.
    window.addEventListener("load", function(){ mapPublic.invalidateSize(); });
    window.addEventListener("resize", function(){
      mapPublic.invalidateSize();
      if(mapPick) mapPick.invalidateSize();
    });
    setTimeout(function(){ mapPublic.invalidateSize(); }, 300);
  }

  function setPickedLocation(lat,lng){
    pickedLatLng = {lat:lat, lng:lng};
    if(pickMarker) mapPick.removeLayer(pickMarker);
    pickMarker = L.circleMarker([lat,lng], {radius:9, color:"#F0A631", weight:3, fillColor:"#F0A631", fillOpacity:0.5}).addTo(mapPick);
    mapPick.panTo([lat,lng]);
  }

  document.getElementById("btn-gps").addEventListener("click", function(){
    if(!mapPick){ showToast("Mapa indisponível no momento."); return; }
    if(!navigator.geolocation){ showToast("Geolocalização indisponível neste dispositivo."); return; }
    showToast("Obtendo localização...");
    navigator.geolocation.getCurrentPosition(function(pos){
      setPickedLocation(pos.coords.latitude, pos.coords.longitude);
      mapPick.setView([pos.coords.latitude,pos.coords.longitude], 16);
      showToast("Localização definida.");
    }, function(){
      showToast("Não foi possível obter sua localização.");
    });
  });

  function renderPublicMarkers(){
    if(!mapPublic) return;
    publicMarkers.forEach(function(m){ mapPublic.removeLayer(m); });
    publicMarkers = [];
    var list = activeCatFilter==="todas" ? occurrences : occurrences.filter(function(o){ return o.category===activeCatFilter; });
    list.forEach(function(o){
      var st = statusById(o.status);
      var cat = catById(o.category);
      var marker = L.circleMarker([o.lat,o.lng], {
        radius:8, color:st.hex, weight:2, fillColor:st.hex, fillOpacity:0.65
      });
      var popup = '<div class="popup-cat">'+catIcon(o.category)+cat.label+'</div>'+
        (o.bairro ? '<div style="font-size:11.5px;color:var(--ink-soft);font-weight:600;margin-top:2px;">'+escapeHtml(o.bairro)+'</div>' : '')+
        '<div class="popup-desc">'+escapeHtml(o.description||"")+'</div>'+
        '<span class="popup-status" style="background:'+st.hex+'">'+st.label+'</span>'+
        '<div class="popup-proto">Protocolo: '+o.id+'</div>';
      marker.bindPopup(popup);
      marker.addTo(mapPublic);
      publicMarkers.push(marker);
    });
  }

  function escapeHtml(s){
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  /* ---------------- PHOTO ---------------- */
  document.getElementById("btn-photo").addEventListener("click", function(){
    document.getElementById("photo-input").click();
  });
  document.getElementById("photo-input").addEventListener("change", function(e){
    var file = e.target.files[0];
    if(!file) return;
    var reader = new FileReader();
    reader.onload = function(ev){
      var img = new Image();
      img.onload = function(){
        var maxW = 1280; // qualidade boa o bastante pra equipe avaliar o problema
        var scale = Math.min(1, maxW/img.width);
        var canvas = document.createElement("canvas");
        canvas.width = img.width*scale;
        canvas.height = img.height*scale;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        var wrap = document.getElementById("photo-preview-wrap");
        wrap.innerHTML = '<img class="photo-thumb" src="'+canvas.toDataURL("image/jpeg",0.5)+'">';
        // Blob de verdade (menor que base64) — é o que sobe pro Supabase Storage no envio
        canvas.toBlob(function(blob){ pendingPhotoBlob = blob; }, "image/jpeg", 0.72);
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  });

  // Envia a foto pro Supabase Storage e devolve a URL pública (ou null se não houver foto/falhar)
  async function uploadPhotoIfAny(protocolo){
    if(!pendingPhotoBlob) return null;
    var path = protocolo + "-" + Date.now() + ".jpg";
    var up = await sb.storage.from("ocorrencias-fotos").upload(path, pendingPhotoBlob, { contentType: "image/jpeg", upsert: false });
    if(up.error) return null;
    var pub = sb.storage.from("ocorrencias-fotos").getPublicUrl(path);
    return pub.data ? pub.data.publicUrl : null;
  }

  /* ---------------- SUBMIT ---------------- */
  document.getElementById("btn-submit").addEventListener("click", async function(){
    if(!selectedBairro){ showToast("Selecione o bairro."); return; }
    if(!pickedLatLng){ showToast("Marque a localização no mapa."); return; }
    var desc = document.getElementById("desc-input").value.trim();
    if(!desc){ showToast("Descreva o problema."); return; }

    var btn = this;
    btn.disabled = true; btn.textContent = "Enviando...";

    var proto = nextProtocol();
    var now = new Date().toISOString();
    var photoUrl = await uploadPhotoIfAny(proto);
    var occurrence = {
      id: proto,
      category: "outros", // a categorização fina fica a cargo da equipe, no painel administrativo
      bairro: selectedBairro,
      description: desc,
      lat: pickedLatLng.lat,
      lng: pickedLatLng.lng,
      status: "recebido",
      photo: photoUrl,
      createdAt: now,
      updatedAt: now,
      history: [{status:"recebido", date:now}]
    };

    try{
      var saved = await insertOccurrence(occurrence);
      occurrences.unshift(saved);
      document.getElementById("confirm-proto").textContent = saved.id;
      document.getElementById("registrar-form").style.display = "none";
      document.getElementById("registrar-confirm").style.display = "block";
      renderPublicMarkers();
    }catch(e){
      showToast("Não foi possível registrar agora. Tente novamente.");
    }

    btn.disabled = false; btn.innerHTML = "Enviar ocorrência";
  });

  document.getElementById("btn-new").addEventListener("click", function(){
    selectedBairro = "";
    pendingPhotoBlob = null;
    pickedLatLng = null;
    document.getElementById("desc-input").value = "";
    document.getElementById("bairro-select").selectedIndex = 0;
    document.getElementById("photo-preview-wrap").innerHTML = '<div class="photo-empty" id="photo-empty">'+icon("camera",20)+'</div>';
    if(pickMarker){ mapPick.removeLayer(pickMarker); pickMarker=null; }
    document.getElementById("registrar-form").style.display = "block";
    document.getElementById("registrar-confirm").style.display = "none";
  });

  /* ---------------- PROTOCOLO SEARCH ---------------- */
  document.getElementById("btn-proto-search").addEventListener("click", async function(){
    var val = document.getElementById("proto-input").value.trim().toUpperCase();
    var out = document.getElementById("proto-result");
    if(!val){ out.innerHTML = ""; return; }
    out.innerHTML = '<div class="empty-note">Buscando...</div>';
    var res = await sb.from("ocorrencias").select("*").eq("id", val).maybeSingle();
    if(res.error || !res.data){
      out.innerHTML = '<div class="empty-note">Nenhuma ocorrência encontrada com esse protocolo.</div>';
      return;
    }
    var found = rowToOccurrence(res.data);
    var st = statusById(found.status);
    var cat = catById(found.category);
    var html = '<div class="result-card">'+
      '<div class="result-head"><div><div class="popup-cat">'+catIcon(found.category)+cat.label+'</div>'+
      (found.bairro ? '<div style="font-size:11.5px;color:var(--ink-soft);font-weight:600;margin-top:3px;">'+escapeHtml(found.bairro)+'</div>' : '')+
      '<div style="font-size:13px;margin-top:5px;">'+escapeHtml(found.description)+'</div></div>'+
      '<span class="status-pill" style="background:'+st.hex+'">'+st.label+'</span></div>'+
      '<div class="timeline">';
    found.history.forEach(function(h, idx){
      var hs = statusById(h.status);
      html += '<div class="timeline-item'+(idx===found.history.length-1?" is-last":"")+'"><div class="t-status">'+hs.label+'</div>'+
        '<div class="t-date">'+formatDate(h.date)+'</div></div>';
    });
    html += '</div></div>';
    out.innerHTML = html;
  });

  function formatDate(iso){
    var d = new Date(iso);
    return d.toLocaleDateString('pt-BR') + " às " + d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});
  }

  /* ---------------- PAINEL ---------------- */
  document.getElementById("btn-enter-panel").addEventListener("click", async function(){
    document.getElementById("painel-gate").style.display = "none";
    document.getElementById("painel-content").style.display = "flex";
    document.getElementById("painel-content").style.flexDirection = "column";
    await loadOccurrences();
    renderPainel();
  });

  function buildAdmFilters(){
    var wrap = document.getElementById("adm-filters");
    var all = [{id:"todas", label:"Todas"}].concat(STATUSES);
    wrap.innerHTML = "";
    all.forEach(function(s){
      var chip = document.createElement("div");
      chip.className = "chip" + (adminStatusFilter===s.id ? " active":"");
      chip.textContent = s.label;
      chip.addEventListener("click", function(){
        adminStatusFilter = s.id;
        buildAdmFilters();
        renderAdmList();
      });
      wrap.appendChild(chip);
    });
  }

  function renderPainel(){
    var open = occurrences.filter(function(o){ return o.status!=="resolvido" && o.status!=="duplicado" && o.status!=="improcedente"; });
    var resolved = occurrences.filter(function(o){ return o.status==="resolvido"; });
    var rate = occurrences.length ? Math.round((resolved.length/occurrences.length)*100) : 0;

    var avgHours = "—";
    if(resolved.length){
      var totalMs = 0, n=0;
      resolved.forEach(function(o){
        var start = new Date(o.createdAt).getTime();
        var end = new Date(o.updatedAt).getTime();
        if(end>start){ totalMs += (end-start); n++; }
      });
      if(n>0) avgHours = Math.max(1, Math.round(totalMs/n/3600000)) + "h";
    }

    document.getElementById("kpi-grid").innerHTML =
      '<div class="kpi"><div class="num">'+occurrences.length+'</div><div class="lbl">Total de ocorrências</div></div>'+
      '<div class="kpi"><div class="num">'+open.length+'</div><div class="lbl">Em aberto</div></div>'+
      '<div class="kpi"><div class="num">'+rate+'%</div><div class="lbl">Taxa de resolução</div></div>'+
      '<div class="kpi"><div class="num">'+avgHours+'</div><div class="lbl">Tempo médio de resolução</div></div>';

    var catCounts = {};
    CATEGORIES.forEach(function(c){ catCounts[c.id]=0; });
    occurrences.forEach(function(o){ catCounts[o.category] = (catCounts[o.category]||0)+1; });
    var maxCat = Math.max(1, Math.max.apply(null, Object.values(catCounts)));
    var barCatHtml = "";
    CATEGORIES.forEach(function(c){
      var v = catCounts[c.id]||0;
      barCatHtml += '<div class="bar-row"><div class="bar-label">'+catIcon(c.id)+c.label+'</div>'+
        '<div class="bar-track"><div class="bar-fill" style="width:'+(v/maxCat*100)+'%"></div></div>'+
        '<div class="bar-num">'+v+'</div></div>';
    });
    document.getElementById("bar-cat").innerHTML = barCatHtml || '<div class="empty-note">Sem dados ainda.</div>';

    var stCounts = {};
    STATUSES.forEach(function(s){ stCounts[s.id]=0; });
    occurrences.forEach(function(o){ stCounts[o.status] = (stCounts[o.status]||0)+1; });
    var maxSt = Math.max(1, Math.max.apply(null, Object.values(stCounts)));
    var barStHtml = "";
    STATUSES.forEach(function(s){
      var v = stCounts[s.id]||0;
      barStHtml += '<div class="bar-row"><div class="bar-label">'+s.label+'</div>'+
        '<div class="bar-track"><div class="bar-fill" style="width:'+(v/maxSt*100)+'%; background:'+s.hex+'"></div></div>'+
        '<div class="bar-num">'+v+'</div></div>';
    });
    document.getElementById("bar-status").innerHTML = barStHtml;

    renderBairroRanking();
    buildAdmFilters();
    renderAdmList();
  }

  function renderBairroRanking(filterText){
    var wrap = document.getElementById("bar-bairro");
    if(!wrap) return;
    var bairroCounts = {};
    BAIRROS.forEach(function(b){ bairroCounts[b] = 0; });
    occurrences.forEach(function(o){
      if(o.bairro){ bairroCounts[o.bairro] = (bairroCounts[o.bairro]||0) + 1; }
    });
    var list = Object.keys(bairroCounts).map(function(b){ return {name:b, count:bairroCounts[b]}; });
    var q = (filterText||"").trim().toLowerCase();
    if(q){ list = list.filter(function(x){ return x.name.toLowerCase().indexOf(q) !== -1; }); }
    // mais ocorrências primeiro; empate desempatado por ordem alfabética
    list.sort(function(a,b){ return b.count - a.count || a.name.localeCompare(b.name,"pt-BR"); });
    var maxB = Math.max(1, Math.max.apply(null, list.map(function(x){ return x.count; }).concat([0])));
    if(!list.length){
      wrap.innerHTML = '<div class="empty-note">Nenhum bairro encontrado.</div>';
      return;
    }
    var html = "";
    list.forEach(function(x){
      html += '<div class="bar-row"><div class="bar-label" title="'+escapeHtml(x.name)+'">'+escapeHtml(x.name)+'</div>'+
        '<div class="bar-track"><div class="bar-fill" style="width:'+(x.count/maxB*100)+'%"></div></div>'+
        '<div class="bar-num">'+x.count+'</div></div>';
    });
    wrap.innerHTML = html;
  }

  document.getElementById("bairro-rank-search").addEventListener("input", function(){
    renderBairroRanking(this.value);
  });

  function renderAdmList(){
    var wrap = document.getElementById("adm-list");
    var list = occurrences.slice().sort(function(a,b){ return new Date(b.createdAt)-new Date(a.createdAt); });
    if(adminStatusFilter!=="todas"){
      list = list.filter(function(o){ return o.status===adminStatusFilter; });
    }
    if(!list.length){
      wrap.innerHTML = '<div class="empty-note">Nenhuma ocorrência registrada ainda. Registre uma na aba "Registrar" para ver os dados aqui.</div>';
      return;
    }
    wrap.innerHTML = "";
    list.forEach(function(o){
      var cat = catById(o.category);
      var card = document.createElement("div");
      card.className = "adm-card";
      var options = STATUSES.map(function(s){
        return '<option value="'+s.id+'"'+(s.id===o.status?" selected":"")+'>'+s.label+'</option>';
      }).join("");
      card.innerHTML =
        '<div class="top-row"><span class="proto-mini">'+o.id+'</span><span class="date-mini">'+formatDate(o.createdAt)+'</span></div>'+
        '<div class="cat-mini">'+catIcon(o.category)+cat.label+(o.bairro ? ' · '+escapeHtml(o.bairro) : '')+'</div>'+
        '<div class="desc-mini">'+escapeHtml(o.description)+'</div>'+
        '<select data-id="'+o.id+'">'+options+'</select>';
      wrap.appendChild(card);
    });
    wrap.querySelectorAll("select").forEach(function(sel){
      sel.addEventListener("change", async function(){
        var id = sel.getAttribute("data-id");
        var occ = occurrences.find(function(o){ return o.id===id; });
        if(!occ) return;
        var novoStatus = sel.value;
        var entry = {status:novoStatus, date:new Date().toISOString()};
        try{
          var updated = await updateOccurrenceStatus(id, novoStatus, entry);
          var idx = occurrences.findIndex(function(o){ return o.id===id; });
          if(idx>-1) occurrences[idx] = updated;
          renderPainel();
          renderPublicMarkers();
          showToast("Status atualizado.");
        }catch(e){
          sel.value = occ.status; // reverte a seleção visualmente
          showToast("Você precisa estar logado como equipe municipal (Administrador/Editor) no Painel Administrativo para alterar o status.");
        }
      });
    });
  }

  /* ---------------- INIT ---------------- */
  function makeBuilding(spinner, cx, cy, w, d, h, cTop, cFront, cSide){
    var CENTER = 160; // metade de 320px (tamanho do palco .city-scene)
    var wrap = document.createElement("div");
    wrap.className = "bldg";
    wrap.style.left = (CENTER + cx - w/2) + "px";
    wrap.style.top = (CENTER + cy - h) + "px"; // base encostada no chão (z=0 fica na base)
    wrap.style.width = w + "px";
    wrap.style.height = h + "px";

    var front = document.createElement("div");
    front.className = "f";
    front.style.cssText = "left:0; top:0; width:"+w+"px; height:"+h+"px; background:"+cFront+"; transform:translateZ("+(d/2)+"px);";

    var side = document.createElement("div");
    side.className = "f";
    side.style.cssText = "left:"+w+"px; top:0; width:"+d+"px; height:"+h+"px; background:"+cSide+"; transform-origin:left; transform:rotateY(90deg);";

    var top = document.createElement("div");
    top.className = "f";
    top.style.cssText = "left:0; top:0; width:"+w+"px; height:"+d+"px; background:"+cTop+"; transform-origin:top; transform:rotateX(90deg);";

    wrap.appendChild(front); wrap.appendChild(side); wrap.appendChild(top);
    spinner.appendChild(wrap);
  }

  function buildCityScene(){
    var spinner = document.getElementById("city-spinner");
    if(!spinner) return;

    var ground1 = document.createElement("div"); ground1.className = "ground-plate";
    var ground2 = document.createElement("div"); ground2.className = "ground-ring";
    spinner.appendChild(ground1); spinner.appendChild(ground2);

    // Paleta: azul-marinho para as fachadas, dourado só no prédio-marco (identidade da marca)
    var NAVY_F = "#123B6B", NAVY_S = "#0A2748", NAVY_T = "#1E5C9E";
    var GOLD_F = "#93600F", GOLD_S = "#6E480B", GOLD_T = "#B8791A";

    // Layout de um quarteirão irregular em torno do centro (cx=0, cy=0 é o eixo de giro)
    var buildings = [
      { x:-70, y:-30, w:34, d:34, h:58 },
      { x:-22, y:-55, w:30, d:30, h:88 },
      { x:  20,y:-40, w:26, d:26, h:46 },
      { x:  62,y:-18, w:32, d:32, h:70 },
      { x:-55, y: 20, w:26, d:26, h:36 },
      { x: -8, y: 15, w:24, d:24, h:112, landmark:true }, // prédio-marco, dourado
      { x:  34,y: 35, w:30, d:30, h:54 },
      { x:  70,y: 30, w:24, d:24, h:30 },
      { x:-40, y: 62, w:22, d:22, h:28 },
      { x:   5,y: 62, w:26, d:26, h:40 }
    ];

    buildings.forEach(function(b){
      if(b.landmark){
        makeBuilding(spinner, b.x, b.y, b.w, b.d, b.h, GOLD_T, GOLD_F, GOLD_S);
      }else{
        makeBuilding(spinner, b.x, b.y, b.w, b.d, b.h, NAVY_T, NAVY_F, NAVY_S);
      }
    });
  }

  function initIntroSplash(){
    var splash = document.getElementById("intro-splash");
    if(!splash) return;
    try{ buildCityScene(); }catch(e){}
    // Some do DOM depois da animação (o CSS já esconde visualmente antes disso)
    setTimeout(function(){ if(splash.parentNode) splash.parentNode.removeChild(splash); }, 3700);
  }

  async function init(){
    initIntroSplash();
    buildCatFilters();
    buildLegend();
    buildBairroSelect();
    initMaps();
    await loadOccurrences();
    renderPublicMarkers();
  }
  init();

})();

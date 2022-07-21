function mapaPosicaoLocal(){
    let mapa;
     /* "Pegar" a posição do usuário pelo seu navegador web 
       O próprio navegador avisa e pede permissão ao usuário
       para que a sua localização atual seja utilizada */
    navigator.geolocation.getCurrentPosition(function(location) { 
      /* Objeto com a latitute de longitude da localicação atual do usuário */
      let latitudeLongitudeAtual = {
        lat: location.coords.latitude, 
        lng: location.coords.longitude
      }; 
      
      /* Elemento que representa o mapa no documento HTML */
      let divMapa = document.getElementById('mapa');
      
      /* Cria o mapa, tendo como base a localização do dispositivo do usuário*/
      mapa = new google.maps.Map(divMapa, {
        center: latitudeLongitudeAtual, // centro do mapa
        zoom: 16 // zoom do mapa
      });
      
  
      /* Criação de um novo marcador no mapa */
      let marker = new google.maps.Marker({
        position: latitudeLongitudeAtual, /* posição do marcador */
        map: mapa, // elemento do mapa
        title: 'Minha posição' // título (texto) que aparece sobre o marcador (quando o mouse fica sobre o elemento)
      });
    });  
  }
  
  /* Mapeamento com múltiplos marcadores */
  
  function mapaMultiplosMarcadores(){
    let mapaMultiplosMarcadores;
    let divMapaMarcadores = document.getElementById('mapa-marcadores');
    let locais = [ 
      { 
        nome: 'IFMS',
        descricao: 'Instituto Federal de Mato Grosso do Sul - Campus Dourados',
        latitudeLongitude: { lat: -22.208694,  lng: -54.764941 }
      },
      { 
        nome: 'Shopping Avenida Center',
        descricao: 'Shopping Avenida Center de Dourados',
        latitudeLongitude: { lat: -22.226489,  lng: -54.793711 }
      },
      { 
        nome: 'Usina Velha',
        descricao: 'Usina Velha: ponto turístico de dourados',
        latitudeLongitude: { lat: -22.2104014, lng: -54.819986 }
      }
    ];  
    
    mapaMultiplosMarcadores = new google.maps.Map(divMapaMarcadores, {
      center: locais[0].latitudeLongitude, // IFMS como centro do Mapa
      zoom: 13 // zoom do mapa
    });
       
    /* Criar múltiplos marcadores */
    
    locais.forEach(function(local){
      /* Criação de um novo marcador no mapa */
      let marker = new google.maps.Marker({
        position: local.latitudeLongitude,
        map: mapaMultiplosMarcadores,
        title: local.nome
      }); 
      
      /* Conteúdo HTML que representa a janela de informações que aparece quando o marcador é selecionado. Essa estrutura HTML é padrão da API de mapas do Google */
      let conteudoJanelaInformacoes = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">'+ local.nome + '</h1>'+
              '<div id="bodyContent">'+
                '<p>' + local.descricao + '</p>'+
              '</div>'+
          '</div>';
  
       /* Instanciação de uma nova janela de informações */
      let infowindow = new google.maps.InfoWindow({
        content: conteudoJanelaInformacoes
      });
      
      /* Quando um marcador é 'clicado', a janela de informações é aberta sobre o mapa */
      marker.addListener('click', function() {
        infowindow.open(mapaMultiplosMarcadores, marker);
      });    
    });
  }
        
  /* Função para inicialização do Mapa (manter o nome initMap) */
  function initMap() {
    mapaPosicaoLocal();
    mapaMultiplosMarcadores();
  }
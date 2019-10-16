var opt_value;

function getLang(selectObject) {
  opt_value = selectObject.value;
  if (opt_value == 0) {
    alert('Por favor Selecione um idioma.');
  }
  if (opt_value == opt_value) {
     //Exibe o valor escolhido para serusado na classe
     // console.log(opt_value);
  }
  // Tags com o mundo do Idioma que fica acima da textearea de saída
  var jrrt = '<span>J. R. R. Tolkien</span>';
  var dnd = '<span>Dungeons and Dragons</span>';
  var sky = '<span>Skyrim</span>';
  var stt = '<span>Star Trek</span>';

  var idioma = document.getElementById('tag_idioma');

  if (opt_value == 'abiss_bar' || opt_value == 'drac_iok' || opt_value == 'elf_rel' || opt_value == 'nan_dav') {
    idioma = dnd;
    document.getElementById('tag_idioma').innerHTML = idioma;

  }
  if (opt_value == 'elf_ten' | opt_value == 'nan_khu') {
    idioma = jrrt;
    document.getElementById('tag_idioma').innerHTML = idioma;
  }
  if (opt_value == 'abiss_dae' | opt_value == 'drac_dov') {
    idioma = sky;
    document.getElementById('tag_idioma').innerHTML = idioma;
  }
  if (opt_value == 'kli_kli' | opt_value == 'kli_piq') {
    idioma = stt;
    document.getElementById('tag_idioma').innerHTML = idioma;
  }
}

function Transcrever() {
  var entrada = document.getElementById('entrada_id').value; ///esse vai pegar o valor da variável 'entrada'
  document.getElementById('traduzido_id').innerHTML = entrada; ///para exibir a tradução em traduzido_id

  ! function() { //IIFE
    document.getElementById('traduzido_id').removeAttribute('class');
    //remove a classe adicionada anteriormente
  }();
  //Troca a classe (fonte) de acordo com o idioma escolhido.
  document.getElementById('traduzido_id').classList.add(opt_value);
}

function apagar() {
  document.getElementById('traduzido_id').removeAttribute('class');
  document.getElementById('entrada_id').value = '';
  document.getElementById('traduzido_id').value = ''; //Isso apaga o texto mas o
  //placehoder continuar sendo traduzido.

}

function aumentar() {
  document.getElementById('traduzido_id').style.fontSize = 'xx-large';
  //adicionar funcionalidade para aumentar incremental
}

function diminuir() {
  document.getElementById('traduzido_id').style.fontSize = 'small';
  //adicionar funcionalidade para diminuir incremental
}

function salvar_imagem() {
    html2canvas($('#traduzido_id'), {
      onrendered: function(canvas) {
        if (navigator.userAgent.indexOf('MSIE ') > 0 ||
          navigator.userAgent.match(/Trident.*rv\:11\./)) {
          var blob = canvas.msToBlob();
          window.navigator.msSaveBlob(blob, 'ciphertranscritor.png');
        } else {
          $('#test').attr('href', canvas.toDataURL('image/png'));
          $('#test').attr('download', 'ciphertranscritor.png');
          $('#test')[0].click();
        }
      }
    });
  }

$(function(){

  var pad_list = ['Fare la spesa',
  'Comprare una nuova macchina',
  'Corso Boolean',
  'Palestra',
  'Smontaggio turbo macchina'];

  for(i = 0; i < pad_list.length; i++){
    var lista_read = pad_list[i];

    var clone_templete = $('.templete_prova li').clone();
    $(clone_templete).find('.list_text').append(lista_read);
    $('.scale ul').append(clone_templete);
  };
  
  $(document).on('click', '.fa-trash', function(){
    $(this).parent().remove();
  });

  $('.list input').keyup(function(event){
    if(event.which === 13){
      var lista_read = $(this).val().trim(); 
      if(lista_read.length > 3){
        var clone_templete = $('.templete_prova li').clone();
        $(clone_templete).find('.list_text').append(lista_read);
        $('.scale ul').append(clone_templete);
        $(this).val('');
      }
    }

  });
});
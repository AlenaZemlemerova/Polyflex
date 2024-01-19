var name = $('input[name=fio]').val();
 var tel = $('input[name=tel]').val();
 var otpravka = true;
 if(name==""){
 otpravka = false;
 }
 if(tel ==""){
 otpravka = false;
 }

 dannie = {'polz_name':name, 'polz_tel':tel};

 if(otpravka)
 {
 $.post('senda.php', dannie, function(otvet){
 rezultat = '<div>'+otvet.text+'</div>';
 $("#form_result").hide().html(rezultat).slideDown();
 }, 'json');
 }

 [banner_in_full_story_top_stat]
{banner_in_full_story_top_stat}
[/banner_in_full_story_top_stat]
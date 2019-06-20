$(function () {
    var home_t = $('.prin, .kviz, .voba');
    var prin_t = $('.home, .kviz, .voba');
    var kviz_t = $('.home, .prin, .voba');
    var voba_t = $('.home, .prin, .kviz');
    home_t.hide();
    $('#home').css({ 'background-image': 'linear-gradient(to bottom,darkred, red)' });
    $('#home').on('click', function () {
        home_t.hide();
        $('.home').show();
        $('#zalozky div').css({ 'background-image': 'none' });
        $(this).css({ 'background-image': 'linear-gradient(to bottom,darkred, red)' });
    });
    $('#prin').on('click', function () {
        prin_t.hide();
        $('.prin').show();
        $('#zalozky div').css({ 'background-image': 'none' });
        $(this).css({ 'background-image': 'linear-gradient(to bottom,darkred, red)' });
    });
    $('#kviz').on('click', function () {
        kviz_t.hide();
        $('.kviz').show();
        $('#zalozky div').css({ 'background-image': 'none' });
        $(this).css({ 'background-image': 'linear-gradient(to bottom,darkred, red)' });
    });
    $('#voba').on('click', function () {
        voba_t.hide();
        $('.voba').show();
        $('#zalozky div').css({ 'background-image': 'none' });
        $(this).css({ 'background-image': 'linear-gradient(to bottom,darkred, red)' });
    });
    $('#tsar').on('click', function () {
        $('#popisek div').replaceWith('<div>Car-Bomba - 50 Mt - 2,3 km<br>byla třístupňová termonukleární puma, nejsilnější zbraň, která byla v historii odpálena. Car-bomba měla hmotnost 27 tun, délku 8 metrů a průměr 2 metry.<br>Odpálení Car-bomby proběhlo 30. října 1961 v 11:32 moskevského času nad sovětskou jadernou střelnicí Nová země.</div>');
    });
    $('#castle').on('click', function () {
        $('#popisek div').replaceWith('<div>Castle Bravo - 15 Mt - 1,42 km<br>Castle Bravo je krycí jméno doposud nejsilnějšího amerického testu termonukleární zbraně, který byl proveden 1. března 1954 na atolu Bikini na Marshallových ostrovech Spojenými státy. Byl to první test z dlouhé série testů nukleárních zbraní v rámci operace Castle. Neočekávaný radioaktivní spad z výbuchu zasáhl posádku japonského rybářského člunu a vyvolal silný mezinárodní odpor proti atmosférickým termonukleárním testům, test měl být původně tajný.</div>');
    });
    $('#w59').on('click', function () {
        $('#popisek div').replaceWith('<div>W59 - 1 Mt - 0,48 km<br>W59 byla americká termonukleární hlavice používaná na některých raketách Minuteman I ICBM z let 1962-1969 a měla být použita na zrušenou balistickou raketu GAM-87 Skybolt.</div>');
    });
    $('#w88').on('click', function () {
        $('#popisek div').replaceWith('<div>W88 - 350 kt - 0,32 km<br>W88 je americká termonukleární hlavice. Je koncipována jako dostatečně malá pro přenášení raketami. Byla vyvinuta v 70. letech v laboratoři v Los Alamos. V roce 1999 tuto hlavici popsal ředitel Los Alamos jako nejmodernější jadernou hlavici z arzenálu USA. Její výška činí 1,75 metru, průměr 0,55 metru a váží do 360 kilogramů.</div>');
    });
    $('#fatman').on('click', function () {
        $('#popisek div').replaceWith('<div>Fat Man - 18 kt - 0,1 km<br>Anglický název Fat Man nesla plutoniová jaderná puma, která byla 9. srpna 1945 v 11.02 hod. svržena z amerického bombardéru B-29, pojmenovaného Bockscar, na japonské přístavní město Nagasaki. Puma explodovala ve výšce 550 m nad městem. Výbuch způsobil devastaci větší části města a okamžitou smrt asi 40 000 obyvatel. Dalších 25 000 lidí bylo zraněno a tisíce dalších později zemřelo na následky radioaktivního ozáření. Celkem zahynulo asi 74 000 obyvatel města.</div>');
    });
    $('#kontrola').on('click',function(){
        if($('input[name="1"]:checked').val()==2){
            $('#1').css({'background-color':'green'});
        }
        else{
            $('#1').css({'background-color':'rgba(255,0,0,0.8)'});
            $('#1').append('<br><b>Správná odpověď:</b> Plutonium a izotopy uranu');
        }
        if($('input[name="2"]:checked').val()==1){
            $('#2').css({'background-color':'green'});
        }
        else{
            $('#2').css({'background-color':'rgba(255,0,0,0.8)'});
            $('#2').append('<br><b>Správná odpověď:</b> Spojené státy (USA)');
        }
        if($('input[name="3"]:checked').val()==2){
            $('#3').css({'background-color':'green'});
        }
        else{
            $('#3').css({'background-color':'rgba(255,0,0,0.8)'});
            $('#3').append('<br><b>Správná odpověď:</b> Car-bomba');
        }
        if($('input[name="4"]:checked').val()==3){
            $('#4').css({'background-color':'green'});
        }
        else{
            $('#4').css({'background-color':'rgba(255,0,0,0.8)'});
            $('#4').append('<br><b>Správná odpověď:</b> ..řetězové reakci štěpení materiálu.');
        }
        if($('input[name="5"]:checked').val()==1){
            $('#5').css({'background-color':'green'});
        }
        else{
            $('#5').css({'background-color':'rgba(255,0,0,0.8)'});
            $('#5').append('<br><b>Správná odpověď:</b> Kobaltová, neutronová a třístupňová');
        }
        $(this).attr("disabled",true);
    });

    $('#obal').on('click', function () {
        $('#popis div').replaceWith('<div>Představa jak to vypadá v bombě</div>');
        $(this).hide();
    });
    $('#roznetka').on('mouseover', function () {
        $('#popis div').replaceWith('<div>Roznětka</div>');
    });
    $('#trhavina').on('mouseover', function () {
        $('#popis div').replaceWith('<div>Konvenční trhavina</div>');
    });
    $('#material').on('mouseover', function () {
        $('#popis div').replaceWith('<div>Štěpný materiál</div>');
    });
    $('#odrazec').on('mouseover', function () {
        $('#popis div').replaceWith('<div>Odražeč neutronů</div>');
    });
    $('#plast').on('mouseover', function () {
        $('#popis div').replaceWith('<div>Představa jak to vypadá v bombě</div>');
    });
})
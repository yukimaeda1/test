getLang('language')
getLang('language2')

function getLang(parentId){

    var doc = document.createElement('option')
    
    var arr = [
        {val:"AF", txt:"Afrikanns"},
        {val:"SQ", txt:"Albanian"},
        {val:"AR", txt:"Arabic"},
        {val:"HY", txt:"Armenian"},
        {val:"EU", txt:"Basque"},
        {val:"BN", txt:"Bengali"},
        {val:"BG", txt:"Bulgarian"},
        {val:"CA", txt:"Catalan"},
        {val:"KM", txt:"Cambodian"},
        {val:"ZH", txt:"Chinese (Mandarin)"},
        {val:"HR", txt:"Croation"},
        {val:"CS", txt:"Czech"},
        {val:"DA", txt:"Danish"},
        {val:"NL", txt:"Dutch"},
        {val:"EN", txt:"English"},
        {val:"ET", txt:"Estonian"},
        {val:"FJ", txt:"Fiji"},
        {val:"FI", txt:"Finnish"},
        {val:"FR", txt:"French"},
        {val:"KA", txt:"Georgian"},
        {val:"DE", txt:"German"},
        {val:"EL", txt:"Greek"},
        {val:"GU", txt:"Gujarati"},
        {val:"HE", txt:"Hebrew"},
        {val:"HI", txt:"Hindi"},
        {val:"HU", txt:"Hungarian"},
        {val:"IS", txt:"Icelandic"},
        {val:"ID", txt:"Indonesian"},
        {val:"GA", txt:"Irish"},
        {val:"IT", txt:"Italian"},
        {val:"JA", txt:"Japanese"},
        {val:"JW", txt:"Javanese"},
        {val:"KO", txt:"Korean"},
        {val:"LA", txt:"Latin"},
        {val:"LV", txt:"Latvian"},
        {val:"LT", txt:"Lithuanian"},
        {val:"MK", txt:"Macedonian"},
        {val:"MS", txt:"Malay"},
        {val:"ML", txt:"Malayalam"},
        {val:"MT", txt:"Maltese"},
        {val:"MI", txt:"Maori"},
        {val:"MR", txt:"Marathi"},
        {val:"MN", txt:"Mongolian"},
        {val:"NE", txt:"Nepali"},
        {val:"NO", txt:"Norwegian"},
        {val:"FA", txt:"Persian"},
        {val:"PL", txt:"Polish"},
        {val:"PT", txt:"Portuguese"},
        {val:"PA", txt:"Punjabi"},
        {val:"QU", txt:"Quechua"},
        {val:"RO", txt:"Romanian"},
        {val:"RU", txt:"Russian"},
        {val:"SM", txt:"Samoan"},
        {val:"SR", txt:"Serbian"},
        {val:"SK", txt:"Slovak"},
        {val:"SL", txt:"Slovenian"},
        {val:"ES", txt:"Spanish"},
        {val:"SW", txt:"Swahili"},
        {val:"SV", txt:"Swedish "},
        {val:"TA", txt:"Tamil"},
        {val:"TT", txt:"Tatar"},
        {val:"TE", txt:"Telugu"},
        {val:"TH", txt:"Thai"},
        {val:"BO", txt:"Tibetan"},
        {val:"TO", txt:"Tonga"},
        {val:"TR", txt:"Turkish"},
        {val:"UK", txt:"Ukranian"},
        {val:"UR", txt:"Urdu"},
        {val:"UZ", txt:"Uzbek"},
        {val:"VI", txt:"Vietnamese"},
        {val:"CY", txt:"Welsh"},
        {val:"XH", txt:"Xhosa"}
    ];

    //連想配列をループ処理で値を取り出してセレクトボックスにセットする
    for(var i=0;i<arr.length;i++){
      doc.setAttribute("value", arr[i].val);
      doc.innerHTML = arr[i].txt;
      add(arr[i].val,arr[i].txt,parentId)
    }
}

function add(value,txt,parentId){
   // selectタグを取得する
    var select = document.getElementById(parentId);
    var doc = document.createElement('option');
    doc.setAttribute("value", value);
    doc.innerHTML = txt;

    select.appendChild(doc);
}
$(function(){
    // main
    $('#file').change(function(){
        var file = $(this).prop('files')[0];
        if(!file.type.match('image.*')){
            return;
        }
        var fileReader = new FileReader();
        fileReader.onloadend = function() {
            $('#result').html('<img src="' + fileReader.result + '" class="main_pic" />');
        }
        fileReader.readAsDataURL(file);
    });

    // sub1
    $(function(){
    $('#file2').change(function(){
        var file = $(this).prop('files')[0];
        if(!file.type.match('image.*')){
            return;
        }
        var fileReader = new FileReader();
        fileReader.onloadend = function() {
            $('#result2').html('<img src="' + fileReader.result + '" class="sub_pic" />');
        }
        fileReader.readAsDataURL(file);
    });

    // sub2
        $('#file3').change(function(){
        var file = $(this).prop('files')[0];
        if(!file.type.match('image.*')){
            return;
        }
        var fileReader = new FileReader();
        fileReader.onloadend = function() {
            $('#result3').html('<img src="' + fileReader.result + '" class="sub_pic" />');
        }
        fileReader.readAsDataURL(file);
    });

    // sub3
        $('#file4').change(function(){
        var file = $(this).prop('files')[0];
        if(!file.type.match('image.*')){
            return;
        }
        var fileReader = new FileReader();
        fileReader.onloadend = function() {
            $('#result4').html('<img src="' + fileReader.result + '" class="sub_pic" />');
        }
        fileReader.readAsDataURL(file);
    });
    

});
});

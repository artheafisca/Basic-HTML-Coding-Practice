$(document).ready(function(){
    $("#formId").submit(function(r){
        r.preventDefault();
        window.scrollTo(0, 0);
        $("#divAlert").removeClass("d-none");
        const nama = $("#inputEmail").val();
        $("#alertText").html(`Terima Kasih <strong>${nama}</strong> . Link sudah dapat dilihat di email anda.`);
    });

    $("#btnClose").click(function(){
        $("#divAlert").addClass("d-none");
    });

    $("#imgPilihan img").click(function(e){
        e.preventDefault();
        const imageSrc = $(this).attr("src");
        $("#view").attr("src", imageSrc);
    });

    $("#submit").submit(function(e){
        e.preventDefault();
        window.scrollTo(0, 0);
        $("#alertAkhir").removeClass("d-none");
        $("#ship").addClass("d-none");
        const firstName = $("#firstName").val();
        const lastName = $("#lastName").val();
        const namaLengkap = firstName + " " + lastName;
        const alamat = $("#alamat").val();
        
        $("#terimakasih").html(`<h4><strong>Terima Kasih, ${namaLengkap}</strong></h4>`);
        $("#paket").html(`<p>Paket akan dikirimkan ke ${alamat} secepatnya</p>`);
    });

    
});
$(() => {
    //把fetchKunde函数放在ready function中是因为当index.html页面load好了以后，这个list就展现在页面上
    fetchKunde();

    $("#slett").click(() => {
        const ok = confirm("Sikker på å slette alle?");
        if(ok){
            let jqXhr;
            let textStatus;
            $.ajax("/api", {
                type: "DELETE",
                success: () => fetchKunde(),
                error: (jqXhr, textStatus, errorMessage => console.log(errorMessage))
            })
        }
    })
})

//在JS中，function也是object，所以可以写成下面这种方式
const fetchKunde = () => {
    $.get("/api", list => {
        formatKunde(list);
    })
}
const formatKunde = list => {
    let msg = "";
    if(list.length > 0){
        msg += "<table class='table table-striped'><tr><td>Navn</td><td>Address</td></tr>";

        for(let kunde of list){
            msg += `<tr><td>${kunde.navn}</td><td>${kunde.address}</td></tr>`
        }

        msg += "</table>";
    }
    $("#kundeList").html(msg);
}


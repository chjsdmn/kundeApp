$(() => {
    $("#registre").click(() => {
        const navn = $("#navn");
        const address = $("#address");
        const bilmerke = $("input[name=bilvalg]:checked");
        const forekort = /*$("input[name=forekort]:checked");*/ $("#forekort").prop("checked")
        //$("#forekort").[0].checked JavaScript方法, 返回true/false
        //$("#forekort").prop("checked") jQuery方法, 返回true/false
        /*let forekort;
        if(getForekort.val()) {
            forekort = true;
        }
        else {
            forekort = false;
        }*/
        const kunde = {
            //在这里取值而不是上面，原因貌似是保证等到的object的值正确?...
            navn: navn.val(),
            address: address.val(),
            bilmerke: bilmerke.val(),
            forekort: forekort
        }

        //如果input都填了，再执行下面的，否则不要劳烦服务器去储存data！
        if(inputVal(kunde)){
            $.post("/api", kunde, () => {
                //点击按钮后直接跳转到index.html页面
                //不要在这里叫fetchKunde()，因为这个页面不需要！！！
                window.location.href = "/";
            })
        }
        else {
            console.log("Wrong input");
        }



    })
})

//检验是否都输入了, 参数是一个kunde对象！！
const inputVal = kunde => {
    if (kunde.navn === "") return false;
    else if (kunde.address === "") return false;
    else return kunde.bilmerke !== "";
    //最后一项直接return!!!
    //else return kunde.forekort !== "";

}

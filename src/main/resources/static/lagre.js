$(() => {
    $("#registre").click(() => {
        const navn = $("#navn");
        const address = $("#address");
        const kunde = {
            //在这里取值而不是上面，原因貌似是保证等到的object的值正确?...
            navn: navn.val(),
            address: address.val()
        }

        //如果两个input都填了，再执行下面的，否则不要劳烦服务器去储存data！
        if(inputVal(kunde)){
            $.post("/api", kunde, () => {
                fetchKunde();
            })
            navn.val("");
            address.val("");
        }
        else {
            console.log("Wrong input");
        }


        //点击按钮后直接跳转到index.html页面
        window.location.href = "index.html";
    })
})

//检验是否都输入了
const inputVal = kunde => {
    if (kunde.navn === "") return false;
    //可以直接return最后一项
    else return kunde.address !== "";

}

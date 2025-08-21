function js_aa(){

    return new Promise(function(OK,NO){
        OK("成功")

    })
}

 js_aa().then((状态)=>{console.log(状态)})



function js_bb( $env:PATH ){

    return new Promise(function(OK,NO){
        OK("成功")

    })
}

 js_aa().then((状态)=>{console.log(状态)})

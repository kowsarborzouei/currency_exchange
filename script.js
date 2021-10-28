let counter=0
function currency_exchange(n,xprim,zprim,yprim,a,b,c){
    for(let i=0;i<=xprim;i++){
        for(let j=0;j<=zprim;j++){
            for(let k=0;k<=yprim;k++){
                if(i*a+j*b+k*c===n){
                    counter++
                }
            }
        }

    }
    console.log(counter)
}
currency_exchange(32000,2,1,1,4200,7500,3600)
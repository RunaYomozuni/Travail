function EzByRuna(regex, aTester){
    console.log((regex.test(aTester)))
}
EzByRuna(/[ABCD]/i, "Allo ?");

function arobase(regex,aTester){
    return !!aTester.match("@@");
}
arobase(/@/, "jonascompper2@@gmail.com");



function chiffre(regex, aTester){
    console.log((regex.test(aTester)))
}
chiffre(/[123456789]/, "jonascompper2@gmail.com");
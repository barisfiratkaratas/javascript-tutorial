//JS DEĞİŞKENLER | DERS 1 -------------------------------------------------------------------------------------
    /*
        console.log("Sayfa Yüklendi.");

        var marka;
        console.log(marka);

        // marka = "Opel";
        marka = prompt('Marka Giriniz :');
        console.log(marka);

        // marka = 'Mazda';
        // console.log(marka);

        //var model='Astra';
        var model = prompt('Model Giriniz : ');
        // console.log(model);
        console.log(marka+ " " + model);

        //var maxHiz = 240;
        var maxHiz = prompt('Max. Hiz Giriniz : ');

        // var yakitDeposu = 52;
        var yakitDeposu = prompt('Yakit Deposu Kaç Litredir? : ');
        console.log(yakitDeposu * 5.60);

        // var otomatik = true;
        var otomatik = prompt('Otomatik mi? : ');
        console.log(otomatik);

        console.log(marka+ ' ' + model + ' ' + yakitDeposu + ' litre yakıt deposuna sahip ve maksimum ' + maxHiz+' kaç km hız yapmaktadır?'+' peki araç otomatik midir? '+otomatik); 
    */


// UYGULAMA: JS DEĞİŞKENLER | *********************************************************************************

    /*
        //var isim = "Baris Firat";
        var isim = prompt('İsminizi Giriniz : ');

        //var no = '12345';
        var no = prompt('Numaranızı Giriniz : ');

        //var cinsiyet = 'true'; // erkek: true | kadın: false
        var cinsiyet = prompt('Cinsiyetinizi Giriniz : ');

        //var ders = 'matematik';
        var ders = prompt('Dersinizi Giriniz : ');

        //var not1 = 50;
        var not1 = prompt('Not 1 : ');

        //var not2 = 60;
        var not2 = prompt('Not 2 : ');

        //var ortalama = (not1 + not2)/2;
        var ortalama = (Number(not1)+ Number(not2))/2;

        console.log(no + ' numaralı '+ isim + ' isimli öğrencinin '+ ders+ ' dersinden aldığı ortalama '+ortalama );
    */



// OPERATÖRLER | DERS 3 ---------------------------------------------------------------------------------------

// ** Matematiksel Operatörler 
    /*
        var x = 10;
        var y = 20;
        var z =10;


        console.log(x+y);
        console.log(x-y);
        console.log(y/z);
        console.log(x+y+z);
        console.log(x+(y+z));

        x++;
        x=x+1
        x=x-1
        console.log(x)
    */

// ** Karşılaştırma Operatörleri

    /*
        var sonuc=x>y;
        console.log(sonuc);
        console.log(x>=z); //true değeri gelecektir.
        console.log(x==z);
        console.log(x=="10"); //== true sonucunu getirir. tipler eşit olmasa da içindeki değer eşit olduğu için. 
        console.log(x==="10"); // false gelir çünkü === halinde önce tiplere bakılır(string or number etc) ardından içindeki değer bakılır.
        console.log(x!=z); //x değil eşit z : true
    */

// Mantıksal Operatörleri

// ** && (and) Operatörü
    /*
        console.log((x>y) && (30>20));
        console.log((20>10) && (30>20));
        console.log((10>20) && (30>20));
    */

// ** || (Or) Operatörü
    /*    
        console.log((20>10) || (30<20));
    */
// ** ! (NOT) Operatörü 
    /*
        console.log(!(x>z));
        console.log(!(x=z));
    */

// UYGULAMA: JS OPERATÖRLER | *********************************************************************************


//**Kullanıcıdan alınan 3 sayının en büyüğünü bulalım.

    /*
        var sayi1 = prompt("Sayı Giriniz:");
        var sayi2 = prompt("Sayı Giriniz:");
        var sayi3 = prompt("Sayı Giriniz:");

        console.log("1. sayı en büyük mü?", (sayi1>sayi2) && (sayi1>sayi3));
        console.log("2. sayı en büyük mü?", (sayi2>sayi1) && (sayi2>sayi3));
        console.log("3. sayı en büyük mü?", (sayi3>sayi1) && (sayi3>sayi2));
    */


// KOŞUL İFADELERİ (if-else & switch/case) | DERS 3 -----------------------------------------------------------

    /*
        var marka = "Opel";
        var model = "Astra";
        var otomatik = "yes";

        if (otomatik="yes"){
            console.log("araç otomatiktir.");
        }else{
            console.log("ara. otomatik değildir.");
        }

        otomatik = true;

        if(otomatik){
            console.log(marka + " " + model + " " + otomatik);
        } 

        if(otomatik=="true"){
            console.log("true");
        }

        if(10=="10"){
            console.log("Sayılar Eşittir.")
        } // == tipi karşılaştırmaz, içeriğe bakar.

        if(10==="10"){
            console.log("Sayılar Eşittirr.")
        } // === önce tipleri karşılaştırır; number - string. eşit değillerse içlerine bakmaz. console'da göstermez. 
    */

//**SWITCH STATEMENT 
    /*
        var vites = "3";
        // 1 : manuel
        // 2 : otomatik


        if(vites=="1"){
            console.log("Araç manueldir");
        }else if(vites=="2"){
            console.log("Araç otomatiktir.")
        }else{
            console.log("Yanlış girdiniz.")
        }

        switch(vites){
            case"1":
                console.log("araç manueldir.");
                break; //break switch'in içinden çıkmak içindir. yoksa sormaya devam eder.
            case"2":
                console.log("araç atomatiktir.");
                break
            default: //tanımlanan case dışında bir durum gerçekleşirse 
                    console.log("Yanlış değer");
        }
    */

    /*
        let x = 10;
        let y = 5;
        let z = 20;

        console.log(x+(y*3))
    */


// UYGULAMA: KOŞULLU DURUMLAR | *******************************************************************************
 
// Uygulama 1
//**Girilen doğum yılına göre ehliye alınıp alınamayacağını hesaplayınız. Eğer 18 yaşından küçük ise kaç senesi kalmıştır? 

    /*
        var dogum = prompt("Doğum yılınızı giriniz.");
        var yil = 2023;
        var yas =  yil - dogum;

        if(yas<18){
            alert("Ehliyet Alamazsınız");
            alert("Ehliyet alabilmek için "+(18-yas)+" sene beklemeniz gerekmektedir.")
        }else if(yas>=18){
            alert("Ehliyet alabilirsiniz.");
        }else{
            console.log("Yanlış bir değer girdiniz.");
        }

    */
    

//**Girilen ay bilgisine göre mevsim yanınız. 

    /*
        1 : Ocak - 2 : Şubat

        var ay =1;

        switch(ay){
            case"1":
            case"2":
            case"12":
                console.log("Kış Mevsimi");
                break;

            case"3":
            case"4":
            case"5":
                console.log("İlkbahar Mevsimi");
                break;

            case"6":
            case"7":
            case"8":
                console.log("Yaz Mevsimi");
                break;
            case"9":
            case"10":
            case"11":
        }
    */


// DÖNGÜLER (For - While) | DERS 4 ----------------------------------------------------------------------------

// ** for döngüsü

    /*
        for(var i=0; i<=100; i++){
            if(i%2==0)
                console.log(i);
        }

        for(var i=0; i<=100; i++){
            if(i==50){
                continue; //break for döngüsünden çıkarır ama continue sadece o noktayı döngüden çıkarır.
            }
                console.log(i);
        }
    */

    /*
        for (var i=0; i<10; i++){
            console.log(i);
        } 
    */

    /*
        var sehirler = ["kocaeli", "istanbul", "izmir", "adana"];

        for (var i=0; i<=3; i++) {
            console.log(sehirler[i]);
        }*/

        /*
        for (var i=0; i<sehirler.length; i++) {
            console.log(sehirler[i]);
        }
    */

// ** WHILE DONGUSU

    /*
        var i=1;

        while(i<=10){
            console.log(i);
            i++;
        }
    */


    /*
        var sehirler=["kocaeli", "istanbul", "izmir", "adana", "erzurum"];

        var i=0;

        while(i<sehirler.length){
            console.log(sehirler[i]);
            i++;
        }
    */


// UYGULAMA: JS DONGÜLER | ************************************************************************************

    /*
        #1 : 10-100 arasındaki sayıları yazdırın. (for)
        #2 : 10-100 arasındaki sayıları 5er 5er yazdırın (while)
        #3 : Login kontrolü : Kullanıcı adı ve parola kontrolünden geçene kadar kullanıcı bilgilerini kullanıcıdan isteyin. 

        var k_username ="guest";
        var k_password ="12345";
    */


    /* #1 :
        for(i=100; i<10; i--){
        console.log(i);
        }

        for(i=10; i<100; i++){
        console.log(i);
        }
    */

    /* #2 : 
        var i=10;

        while(i<=100){
            console.log(i);
            i=i+5;
        }
    */

    /* #3 : 

        var k_username ="guest";
        var k_password ="12345";
        var loggedin = false;

        while (loggedin == false){ //while (!loggedin) ile de aynı sonuç elde edilir.

            var username = prompt("Kullanıcı Adı:");
            var password = prompt("Şifre:");

            if((k_username == username) && (k_password == password)){
                alert("Giriş Başarılı");
                loggedin = true;
                } else{
                    alert("Hatalı kullanıcı adı veya parola");
                }
        }

    */


// DİZİLER (Arrays) | DERS 5 ----------------------------------------------------------------------------------

    //her markayı değişkenler içinde saklamak istediğimiz zaman bu zor olabilir. Amacı aynı olan verileri tek bir değişken içinde saklayabiliriz.

    /* 
        var marka1 ="opel";
        var marka2 ="toyota";
        var marka3 ="mazda";

        var marka = ["Opel", "Toyota", "Mazda", "Renault", "Audi"];
        var model = new Array("Corsa", "Yaris", "CX-3", "Clio");

        console.log(marka[2]);
        console.log(model[2]);
        
        model[0]="Astra";

        console.log(model);

        var auris = ["Toyota", "Auris", "42 Litre", true];

        auris.push("blue");
        auris.unshift("HB");
        auris.pop();
        auris.shift();
        console.log(auris);

        for (var i=0; i<marka.length; i++){
            console.log(marka[i])
        }

        if(marka.indexOf("Mercedes")!==-1){
            console.log("Bulundu");
        }else{
            console.log("Aradığınız kelime bulunamadı");
        }
    */



// UYGULAMA: JS DONGÜLER **************************************************************************************

    /* 
        var now = 2018;
        var models = ["Toyota", "Mazda", "Mercedes", "Opel"];
        var years = ["2015", "2012", "2016", "2014"];

        #1 : Tüm modelleri yazdırınız. 

        #2 : Aşagıdaki görüntüyü console'da oluşturun. 

            //Toyota 2015 Model ve 3 yaşında bir araçtır.
            //Mazda 2012 model ve 6 yaşında bir araçtır.
            //Mercedes 2016 model ve 2 yaşındaki bir araçtır.
            //Opel 2014 model ve 4 yaşındaki bir araçtır.

        #3 : models ve years dizilerine eleman eklenebilsin. 


        var now = 2018;
        var models = ["Toyota", "Mazda", "Mercedes", "Opel"];
        var years = ["2015", "2012", "2016", "2014"];


        for(i=0; i<models.length; i++)
        console.log(models[i]);


        models.forEach(function(element){
            console.log(element);
        });

        for(var i=0; i<models.length; i++){
            console.log(models[i] + " " + years[i] + " model ve " + (now-years[i]) + " " + "yaşında bir araçtır.")
        }


        var model = prompt("model giriniz ");
        var modelYili = prompt("model yilini giriniz : ");

        models.push(model);
        years.push(modelYili);

        for(var i=0; i<models.length; i++){
            console.log(models[i] + " " + years[i] + " model ve " + (now-modelYili[i]) + " " + "yaşında bir araçtır.")
        }
    */


// NESNE/OBJECT LİTERALS | DERS 6 -----------------------------------------------------------------------------

    /*
        var marka =["Opel","Toyata","Mazda"];
        var model =["Corsa","Yaris","CX-3"];
        var yil = ["2015", "2012", "2016"];

        console.log(marka[1] + " " + model[1] + " " + yil[1]);

        var opel =["Opel","Corsa","2015"];
        var toyota =["Toyota","Yaris","2012"];
        var mazda = ["Mazda", "CX-3", "2016"];

        console.log(opel);
    */


    /*   
        var opel = {
            marka : "Opel",
            model : "Corsa",
            yil : "2014",
            renk : "mavi",
            otomatik : true
        };

        console.log(opel);
        console.log(opel.marka);
        console.log(opel.otomatik);
        console.log(opel["renk"]);


        var toyota = new Object();
        toyota.marka ="Toyota";
        toyota.model ="Yaris";
        toyota.yil ="2012";
        toyota.renk ="kırmızı";
        toyota.otomatik =true;


        console.log(toyota.model);
        toyota.model ="Yaris";
        console.log(toyota);
        
        var arabalar =[
            {
                marka : "Opel",
                model : "Corsa",
                yil : "2014",
                renk : "mavi",
                otomatik : true
            },
            {
                marka : "Mazda",
                model : "CX-3",
                yil : "2017",
                renk : "mavi",
                otomatik : true
            }
        ];

        console.log(arabalar);
        console.log(arabalar[1]);
        console.log(arabalar[1].marka);
        console.log(arabalar[1].renk);

        for (var i=0; i<arabalar.length; i++){
            console.log(arabalar[i].marka);
        }
        */

// UYGULAMA: OBJECT  *****************************************************************************************

        /*
        var ali = {
            ad : "Ali",
            soyad : "Yılmaz",
            cinsiyet : "erkek",
            adres : "istanbul",
            meslek : "bilgisayar müh",
            diller : ["ingilizce", "almanca"],
            hobiler : ["kitap, film"],
        }

        console.log(ali);
        console.log(ali.diller.length);
        console.log(ali.hobiler);


        ali.hobiler.forEach(function(hobi){
            console.log(hobi);
        });

        var personel = [ 
            { 
            ad : "Ali",
            soyad : "Yılmaz",
            cinsiyet : "erkek",
            adres : "istanbul",
            meslek : "bilgisayar müh",
            diller : ["ingilizce", "almanca"],
            hobiler : ["kitap, film"], 
        } ,
        { 
            ad : "X",
            soyad : "Yılmaz",
            cinsiyet : "erkek",
            adres : "istanbul",
            meslek : "bilgisayar müh",
            diller : ["ingilizce", "almanca"],
            hobiler : ["kitap, film"], 
        } ,
        { 
            ad : "Y",
            soyad : "Yılmaz",
            cinsiyet : "erkek",
            adres : "istanbul",
            meslek : "bilgisayar müh",
            diller : ["ingilizce", "almanca"],
            hobiler : ["kitap, film"], 
        }   
        ]

        personel.forEach(function(personel){
            console.log("**************");
            console.log(personel.ad+" "+personel.soyad);

            personel.diller.forEach(function(dil){
                console.log(dil);
            })
            console.log("**************");
        })
    */


// JS FONKSİYONLAR | DERS 7 -----------------------------------------------------------------------------


    /* 
        function topla(a,b){
            return(a+b);
        }


        var sonuc = topla(10,20);
        console.log(sonuc);
        console.log(topla(10,20));
    */

    /* 
        var now = 2023;

        function yasHesapla(yas){
            return(now-yas);
        }

        var ahmet = yasHesapla(1994);
        var ali = yasHesapla(1996);

        console.log(ahmet);
        console.log(ali);


        function emeklilikHesapla(ad,yas){
            var k_yas =  yasHesapla(yas);
            var emeklilik = 65 - k_yas;

            if(emeklilik>0){
            console.log(ad + " " + emeklilik + " " + "yaşında emekli olabilir.")
            }else{
                console.log(ad + " " + " zaten " + (emeklilik*(-1)) + " yıl önce emekli olmuştur.");
            }
        }

        emeklilikHesapla("çınar", 1998);
        emeklilikHesapla(ali,1996);
        emeklilikHesapla("Ayşe", 1950);
    */

// UYGULAMA: FONKSİYONLAR  ************************************************************************************

    /*
        #1 : Girilen bir sayının tek mi çift mi olduğunu hesaplayan fonksiyon yazınız. 

        #2 : Girilen bir sayının faktoriyelini hesaplayan fonksiyon yazınız. 

            //Toyota 2015 Model ve 3 yaşında bir araçtır.
            //Mazda 2012 model ve 6 yaşında bir araçtır.
            //Mercedes 2016 model ve 2 yaşındaki bir araçtır.
            //Opel 2014 model ve 4 yaşındaki bir araçtır.

        #3 : kendisine gönderilen bir dizinin elemanlarını ekrana yazan fonksiyonu yazınız.
    */

    /* #1
        function tekCift(sayi){
            if(sayi%2==0){
                return true;
            }else{
                return false;
            }
        }

        if (tekCift(18)){
            console.log("sayı çifttir.")
        }else{
            console.log("sayı tektir.")
        }
        
        var sayi = tekCift(10);
        console.log(sayi);
    */

    /*  #2       
        function faktoriyel(sayi){ 

            var sonuc = 1;

            for(var i=2; i<=sayi; i++){
                sonuc*=i;
            }
            return sonuc;
        }

        console.log(faktoriyel(5));
    */

    /*
        var modeller = ["Opel", "Mazda", "Toyota"];

        function yazdir(dizi){
            
            dizi.forEach(function(item){
                console.log(item);
            });
        }

        yazdir(modeller);
    */

// / SUMMARİZE FONKSİYONU UYGULAMASI | DERS 8 ------------------------------/********************************

    /*
        #1 Cümle Özetleme Uygulaması : Bir cümle içinden istenilen karekter sayısına göre bir özet çıkarılsın. Ancak bölünecek kısım bir kelime olmamalı.
    */    
    
    /*
        var cumle = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, obcaecati.";
        
        var product = {
            name : "Samsung S8",
            price : 15000,
            description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, obcaecati.",
            summary : function() {
                    //var maxKarakter = 26;
            var ozetCumle = [];
            var maxKarakter = 20;
            var cumle = this.description;
        
            if (maxKarakter>cumle.length){
                //console.log(cumle)
                this.shortDescription = cumle;
            }else{
                var kelimeler = cumle.split(" ");
                var toplamKarakter = 0;
        
                for(var i=0; i<kelimeler.length; i++){
                    ozetCumle.unshift(kelimeler[i]);
                    toplamKarakter+=kelimeler[i].length;
        
                    if(toplamKarakter>maxKarakter){
                        break;
                    }
                }
            } 
            this.shortDescription = ozetCumle.join(" ") + "...";
            //return ozetCumle.join(" ") + "...";
            }
        }
        product.summary ();
        console.log(product);

        function ozet(cumle, maxKarakter){
        //var maxKarakter = 26;
            var ozetCumle = [];
        
            if (maxKarakter>cumle.length){
                //console.log(cumle)
                return cumle;
            }else{
                var kelimeler = cumle.split(" ");
                var toplamKarakter = 0;
        
                for(var i=0; i<kelimeler.length; i++){
                    ozetCumle.unshift(kelimeler[i]);
                    toplamKarakter+=kelimeler[i].length;
        
                    if(toplamKarakter>maxKarakter){
                        break;
                    }
                }
            } 
            return ozetCumle.join(" ") + "...";
        }

        console.log(ozet(cumle, 30));
        console.log(ozet(cumle, 30));
        console.log(ozet(cumle, 30));

        //console.log(ozetCumle.join(" ") + "...");
    */
    
// JS ETİKET ERİŞİMİ | DERS 8 -----------------------------------------------------------------------------


    var isBlue = false;
    var blue = document.getElementById("mavi");

    setInterval(function(){
        if(isBlue){
            blue.style.background="green";
            //isBlue=false;
        }else{
            blue.style.background="blue";
            //isBlue=true;
        }
        isBlue=!isBlue;
    },1000);

// UYGULAMA: ETİKET ERİŞİMİ_TODOLİST **************************************************************************

    /*
        #1 id'si todolist olan etiketi seçip liste işaretini görünmez yapın. (list-style : none)
        #2 tüm liste elemanlarının üstünü çiziniz. (text-decoration: line-through)
        #3 kullanıcının saatine göre gerekli aşamaları işaretleyiniz. örneğin saat 22:00 iken hazırlığa kadar olan tüm elemanlar işaretlensin. 

        (new Date()).GetHours() ==> 20
    */
    
        var todoList
        =document.getElementById("todoList");
        todoList.style.listStyleType="none";

    /*
        var listItems = document.querySelectorAll("li");
        listItems.forEach(function(item){
            item.style.textDecoration="line-through"
        })
    */ 

        var date = new Date();
        var hours = date.getHours();
        var element; 

        //console.log(date.getHours())


        for (var i =hours; i>=8; i--){
            element =document.getElementById("item_" + i);
            element.style.textDecoration="line-through";
            element.querySelector("input").checked=true;

        }

// JS DOM: ATTRİBUTES| DERS 9(UYGULAMA) -----------------------------------------------------------------------


    var models = [
        {
            name : "BMW",
            image : "img/bmw.jpeg",
            link : ""
        },
        {
            name : "Volvo",
            image : "img/volvo.jpeg",
            link : ""
        }
    ];

    setInterval(function(){
        var index = Math.floor(Math.random()*models.length);

        var img =document.querySelector(".card-img-top");
        var title =document.querySelector(".card-title");
        var a=document.querySelector("a");
    
        img.setAttribute("src", models[index].image);
        a.setAttribute("href", models[index].link);
        title.textContent=models[index].name;
    },1000);


// JS DOM: EVENTS| DERS 9(UYGULAMA) -----------------------------------------------------------------------


    var changeBtn = document.querySelector("#changeText");
    var p=document.querySelector("prgf");

    changeBtn.addEventListener("click", function(){
        prgf.textContent="button-clicked";
    });


    var baslik=document.querySelector("#sub-title");
    baslik.addEventListener("click", function(){
        baslik.style.color="red";
    });

    /*
    var ul = document.querySelector ("ul");
    ul.addEventListener("click", function(){
        alert("ul clicked")
    })
    */

    var lis = document.querySelectorAll ("li");

    for (var i=0; i<lis.length; i++) {
        lis[i].addEventListener("click", function(){
            alert(this.textContent);
        });
    }
  


    var mavi = document.querySelector("#mavi");
    mavi.addEventListener("click", function(){
        this.style.display="none"; //this bizim kapsamı içinde olduğumuz nesneyi niteler.
    });

    var sari = document.querySelector("#sari");
    sari.addEventListener("click", function(){
        this.style.display="none"; //this bizim kapsamı içinde olduğumuz nesneyi niteler.
    });

    var kirmizi = document.querySelector("#kirmizi");
    kirmizi.addEventListener("click", function(){
        this.style.display="none"; //this bizim kapsamı içinde olduğumuz nesneyi niteler.
    });
/*
            Multiline comments
        */

        // Single line comments

        //Kintamieji var, let, const

        var a;  // variable nebenaudojamas su nauja JS verija
        let uzdarbis;  // naudojamas, kai kintamojo reikšmę galima prilginti iš naujo
        const z = 1; //konstanta

        uzdarbis = 1000;
        c = 5;  //negalima, reikšmė negali keistis

        // Skaičiai
        const first = 10.5;
        const second = 5.7;
        const third = 2;

        let sum = first + second + third;
        let minus = first - second - third;
        let multiply = first * second * third;
        let divide = first / second / third;

        // String

        const text = "Egidijus tingi";
        let title = "Šiandien yra graži diena";
        let vienas = 1;
        let du = "2";
        let space = " ";

        // alert(vienas + du + space + text + space + title); bus 12. String + skaičius = string + string

        // Boolean (bool) - true arba false;
        const tiesa = true;
        const melas = false;

        // Masyvai - array daugiau negu vienas galimas skaičius, string arba boolean
        let masyvas = []; //tuščias masyvas
        let skaiciuMasyvas = [1, 2, 3]; 
        let stringuMasyvas = ["Rokas", "Tomas", "Romas"];
        let booleanuMasyvas = [true, false];
        let randomMasyvas = [1, "Rokas", false];

        //Funkcijos

        function example(){}
        function multiplyNumbers(a, b) {
            return a * b;
        }

        function sayHello(name) {
            alert("Hello " + name + "!");
        }

        const multipledNumbers = multiplyNumbers(3, 5);
        
        sayHello("Egidijus");




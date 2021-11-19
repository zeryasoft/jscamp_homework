// Fonksiyonuna gönderilen sayıların asal olup olmadığını bulma
function findPrime(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let sayac = 0;
    if (numbers[i] != 1) {
      for (let j = 2; j < numbers[i]; j++) {
        if (numbers[i] % j == 0) {
          sayac++;
        }
      }

      if (sayac == 0) {
        console.log(numbers[i]);
      }
    }
  }
}

findPrime(20, 30, 10, 5, 40, 255, 17, 35, 2, 1, 59, 81, 97);

//Girilen Sayıların arkadaş sayı olup olmadığını bulma
function friendNumber(number1, number2) {
  let Isfriend1 = 0;
  for (let i = 1; i < number1; i++) {
    if (number1 % i == 0) {
      Isfriend1 += i;
    }
  }

  let Isfriend2 = 0;
  for (let i = 1; i < number2; i++) {
    if (number2 % i == 0) {
      Isfriend2 += i;
    }
  }

  if ((Isfriend1 == number2) & (Isfriend2 == number1)) {
    console.log("Numbers is Friend");
  } else {
    console.log("Not Friend");
  }
}

friendNumber(220, 284);

// 1000'e kadar sayılar içinde mükemmel sayıların listelenmesi
function perfectNumber(numbers) {
  for (let i = 1; i <= numbers; i++) {
    let perfect = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        perfect += j;
      }
    }

    if (perfect == i * 2) {
      console.log(i);
    }
  }
}

perfectNumber(1000);

//1000'e kadar olan sayılar içindeki asal sayıların listelenmesi
function primeNumbers(numbers) {
  for (let i = 2; i < numbers; i++) {
    let sayac = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        sayac++;
      }
    }

    if (sayac == 0) {
      console.log(i);
    }
  }
}

primeNumbers(1000);

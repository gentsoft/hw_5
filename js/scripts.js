// 1. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром.
function diffe(numF,numS,numD)
    {
        console.log((numF - numS) / numD)
    }

diffe (1,3,2);

// 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.
function squareCube (num)
    {
        console.log('квадрат',num * num)
        console.log('куб',num * num * num)
    }

squareCube (5);

// 3. Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.
function inEquality (numA,numB)
    {
        numA > numB ? console.log('max: ',numA,'min:',numB) : numA < numB ? console.log('max: ',numB,'min:',numA) : console.log ('что то пошло не так')
    }

inEquality (8,16)

// 4. Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив.
let arrA = [];
function newArr(numA,numB)
    {
        arrA =[];
        if (numA < numB)
            {
                while (numA <= numB)
                    {
                        arrA.push(+numA);
                        numA++;
                    }
            }else
                {
                    while (numA >= numB)
                    {
                        arrA.push(+numA);
                        numA--;
                    }   
                }
    }

function showArr()
    {
        console.log(arrA)
    }
newArr(prompt('введите начало массива'),prompt('введите конец массива'));
showArr()

// 5. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false.
function isEven(num)
    {
        if (num > 0)
            {
               return (num % 2) != 1 ? true : false;
            } else if (num < 0)
                {
                   return ((num * -1) % 2) != 1 ? true : false ;
                } else
                    {
                       return 0;
                    }
    }

    console.log(isEven(81))

// 6. Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
function arrEven(mas)
    {
        let arrA = []
        console.log('введенный массив: ',mas);
        for (let i = 0; i < mas.length; i++)
            {
                if (isEven(mas[i]) == true)
                    {
                        arrA.push(mas[i])
                    }
            }
        console.log ('четный массив: ',arrA)
    }

arrEven([1,3,5,6,7,8,9,0,-4])

// 7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы):
/*
1
22
333
4444
55555
666666
7777777
88888888
999999999
*/
// Кол-во рядов должно вводиться параметром. Если пользователь ввел доп. параметр, непредусмотренный ф-цией по умолчанию - один любой символ, кроме пробела, то пирамида должна быть нарисована этим символом например:
/*
*
**
***
****
*****
******
*******
********
*********
*/
function arrTrian(numA,numB)
    {
        if (numB == ' ')
        numB = '_';
        if(numB == undefined && numA != 0 && numA == Number(numA))
            {
                for (let i = 0,num = 1; i < Number(numA); i++, num++)
                    {
                        let str = '';
                            for (let iA = i;(iA + 1) > 0; iA--)
                                {
                                    str += num
                                }
                        console.log (str)
                    }
            }else if (numB != undefined && numA != 0 && numA == Number(numA))
                {
                    for (let i = 0,num = 1; i < Number(numA); i++, num++)
                    {
                        let str = '';
                            for (let iA = i;(iA + 1) > 0; iA--)
                                {
                                    str += numB
                                }
                        console.log (str)
                    }
                } else 
                    {console.log ('неверный параметр')}
    }


let strArrA = prompt('введите значение например "4"или"4,А"');
arrTrian(strArrA[0],strArrA[2])



// 8. Напишите ф-цию, которая рисует равнобедренный треугольник из звездочек:
/*
*
***
*****
*******
*********
*/
//Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-цию, но которая выведет перевернутый треугольник.
function arrTrianS(numA)
    {      
        for (let i = 0; i < Number(numA); i++)
            {
                let str = '',
                    strT = '',
                    numF = Number(numA);
                    for (let iA = i;(iA + 1) > 0; iA--)
                        {
                            str += '*'
                            if (iA >= 1) {str += '*'}
                            while (numF > i + 1)
                            {
                                strT += ' ';
                                numF--;
                            }

                        }
            
                console.log (strT + str)
            }
            console.log ('и наоборот');

        for (let i = Number(numA); i > 0; i--)
            {
                let str = '',
                strT = '',
                numF = Number(numA);
                    for (let iA = i; iA > 0; iA--)
                        {
                            str += '*'
                            if (iA > 1) {str += '*'}
                            while (numF > i + 1)
                            {
                                strT += ' ';
                                numF--;
                            }
                        }
                console.log (strT + str)
            }
    }
arrTrianS(prompt('введите значение например "4"'))

// 9. Напишите ф-цию, которая возвращает массив заполненный числами Фибоначи от 0 до 1000.

function arrFibonachi()
    {
        let arr =[1,2];
        while (arr[arr.length-1] + arr[arr.length-2] < 1000)
            {
                arr.push(arr[arr.length-1] + arr[arr.length-2])
            }
        console.log(arr);
    }
arrFibonachi()

// 10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее). Исп. Рекурсию.
let num = 0,
    numB = 0,
    numS = 0;

function sum(num)
    {
        let numA = String(num);
            numS += +numA[numB];
            numB++;

        if (numB < numA.length)
            {
                sum(num)
            }
    }

let numF = 0;
function uNamb(num)
    {
        numB = 0
        numS = 0;
        sum(num);
        numF = numS;
        console.log('итоги:',numF)
        if (numF > 9)
            {
                uNamb(numF)
            }
            
    }
num = 566;
console.log('начальное число:',num)
uNamb(num)
//11. Дан массив с числами (передается параметром). Выведите последовательно его элементы, используя рекурсию и не используя цикл.
num = 0;
function arrElem(arr)
    {
        if (num < arr.length)
            {
                console.log (arr[num]);
                num++;
                arrElem(arr);
            } else
                {
                    num = 0
                }
    }

arrElem([1,2,4,5,87,6,54,1])

//12. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер группы студента и выводящую введённые данные в следующем виде:
/*
*****************************
* Домашняя работа: «Функции» *
* Выполнил: студент гр. W4017 *
* Иванов Иван Иванович *
*****************************
*/
//Размер рамки должен определятся автоматически по самой длинной строке. Рамку вывести в консоль.

function busCard ()
    {
        let nameFir = prompt('введите ваше имя'),
            nameFem = prompt('введите вашу фамилию'),
            nameSec = prompt('введите ваше отчество'),
            group = prompt('введите вашу группу');
        
        let strA = 'Домашняя работа: «Функции»',
            strB = 'Выполнил: студент гр. '+ group,
            strC = nameFem+' '+nameFir+' '+nameSec,
            strStar = '';
            strS ='',
            strLong = 0;

        strA.length >= strB.length ? strLong = strA.length : strLong = strB.length;
        if (strLong < strC.length) strLong = strC.length;

        for (let i = 0; i !=strLong; i++)
            {
                strStar += '*'
            }

        function strSpace (num)
            {
                for (let i = 0; i < num + 1; i++)
                    {
                        if (i % 8 != 0)
                        strS +=' ';
                        
                    }
            }

        console.log('***' + strStar + '**');
        strSpace(strLong - strA.length);
        console.log('* ' + strA + strS +'  *');
        strSpace(strLong - strB.length);
        console.log('* ' + strB + strS +' *');
        strSpace(strLong - strC.length);
        console.log('* ' + strC + strS +' *');
        console.log('***' + strStar + '**');
    }

busCard ()


// 13. Напишите ф-цию, которая должна проверить правильность ввода адреса эл. почты, неиспользуя регулярные выражения. Почта верна при условии: 
//a. весь адрес не должен содержать русские буквы и спецсимволы, кроме одной «собачки», знака подчеркивания, дефиса и точки, причем они не могут быть первыми и последними в адресе, и идти подряд, например: «..», «@.», «.@» или «@@», «_@», «@-», «--» и т.п.
// b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем имя может содержать только буквы, цифры, но не быть первыми и единственными в имени, и точку;
// c. после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.) не может быть длиной менее 2 и более 11 символов.

num = 'iaslgyi@mail.ru'

function trueMail (num)
    {
        let numInd = true;
        for (let i = 0; i < num.length || numInd == false; i++)
            {
                let a=num[i];
                if (a =='a' || a =='A' || a == 'b' || a == 'c' || a == 'd' || a == 'e' || a == 'f' || a == 'g' || a == 'h' || a == 'i' || a == 'j' || a == 'k' || a == 'l' || a == 'm' || a == 'n' || a == 'o' || a == 'p' || a == 'q' || a == 'r' || a == 's' || a == 't' || a == 'u' || a == 'v' || a == 'w' || a == 'x' || a == 'y' || a == 'z'  || a == 'B' || a == 'C' || a == 'D' || a == 'E' || a == 'F' || a == 'G' || a == 'H' || a == 'I' || a == 'J' || a == 'K' || a == 'L' || a == 'M' || a == 'N' || a == 'O' || a == 'P' || a == 'Q' || a == 'R' || a == 'S' || a == 'T' || a == 'U' || a == 'V' || a == 'W' || a == 'X' || a == 'Y' || a == 'Z' || a == '@' || a == '_' || a == '-' || a == '.' || a == '1' || a == '2' || a == '3' || a == '4' || a == '5' || a == '6' || a == '7' || a == '8' || a == '9' || a == '0') 
                {numInd = true} else {
                                        numInd = false;
                                        console.log ('ошибка написания');
                                        break
                                    }
                if (num[0] == '@' || num[0] == '_' || num[0] == '-' || num[0] == '.' || num[num.length-1] == '@' || num[num.length-1] == '_' || num[num.length-1] == '-' || a + num[i+1]== '@_' || a + num[i+1] == '_@' || a + num[i+1] == '@-' || a + num[i+1] == '-@' || a + num[i+1] == '.@' || a + num[i+1] == '@.' || a + num[i+1] == '_-' || a + num[i+1] == '-_' || a + num[i+1] == '_.' || a + num[i+1] == '._' || a + num[i+1] == '-.' || a + num[i+1] == '.-' || a + num[i+1] == '@@' || a + num[i+1] == '__' || a + num[i+1] == '--' || a + num[i+1] == '..')
                                    {
                                        numInd = false;
                                        console.log ('ошибка написания');
                                        break  
                                    }
            }

        let numSum = 0;  
        for (let i = 0; i < num.length || numInd == false; i++)
            {
                numSum++
                if (num[i] == '@') break;
            }
        if (numSum < 3) 
            {
                numInd = false;
                console.log ('короткое имя')
            }
        
        numSum = 0;
        for (let i = num.length-1; i >=0 || numInd == false; i--)
            {
                numSum++;
                if (num[i] == '.') break;
            }
        if (numSum < 3 || numSum > 9) 
            {
                numInd = false;
                console.log ('домен верхнего уровня не верен')
            }
        if (numInd == true)
            {
                console.log('мэйл верный')
            }
    }

trueMail (num)
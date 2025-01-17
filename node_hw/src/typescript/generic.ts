// создадим переменную и укажем ей тип, используя generic синтаксис, обратимся к классу Array (который позволяет нам  создавать массивы) и указываем в треугольных скобках, из чего данный массив будет состоять<number>, и по умолчанию запишем в него числа Фибонначи
const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
// Array указывает что это за объект, а запись в треугольных скобках из чего он состоит
// но бывают ситуации когда одна и тажа ф-я может работать с разными типами данных
// например ф-я reverse которая просто преворачивает массив
function reverse<T>(array: T[]): T[] {
  return array.reverse()
}
// но массивы могут содержать и строки, и смежанные типы данных
// нужно сделать так что бы эта ф-я работала с разными типами данных во входящем массиве
// используем generic типы и укажем после ее имени что она работает с типом <T>
// в параметре принимает массив который является массивом типа T[]
// и возвращает некий массив типа T[] - и вот этот параметр будет динамически подстраиваться под те значения которые мы передаем
// проверим
const arrayStrings = ['Hello', 'Mitya']

reverse(arrayOfNumbers)
reverse(arrayStrings)
// ошибки нет

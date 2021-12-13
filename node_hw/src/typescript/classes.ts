// КЛАССЫ
// Классы в TS создаются так же как и ES6 классы, но есть несколько ньюансов

// Базовый пример создания класса
class Typescript {
  // тут можем указывать различные поля которые будут в этом классе
  version: string
  // можем указывать конструктор
  // который будет принимать в себя version типа string
  constructor(version: string) {
    // и сразу можем записать ее в приватную переменную version
    this.version = version
  }
  // так же может быть какой нибудь метод
  // который будет принимать параметр name типа string
  info(name: string) {
    // и он просто будет возвращать нам строку
    return `[${name}]: Typescript version is ${this.version}`
  }
}
// отличие от обычных ES6 классов только в том что мы указываем типы

// Второй пример (отличия)
// Создадим класс Car

class Car {
  // можно указать поля которые будут присутствовать в этом классе, НО С МОДИФИКАТОРОМ - readonly
  // что позволяет нам на этапе компиляции определить что данные переменные не будут перезаписываться
  readonly model: string
  // поле numberOfWheels с типом number и по умолчания равно 4
  readonly numberOfWheels: number = 4

  // далее добавим constructor в который принимаем параметр theModel типа string, и будем задавать его в приватной переменной this.model
  constructor(theModel: string) {
    // особенность состоит в том что хоть мы и указали полю model модификатор readonly, мы можем его перезаписать, НО ТОЛЬКО ВНУТРИ КОНСТРУКТОРА
    this.model = theModel
  }
}

//========
// существует более короткая запись, когда мы в конструкторе принимаем какое то значение и хотим записать его в поле, тогда мыможем записать вот так
// class Car {
// readonly numberOfWheels: number = 4
// вот тут учитывая что мы передаем model в конструктор, мы можем прямо в параметрах конструктора передать модификатор и имя поля с его типом, далее TS все сделает за нас, т.е  такая  запись полностью идентична предыдущей
// учитывая что мы передаем модификотор readonly прямо в конструктор, TS сам создат readonly поле model в классе,и в конструкторе он просто его определит на  входящий параметр model
// constructor(readonly model: string) {}
// }

// ======
// Модификаторы в классах
// создадим базовый класс Animal
class Animal {
  // существует три вида модификаторов PROTECTED, PABLIC, PRIVATE
  // если явно не указывать какой либо модификатор, по умолчанию используется public
  // создадим какойто элемент с модификатором protected
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  protected voice: string = ''
  // создадим публичную переменную с модификатором public
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  public color: string = 'black'
  // создадим к примеру ф-ю с модификатором private
  private go() {
    console.log('go')
  }
}

// теперь создадим какой нибудь более точный класс который будет наследоваться от Animal
class Cat extends Animal {
  // добавим метод setVoice c модификатором public, который будет принимать voice типа string и ничего небудет возвращать
  // он будет обращаться к this.voice и задавать ему значение voice
  public setVoice(voice: string): void {
    this.voice = voice
  }
}
// теперь создадим переменную cat и создадим объект на основе класса Cat
const cat = new Cat()
// cat.voice - ошибка
console.log(cat.color) // есть доступ т.к public
cat.setVoice('test') // так же есть доступ т.к public

// модификатор protected позволяет получить доступ к свойствам(полям) в самом классе (Animal) и во всех которые наследуются от класса Anima в нашем примере это класс Cat и в нем мы получаем доступ к свойству voice и задаем ему  значение но только через функцию setVoice
// если попробуем получить доступ к свойству после определения переменной cat и создания нового экземпляра класса получим ошибку

// модификатор private - переменные или методы с ним доступны только в том классе в котом они были определены (метод go() будет доступет только в классе Animal, к примеру можно обратится к нему в конструкторе)

// модификатор public делает переменные или методы доступными во всех инстансах т.е и в классе Animal, и класса Cat, и объекте сат

// ===========================
// АБСТРАКТНЫЕ КЛАССЫ
// ни во что не компилируются
// нужны на этапе разработки для того что бы от них наследоваться, и по мимо этого существуют еще абстрактные методы
// создадим абстрактный класс Component
abstract class Component {
  // внутри описываем какието методы которые должны будут присутствовать у класса который будет наследоваться от этого (и они так же будут являтся абстрактными)
  // создадим два абстрактных метода
  abstract render(): void
  abstract info(): string
}
// теперь еслли создать класс который будет наследовать от Component
class appComponent extends Component {
  // тут мы должны  реализовать оба метода
  render(): void {
    console.log('Component on render')
  }
  info(): string {
    return 'This is info'
  }
}

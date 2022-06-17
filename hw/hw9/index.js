// Создайте класс Работника. У каждого объекта обязательно должно быть свойства id, имя, категория и зарплата за месяц.
// создайте следующие методы:
// - вывод информации о зарплате
// - подсчитать заработок за год
// - подсчитать количество работников 
// - *подсчитать сколько выплатили денег всем работникам за год

console.log('TASK 1');


class Workers {
    static countWorkers = 0;
    static totalYearSalary = 0;
  

    constructor(name, category, salary){
        this.name = name;
        this.category = category;
        this.salary = salary;
        this._id = 0;
        Workers.countWorkers ++;
        Workers.totalYearSalary += salary*12;
        
    }
    monthSalary(){
        console.log('Зарплата за месяц ' + this.name, this.salary );
    }
    yearSalary(){
        console.log(this.name, this.salary * 12);
    }    

    totalYearSalary(){
        return Workers.totalYearSalary
   }
}

console.log('All workers');
const worker1 = new Workers('Tom', 5, 10000);
const worker2 = new Workers('Inna', 6, 15000);
console.log('Monthly salary');
worker1.monthSalary();
console.log('Year salary');
worker1.yearSalary();

console.log('count workers in DB ' + Workers.countWorkers);

console.log('calculate how much money was paid to all employees for the year ' + Workers.totalYearSalary);

// Создайте класс Совместитель, который наследует Работника. У него есть дополнительные свойства - количество отработанных часов в день, ставка за час. создайте методы:
// - подсчитайте количество денег что зарабатывает за день
// - подсчитайте ему зарплату за меняц (обновив свойство потом у родителя)
// - подсчитайте количество совместителей

class Pluralist extends Workers {
    static countPluralist = 0;
    constructor(watch, rate){
    super();
        this.watch = watch;
        this.rate = rate;
        Pluralist.countPluralist ++;
    }
    daySalary(){
        console.log(this.watch * this.rate);
    }
    monthSalary(day){ 
       console.log((this.watch * day) * this.rate);
    }
    

}


const pluralist1 = new Pluralist(8, 500);
console.log('Количество денег что зарабатывает за день');
pluralist1.daySalary();
console.log('Зарплата за меняц ');
pluralist1.monthSalary(20)
console.log('Количество совместителей');
console.log(Pluralist.countPluralist)
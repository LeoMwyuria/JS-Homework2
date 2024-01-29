//1) დაწერეთ ფუნქცია processNumbers, რომელიც პარამეტრად იღებს ორ რიცხვს და callBack ფუნქციას.
// და ამ ფუნქციის გამოძახებით უნდა შესრულდეს არითმეტიკული
//ოპერაციები ციფრებზეც მაგალითად მიმატება ან გამოკლება რომელიც უნდა გვეწეროს callBack ფუნქციაში.

//2)შექმენით ფუნქცია isValidUser, რომელიც იღებს მომხმარებლის სახელს და პაროლს პარამეტრად
//და აბრუნებს true, თუ ორივე ცარიელი სტრიქონებია; წინააღმდეგ შემთხვევაში,
//დააბრუნეთ ყალბი. გამოიყენეთ ლოგიკური ოპერატორები.დაგჭირდებათ გაიგოთ მონაცემთა ტიპი
//და ისე შეამოწმოთ თუ სტრინგი აქვს ტიპად!!

//3)შექმენით რეკურსიული ფუნქცია, რომელიც დააბრუნებს n რიცხვს ფიბონაჩის მიმდევრობაში.

//4)შექმენით უკუმთვლელი ტაიმერი, 
// რომელიც ითვლის 10-დან 0 წამამდე, შემდეგ დაბეჭდავს "დრო ამოიწურა!".
//გამოიყენეთ setInterval მეთოდი და დროის დასრულების შემდეგ უნდა დავამთავროთ ტაიმერი!!

//5)შექმენით ფუნქცია, რომელიც ითვლის და აბრუნებს ასაკს მოცემული დაბადების თარიღის მიხედვით თარიღის ობიექტების გამოყენებით.

//6) დაწერეთ ფუნქცია, რომელიც ბეჭდავს კვირის მიმდინარე დღის
// სახელს თარიღის გამოყენებით.დაგჭირდებათ array-ში შეინახოთ
//კვირის დღეები და ისე შეამოწმოთ new Date() დახმარებით!!












//1

// function processNumbers(Callback){
//     return Callback(5,3)
// }
// function calculate(num1,num2){
//     return num1 - num2
// }
// console.log(processNumbers(calculate))






//2
// let username = prompt('ჩაწერეთ უიზერნეიმი')
// let password = prompt('ჩაწერეთ პაროლი')

// function isValidUser(username,password){
//     if(password.length && username.length == 0){
//         console.log(false)
//     }
//     else{
//         console.log(true)
//     }
// }
// isValidUser(username,password)













//3
// function fibonacci(n) {
//     if (n <= 0) {
//       return 'გთხოვთ ჩაწეროთ დადებითი რიცხვი';
//     }
  
//      else if (n === 1 || n === 2) {
//       return 1;
//     } else {
//       return fibonacci(n - 1) + fibonacci(n - 2);
//     }
//   }
  

//   const n = 5;
//   const result = fibonacci(n);
//   console.log(result);
  








//4
// let num = 10;
// const funct = setInterval(() => {
//     console.log(num);
//     if(num == 0){
//         console.log('დრო ამოიწურა!!')
//         clearInterval(funct);
        
//     }
//     else{
//         num--
//     }
    
// }, 1000);







//5

// let birthDate = prompt('ჩაწერეთ თქვენი დაბადების წელი');

// function ageCalculator(birthDate){
//     const date = new Date();
//     let year = date.getFullYear();
    
//     age = year - birthDate;
//     console.log(age)
    

// }


// ageCalculator(birthDate)









//6

let days = ['sunday','monday','tuesday','wendesday','thursday','friday','saturday']

const newdate = new Date();
const day = newdate.getDay();


const dayOfTheWeek = days[day];
console.log(dayOfTheWeek);
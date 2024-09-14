
// function darss(obj){
    
//     console.log(obj)

//     const add=Object.values(obj);
//     const total = add.reduce(function(carr,curr){
//         return carr + curr 
//     })
    
//     const ave = total / add.length
   
//     return ave
    
// }


// console.log(darss({"زبان" : 15,
//     "فیزیک" : 19
// }))

const darsInput = document.getElementById('dars-input');
const nomreInput = document.getElementById('nomre-input');
const addButton = document.getElementById('add');
const table = document.getElementById('table');
const nomreList = []; // آرایه‌ی نمرات

addButton.addEventListener('click', function() {

   const creatTr = document.createElement('tr');  // ایجاد سطر جدید
   const creatTh = document.createElement('th');  // ایجاد سلول برای درس
   const creatTd = document.createElement('th');  // ایجاد سلول برای نمره
   creatTr.className = 'tr'
   creatTh.className = 'td'
   creatTd.className = 'td'

   creatTh.textContent = darsInput.value;  // مقدار درس
   creatTd.textContent = nomreInput.value;  // مقدار نمره

   creatTr.append(creatTh);  // اضافه کردن سلول درس به سطر
   creatTr.append(creatTd);  // اضافه کردن سلول نمره به سطر

   table.append(creatTr);  // اضافه کردن سطر به جدول

   // اضافه کردن نمره به آرایه‌ی نمرات به صورت عددی
   nomreList.push(parseFloat(nomreInput.value));

   // پاک کردن ورودی‌ها پس از اضافه شدن
   darsInput.value = '';
   nomreInput.value = '';
});

const aveButton = document.getElementById('aveButton');

aveButton.addEventListener('click', function() {

   // محاسبه مجموع نمرات
   const total = nomreList.reduce(function(acc, curr){  
       return acc + curr;
   }, 0);

   // محاسبه میانگین
   const average = total / nomreList.length;

   // نمایش میانگین با دو رقم اعشار
   const textAverage = document.getElementById('average');
   textAverage.textContent = average.toFixed(2); 
});


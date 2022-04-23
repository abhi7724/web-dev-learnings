// // let lecture = 10;
// // let section = 3;
// // let title = 'Javascript';

// // console.log(lecture);

// // const course = {
// //     lecture: 10,
// //     section: 3,
// //     title: 'Javascript',
// //     notes: {
// //         introduction : "Welcome to JS course"
// //     },
// //     enroll() {
// //         console.log('your are sucessfully enrolled');
// //     }
// // }
// //Factory function
// // function createCourse(title){
// //     return {
        
// //         title: title,
       
// //         enroll() {
// //             console.log('your are sucessfully enrolled');
// //         }
// //     }
// // }
// // const newCourse = createCourse('Javascript');

// // // Constructor Function

// // function Course(title){
// //     this.title = title;
// //     this.enroll = function(){
// //         console.log('you are sucessfully enrolled')
// //     }
    
// // }

// // const Course_1 = new Function('title', `
// // this.title = title;
// // this.enroll = function(){
// //     console.log('you are sucessfully enrolled')
// // }
// // `)

// // const course_2 = new Course_1('Javascript');
// // course_2.enroll();
// // //Primitive datatype
// // let number = 10;
// // //Pass by value
// // let number_2 = number
// // number = 15;
// // console.log(number);
// // console.log(number_2);

// // //Refrence Datatype

// // //Pass by refrence
// // let obj = {number : 10};
// // let obj2 = obj;

const course =  {
    title: 'Javascript',
       
    enroll() {
        console.log('your are sucessfully enrolled');
    }
}

const course_1 = {};
for(let key of Object.keys(course)){
    course_1[key] = course[key]
}




  



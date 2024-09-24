import { reactive } from "vue";
export const store = reactive ({
    CourseCards: [
        {
        image: 'src/assets/images/course-featured-image-01-480x298.jpg',
        price: '$0.00' ,
        course_name: 'Personal Finance: Financial Security Thinking & Principles',
        lessons: 2,
        students: 326
      },
      {
        image: 'src/assets/images/course-02-480x298.jpg',
        price: '$0.00',
        course_name: 'Learning to Write as a Professional Author',
        lessons: 20,
        students: 
        80
      },
      {
        image: 
        'src/assets/images/stock-full-hd-03-480x298.jpg',
        price: 
          '$0.00',
        course_name: 
        'Customer-centric Info-Tech Strategies',
        lessons: 
        24,
        students: 
        972
      },
      {
        image: 
          'src/assets/images/stock-full-hd-04-480x298.jpg',
        price: 
          '$19.00' ,
        course_name: 
          'Open Programming Courses for Everyone: Python',
        lessons: 
        17,
        students: 
        66
      },
      {
        image: 
          'src/assets/images/stock-full-hd-06-480x298.jpg',
        price: 
          '$0.00' ,
        course_name: 
          'Academic Listening and Note-taking',
        lessons: 
        14    ,
        students: 
        73
      }
      ],
      currentIndex: 0
});
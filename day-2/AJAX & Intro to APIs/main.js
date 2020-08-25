
// -------ex1----------

// const fetch = function(numberBook) {
//     $.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${numberBook}`, function(result){
    
//         let nameBook = result.items[0].volumeInfo.title
//         let author = result.items[0].volumeInfo.authors
//         console.log(nameBook + " by " + author)
    
//     })
// }
// fetch(9782806269171)
// fetch(1440633908)

// -------------ex2 + 3------------


// const fetch = function (queryType, queryValue) {
   
//     const queryChecker = function (type,val) {
//          if(type === "isbn") {
//              return (`https://www.googleapis.com/books/v1/volumes?q=isbn:${val}`)
//          } else if (type === "title") {
//              return (`https://www.googleapis.com/books/v1/volumes?q=title:${val}`)
//          }
 
//     }
    
    
//      $.ajax({
//          method: "GET",
//          url: queryChecker(queryType,queryValue),
//          success: (data) => {
//              let title = data.items[0]["volumeInfo"].title
//              let author = data.items[0]["volumeInfo"].authors[0]
//              let isbn = data.items[0]["volumeInfo"].industryIdentifiers[0].identifier
//              console.log(`title: ${title}, author: ${author}, isbn number: ${isbn}`)
//          },
//          error: (xhr,text,error) => {console.log(text)}
//      })
//   }

//   fetch("isbn", 9789814561778)
// fetch("title", "How to Win Friends and Influence People") 




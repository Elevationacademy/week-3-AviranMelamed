
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

// -------------ex2------------

// const CheckFunction = function() {
//         if (queryType === "isbn") {
//                return {
//                let numberBook = queryValue
//                let nameBook = result.items[0].volumeInfo.title
//                }
                
               

//         }
//                    if (queryType === result.items[0].volumeInfo.title) {
//                        let numberBook = result.items[0].volumeInfo.industryIdentifiers[0].identifier
//                        let author = result.items[0].volumeInfo.authors
//                        console.log("book by " + author)
//                    }
// }

// const fetch = function(queryType, queryValue) {
//     CheckFunction(queryType, queryValue)
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${numberBook}`,
        
//         success: function(result) {
//                 console.log(result)
//         }
//     })

// }
// fetch("isbn", 9789814561778)
// fetch("title", "How to Win Friends and Influence People") 




// const fetch = function(queryType, queryValue) {
//      if (queryType === "isbn") {
//         return {
//         let numberBook = queryValue
//         let nameBook = result.items[0].volumeInfo.title
//         }
         
        

//  }
//             if (queryType === result.items[0].volumeInfo.title) {
//                 let numberBook = result.items[0].volumeInfo.industryIdentifiers[0].identifier
//                 let author = result.items[0].volumeInfo.authors
//                 console.log("book by " + author)
//             }
// }




//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${numberBook}`,
//         success: function(result) {
//     // if (queryType === "isbn") {
//         let numberBook = queryValue

//         let nameBook = result.items[0].volumeInfo.title
//         console.log(nameBook)
//     }
//             if (queryType === result.items[0].volumeInfo.title) {
//                 let numberBook = result.items[0].volumeInfo.industryIdentifiers[0].identifier
//                 let author = result.items[0].volumeInfo.authors
//                 console.log("book by " + author)
//             }

//                 console.log(result)
//         }
//     })

// }
// fetch("isbn", 9789814561778)
// fetch("title", "How to Win Friends and Influence People") 


// ---------ex3-----------




// $.ajax : ({

//     method: `GET`,
//     url: 
//     success: function(data) {
//         console.log(data)
//     }

// })
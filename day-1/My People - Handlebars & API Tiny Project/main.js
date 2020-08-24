let localData = []

$.ajax({
    url: 'https://randomuser.me/api/?results=50',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      localData=data
      
    //   data = data.results
    //   for (let i = 0 ; i<data.length ; i++){
    //       localData.push({
    //           name: data[i].
    //       })
      //}
    }
  });

  console.log(localData)
  console.log("hi")


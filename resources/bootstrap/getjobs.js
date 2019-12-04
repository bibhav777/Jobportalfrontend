$.ajax({

  url: 'http://localhost:3001/viewjobs',
  method: 'GET',
  contentType:'application/json',
  dataType: 'json',



  success :function(result,status){
   //SSconsole.log(result);
    for (key in result){
     $('#table').append('<div id="table">\
       <div class="card-box">\
                    <div class="card-title">\
                    \
       Companyname: '+result[key].cname+'\ \
        Jobtitle:'+result[key].jobtitle+'<br>\
        Jobdescription:'+result[key].jobdescription+'<br>\
      Experience:'+result[key].experience+'<br> \
      Education:'+result[key].education+'<br>\
      Location:'+result[key].location+'<br>\
      Procedure:'+result[key].procedure+'<br>\
        </div>\
    <div class="card-link">\
                        \
                  </div>\
                </div>\
            </div>\
                </div>\
           </div>\
')

    }

 

      //$('#message').html(result.message);    
  },

  error:function(jqXHR,status) {
    //console.log(jqXHR.responseJSON.message);
    //$('#successmessage').html(jqXHR.responseJSON.message);

  }
})

  
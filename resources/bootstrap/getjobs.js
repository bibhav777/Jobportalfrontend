


$.ajax({

  url: 'http://localhost:3001/viewjobs',
  method: 'GET',
  contentType:'application/json',
  dataType: 'json',



  success :function(result,status){
   //SSconsole.log(result);
    for (key in result){
     $('#table').append( '<div class="single-post d-flex flex-row">\
                <div class="thumb">\
                  <img src="" alt="">\
                </div>\
                <div class="details">\
                  <div class="title d-flex flex-row justify-content-between">\
                    <div class="titles">\
                      <h4><a href="applyjobs.html/'+result[key].id+'">'+result[key].jobtitle+'</a></h4>\
                      <h6>'+result[key].cname+'</h6></div>\     \
                 \
                   \
                  </div>\
                  <p>\
              \
                  </p>\
            \
                  <p class="address"><b><span class="lnr lnr-map"></b></span>'+result[key].location+'</p>\
                  <p><b>Education</b></span>: '+result[key].education+'</p>\
                    <p><b>Apply date</b></span>: '+result[key].procedure+'</p>\
                </div>\
              </div>\
            </div>\
          </div>\
        </div>')
      }

      //$('#message').html(result.message);    
  },

  error:function(jqXHR,status) {
    //console.log(jqXHR.responseJSON.message);
    //$('#successmessage').html(jqXHR.responseJSON.message);

  }
})

  
$(document).ready(function(){
var uid;
$('#card').on('click','#editjob',function(){
 
 
uid= $(this)[0].attributes.uid.nodeValue;
console.log(uid)
//console.log(uid);

$.ajax({
  url: 'http://localhost:3001/jobs/'+uid,
  method: 'get',
  dataType: 'json',
success: function(result,status){
  //console.log(result)
$('#cname').val(result.cname);
$('#jobtitle').val(result.jobtitle)
$('#jobdescription').val(result.jobdescription)
$('#experience').val(result.experience)
$('#education').val(result.education)
$('#location').val(result.location)
$('#procedure').val(result.procedure)




},
error:function(jqXHR,status){

}
})
})

$('#jobedit').submit(function(e){
e.preventDefault(); 

var updateJob={
            cname: $('#cname').val(),
            jobtitle: $('#jobtitle').val(),
            jobdescription: $('#jobdescription').val(),
            experience: $('#experience').val(),
            education: $('#education').val(),
            location: $('#location').val(),
            procedure:$('#procedure').val()

}


$.ajax({

  url: 'http://localhost:3001/updatejobs/' + uid,
  method: "PUT",
  contentType:'application/json',
  dataType: 'json',
  data:JSON.stringify(updateJob),
success :function(result,status){
  console.log(result)
    
    alert("Updated sucessfully"); 
    window.location.href="viewjobs.html" 
  },

  error:function(jqXHR,status) {
    //console.log(jqXHR.responseJSON.message);
    //$('#successmessage').html(jqXHR.responseJSON.message);

  }
})
})



$('#card').on('click','#delete',function(){
 
 
uid= $(this)[0].attributes.uid.nodeValue
var confirmation= confirm("Are you sure ?")

if(confirmation == true){
 $.ajax({

  url: 'http://localhost:3001/deletejobs/'+uid,
  method: 'delete',
  dataType: 'json',
success :function(result,status){
    
  window.location.href="viewjobs.html";
      //$('#message').html(result.message);    
  },

  error:function(jqXHR,status) {
    //console.log(jqXHR.responseJSON.message);
    //$('#successmessage').html(jqXHR.responseJSON.message);

  }
})

}else{
  window.location.href="players.html";
}

})






$.ajax({

  url: 'http://localhost:3001/viewjobs',
  method: 'GET',
  contentType:'application/json',
  dataType: 'json',



  success :function(result,status){
    console.log(result);
    for (key in result){
    	   $('#card').append('<div class="container cta-100 " id="card">\
       \
          <!-- Carousel items -->\
                <div class="carousel-inner">\
                  <div class="carousel-item active">\
                    <div class="row">\
                     \
                        <div class="item-box-blog">\
                          <div class="item-box-blog-image">\
                            <!--Date-->\
            \
                          <!--Image-->\
                            <figure> <img src="http://localhost:3001/uploads/'+result[key].image+'" height="200" width="200"/> </figure>\
                          </div>\
                          <div class="item-box-blog-body">\
                            <!--Heading-->\
                            <div class="item-box-blog-heading">\
                              <a href="#" tabindex="0">\
                                <h3>Job Details</h3>\
                              </a>\
                            </div>\
                            <!--Data-->\
                            <!--Text-->\
                            <br>\
                            <div class="item-box-blog-text">\
                               CompanyName: '+result[key].cname+' <br>\
                               JobTitle: '+result[key].jobtitle+'<br>\
                               JobDescription: '+result[key].jobdescription+'<br>\
    <b>Experiences</b>: '+result[key].experience+' <br>\
    Eduation: '+result[key].education+'<br>\
    Location: '+result[key].location+' <br>\
    ApplyingProcedure: '+result[key].procedure+'<br>\
                            </div>\
                            <a class="btn btn-primary" uid="'+result[key].id+'"  id="editjob" class="fa fa-edit" data-toggle="modal" data-target="#exampleModalCenter">Edit</a>\
                            <button type="button" class="btn btn-danger" uid="'+result[key].id+'" id="delete" >Delete</button>\
                        </div>\
                      </div>\
                                              </div>\
                      </div>\
                    </div>\
                    <!--.row-->\
                  </div>\
                  <!--.item-->\
                \
                <!--.carousel-inner-->\
              <!--.Carousel-->\
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
})



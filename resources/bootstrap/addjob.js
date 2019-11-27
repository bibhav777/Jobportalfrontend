$(document).ready(function(){
       $('#addjob').submit(function(event){
          event.preventDefault();
          var formdata= new FormData();
          var jobData= {
            image:$('#image')[0].files[0],
            cname: $('#cname').val(),
            jobtitle:$('#jobtitle').val(),
            jobdescription:$('#jobdescription').val(),
            experience: $('#experience').val(),
            education: $('#education').val(),
            location: $('#location').val(),
            procedure: $('#procedure').val()
           
          }
           for(key in jobData){
           formdata.append(key, jobData[key]);
         }
           
  $.ajax({

  url: 'http://localhost:3001/addjobs',
  method: 'POST',
  contentType: false,
  processData:false,
  data: formdata,
  dataType: 'json',



  success :function(result,status){
    

      $('#message').html(result.message);    
  },

  error:function(jqXHR,status) {
    //console.log(jqXHR.responseJSON.message);
    //$('#successmessage').html(jqXHR.responseJSON.message);

  }
 })
})





})
	
var number,message;
function sendMessage()
{
   const number=document.getElementById("number").value;
   const message=document.getElementById("message").value;
   try
   {
       window.open("https://wa.me/"+number+"?text="+message).focus();
       
   }
   catch
   {
      window.location.assign("https://wa.me/" + number + "?text="+message)
   }
}

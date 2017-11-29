  var btn = document.getElementById('btn-reverse');
  
  
    function reverseString() {
        var str = document.getElementById('to-reverse').value;
        var result = document.getElementById('reverse-result');
      
      
        result.value=str.split('').reverse().join('');
  
        //    return str.split('').reverse().join('');
    }
  
    //btn.addEventListener('click', function() {
    //    reverseString();
    //})
  
    btn.addEventListener('click', function () {
        reverseString();
    })

  var btn = document.getElementById('btn-reverse');
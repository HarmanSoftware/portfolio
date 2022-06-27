function resize() {

    let url = document.getElementById('url').value;
    let height = document.getElementById('height').value;
    let width = document.getElementById('width').value;
  
    /* only returns index number of last occurence of the forward slash : 27 */
    let lastIndex = url.lastIndexOf('/');  
    let lastPart = url.substring(lastIndex);

    let generatedUrl = `https://source.unsplash.com${lastPart}/${width}x${height}`;    

    document.getElementById('my-img').src=`${generatedUrl}`;
    document.getElementById('my-img').style.display="block";

    document.getElementById('h3').style.display="block";

    document.getElementById('my-url').style.display="block";
    document.getElementById('my-url').innerHTML=`${generatedUrl}`;
  
    // https://unsplash.com/photos/mASiL-TP0eU
    // https://source.unsplash.com/mASiL-TP0eU/heightxwidth
  }
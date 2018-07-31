self.addEventListener('fetch', function(event) {
  console.log(event)
  if(event.request.url.endsWith('.jpg')){
     event.respondWith(
       fetch('/imgs/dr-evil.gif')
    )
  }
 });
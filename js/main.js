 let man = document.querySelector('.man');
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;  
        man.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    });
    
    
    let castle = document.querySelector('.castle');
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;  
        castle.style.transform = 'translate(' + x * 20 + 'px, ' + y * 20 + 'px)';
    });

  







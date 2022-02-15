/*const btn = document.querySelector('.accordion-que')

btn.addEventListener('click', function() {
     console.log(btn)
    btn.classList.toggle('open')
   const answer = document.querySelector('.accordion-close')
   if(answer.classList.contains('collapse')) {
       answer.classList.remove('collapse')
       console.log(answer)
   } else {
       answer.classList.add('collapse')
       console.log(answer)
   }
}) */

const btns = document.querySelectorAll('.accordion-que');

btns.forEach(item => {
    item.addEventListener('click', event => {
        let accCollapse =  item.nextElementSibling;
        let cardforMargin = document.querySelector('.card')

        if (!item.classList.contains('collapsing')) {
            if(!item.classList.contains('open')) {
            
          accCollapse.style.display = 'block';
           let accHeight = accCollapse.clientHeight;

           setTimeout(() => {
           accCollapse.style.height = accHeight + 'px';
           accCollapse.style.display = ''; 
           }, 1)
          

           accCollapse.classList = 'accordion-close collapsing';
              //cardforMargin.style.marginLeft = '1px'
              //cardforMargin.style.marginRight = '1px'
           setTimeout(() => {
              accCollapse.classList =  'accordion-close collapse open'
              
           }, 300)
        } else {
            accCollapse.classList = 'accordion-close collapsing';
              //cardforMargin.style.marginLeft = '1px'
              //cardforMargin.style.marginRight = '1px'
            setTimeout(() => {
                accCollapse.style.height = '0px';
                
            }, 1);
            setTimeout(() => {
                 accCollapse.classList =  'accordion-close collapse';
                 accCollapse.style.height = '';
                 //cardforMargin.style.marginLeft = '1px'
                //cardforMargin.style.marginRight = '1px'
            }, 300)
        }
        
        item.classList.toggle('open');
        }
        
    })
})


var Links = {
    setColor:function(color){
        var atarget = document.querySelectorAll('a');
        var i = 0;
        while(i < atarget.length){
            atarget[i].style.color = color;
            i++;
        }
    }
}
var Body = {
    setColor:function(color){
        document.querySelector('body').style.color = color; 
    },
    setBackgroundColor:function(color){
        document.querySelector('body').style.backgroundColor = color; 

    }
}

function nightDayHandler(self){
    if(self.value === 'night'){
        self.value = 'day';
        Body.setBackgroundColor('black');
        Body.setColor('white');  
        Links.setColor('powderblue')
    }
    else{
        self.value = 'night';
        Body.setBackgroundColor('white');
        Body.setColor('black');   
        Links.setColor('blue')
    }
}
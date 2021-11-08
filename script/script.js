

var lessons = new Vue ({
    el: '#section1',
    data: {
        sitename: 'After School Lessons',
        cart: [],
        Lessons: {
            id: 1,
            subject: "Mathematics",
            location: "London",
            price: 100,
            spaces: 5,
            image: "\\images//Maths.png"
        }
    },
               
    methods: {
        addItem: function() {
            const btn = document.querySelector('.button');
            this.cart.push(this.Lessons.id++); 
            if(this.Lessons.spaces > 0){
               --this.Lessons.spaces
               this.Lessons.spaces              
            }else{
                alert('No more available spaces')
            }
        }
    },
    computed: {
        cartItemCount: function (){
            return this.cart.length || '';
        },
    }
})
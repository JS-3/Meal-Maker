const menu = {
    _courses: {
      appetizers:[],
      mains:[],
      desserts:[],
    },
    
    get appetizers() {
      return this._courses.appetizers;
    },
     get mains() {
      return this._courses.mains;
    },
     get desserts() {
      return this._courses.desserts;
    },
    set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
    },
    set mains(mains) {
    this._courses.mains = mains;
    },
    set desserts(desserts) {
    this._courses.desserts = desserts;
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
    
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      };
      return this._courses[courseName].push(dish);
    },
    
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length)
      return dishes[randomIndex];
    },

    
    generateRandomMeal: function(){
       const appetizer = this.getRandomDishFromCourse('appetizers');
       const main = this.getRandomDishFromCourse ('mains');
       const dessert = this.getRandomDishFromCourse ('desserts');
       const totalPrice = appetizer.price + main.price + dessert.price;
       return `Your dinner is ${appetizer.name}, ${main.name}, and ${dessert.name}. Your total is $${totalPrice}.`
      
       }
     };
    
  
  menu.addDishToCourse('appetizers', 'Chips and Salsa', 4.95);
  menu.addDishToCourse('appetizers', 'Onion Rings', 7.50);
  menu.addDishToCourse('appetizers', 'Sampler', 14.55);
  menu.addDishToCourse('mains', 'Ribeye', 24.95);
  menu.addDishToCourse('mains', 'Pulled Pork', 11.75);
  menu.addDishToCourse('mains', 'Brisket', 22.00);
  menu.addDishToCourse('desserts', 'Hot Fudge Sundae', 6.00);
  menu.addDishToCourse('desserts', 'Cheesecake', 8.00);
  menu.addDishToCourse('desserts', 'Pie of the Day', 7.50);
 

  
  let meal = menu.generateRandomMeal();
  console.log(meal);

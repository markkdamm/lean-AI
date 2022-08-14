import food from './food/food';

export class User{
    constructor(height, weight, gender, goal, bodytype, sleep, exercise){
     this.height = height/100;
     this.weight = weight;
     this.gender = gender;
     this.goal = goal;
     this.bodytype = bodytype;
     this.sleep = sleep;
     this.exercise = exercise; //input opts: 1.2,1.375,1.55,1.9
     if (this.exercise == null){
        this.exercise = 1.55;
     }
    }
    bmi(){
    const bmi = this.weight/(this.height*this.height)
    return bmi
    }
    training(){
    let caloricDeficit;
    let bulk;
    if(bmi>25 && bodytype>3){
        caloricDeficit=true;
        bulk=false;
        this.caloricDeficit = caloricDeficit;
        this.bulk = bulk;
    }else{
        caloricDeficit=false;
        bulk=true;
        this.caloricDeficit = caloricDeficit;
        this.bulk = bulk;
    }
    }
    intake(bmr,pal){
        //bmr => carbs intake
        if(this.gender=='male'){
         bmr = 66.47 + (13.75 * this.weight) + (5.003 * this.height*100) - (6.755 * this.yrs)
        }else if(this.gender=='female'){
          bmr = 655.1 + (9.563 * this.weight) + (1.850 * this.height*100) - (4.676 * this.yrs)
        }else{
            console.log('Gender must be male or female')
            bmr = NaN
        }
        this.calories = bmr;
        //bmr * pal => protein intake, where pal is the amount of exercise
        pal = this.exercise;
        let protein = bmr * pal;
        this.protein = protein;
        }
    }
    export class Diet extends User{
        constructor(height, weight, gender, goal, bodytype, sleep, exercise){
            super(height, weight, gender, goal, bodytype, sleep, exercise);

        }
    }
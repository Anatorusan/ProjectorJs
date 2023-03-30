let me = {
    name: 'Anatolii',
    residency: 'Kyiv',
    gender: 'male',
    age: 31,
    hobby: 'coding',
    haircut: 'short',
    eyesColor: 'brown',
    currentCondition: 'eating',
    currentLocation: 'home',
    checkHobby() {
        console.log(`Currently my hobby is ${this.hobby}.`);
    },
    changeHobby(newHobby = this.hobby) {
        this.hobby = newHobby;
        console.log(`The hobby is changed. My current hobby is ${this.hobby}.`);
    },
    checkCondition() {
        console.log(`Currently my condition is ${this.currentCondition}.`)
    },
    changeCondition(newCondition = this.currentCondition) {
        this.currentCondition = newCondition;
        console.log(`The condition is changed. My current condition is ${this.currentCondition}.`);
    },
    checkLocation(){
        console.log(`My current location is ${this.currentLocation}.`);
    },
    changeLocation(newLocation = this.currentLocation) {
        this.currentLocation = newLocation;
        console.log(`Currently my location is ${this.currentLocation}.`);
    }
    }
    
const securedCheckHobby = me.checkHobby.bind(me);
const securedChangeHobby = me.changeHobby.bind(me, 'sleeping');
const securedCheckCondition = me.checkCondition.bind(me);
const securedChangeCondition = me.changeCondition.bind(me, 'drunk');
const securedChekLocation = me.checkLocation.bind(me);
const securedChangeLocation = me.changeLocation.bind(me, 'office');

setTimeout(securedCheckHobby, 1000);
setTimeout(securedChangeHobby, 2000);
setTimeout(securedCheckCondition, 3000);
setTimeout(securedChangeCondition, 4000);
setTimeout(securedChekLocation, 5000);
setTimeout(securedChangeLocation, 6000);
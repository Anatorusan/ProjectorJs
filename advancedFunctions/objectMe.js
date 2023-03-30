const me = {
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
    changeHobby(newHobby) {
        this.hobby = newHobby;
        console.log(`The hobby is changed. My current hobby is ${this.hobby}.`);
    },
    checkCondition() {
        console.log(`Currently my condition is ${this.currentCondition}.`)
    },
    changeCondition(newCondition) {
        this.currentCondition = newCondition;
        console.log(`The condition is changed. My current condition is ${this.currentCondition}.`);
    },
    checkLocation(){
        console.log(`My current location is ${this.currentLocation}.`);
    },
    changeLocation(newLocation) {
        this.currentLocation = newLocation;
        console.log(`Currently my location is ${this.currentLocation}.`);
    }
    }
    
    me.changeHobby('playing guitar');
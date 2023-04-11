'use strict'

//male two date inputs - done
//check how you can catch data from them - done
//activate the disabled date input field - done
//add restriction of possible date of the second date field - done
//add restriction of possible date of the first date field - done
//display basic differense between the dates - done
//add select with days and hours - done
//make addition of 1 month - done
//make withdrawal of 1 month
//add week and month presents 

const initialDateElement = document.getElementById('startDate');
const endDateElement = document.getElementById('endDate');
const calcButtnElement = document.getElementById('calcButtn');
const displayElement = document.getElementById('dateDisplay');
const unitSelectorElement = document.getElementById('selectUnit');
const plusButtnElement = document.getElementById('plusButtn');

const dateDisplay = () => {
  endDateElement.value = initialDateElement.value;
};
const endDateActivator = () => {
  endDateElement.disabled = false;
  endDateElement.setAttribute('min', initialDateElement.value);
  console.log(initialDateElement.value);  
}
const initialDateLimiter = () => {
  initialDateElement.setAttribute('max', endDateElement.value);
}

const calculate = () => {
  const initDateObj = new Date(initialDateElement.value);
  const endDateObj = new Date(endDateElement.value);
  displayElement.innerHTML = (endDateObj - initDateObj) / Number(unitSelectorElement.value);
}

const presetSwitcher = {
  weekCounter: 1,
  monthCounter: 1,
  
  addZero(stringToPad, targetLength = 2, padWithString = `0`) {
         return `${stringToPad}`.padStart(targetLength, padWithString);
    },
  
  addMonth() {
    const baseDateObj = new Date(initialDateElement.value);
    baseDateObj.setMonth(baseDateObj.getMonth() + this.monthCounter);
    endDateElement.value = `${baseDateObj.getFullYear()}-${(this.addZero(baseDateObj.getMonth()+1))}-${this.addZero(baseDateObj.getDate())}`
    console.log(this.monthCounter);
    this.monthCounter += 1;
    },

  resetCounter() {

    }
}

const addMonth = presetSwitcher.addMonth.bind(presetSwitcher);

initialDateElement.addEventListener('input', endDateActivator);

endDateElement.addEventListener('input', initialDateLimiter);

calcButtnElement.addEventListener('click', calculate);

plusButtnElement.addEventListener('click', addMonth);
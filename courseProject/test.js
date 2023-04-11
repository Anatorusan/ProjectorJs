'use strict'

//male two date inputs - done
//check how you can catch data from them - done
//activate the disabled date input field - done
//add restriction of possible date of the second date field - done
//add restriction of possible date of the first date field - done
//display basic differense between the dates - done
//add select with days and hours - done
//make addition of 1 month - done
//fix the nan issue when push + button and calculate button without initial date (make inactive) - done
//make withdrawal of 1 month
//add week 

const initialDateElement = document.getElementById('startDate');
const endDateElement = document.getElementById('endDate');
const calcButtnElement = document.getElementById('calcButtn');
const displayElement = document.getElementById('dateDisplay');
const unitSelectorElement = document.getElementById('selectUnit');
const plusButtnElement = document.getElementById('plusButtn');
const minusButtnElement = document.getElementById('minusButtn');

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
  if ((endDateElement.value === '') || (endDateElement.value < initialDateElement.value)) {
    return;
  }
  const initDateObj = new Date(initialDateElement.value);
  const endDateObj = new Date(endDateElement.value);
  displayElement.innerHTML = (endDateObj - initDateObj) / Number(unitSelectorElement.value);
}

const plusMinusBtnAtivator = () => {
  plusButtnElement.disabled = false;
  minusButtnElement.disabled = false;
}

const presetSwitcher = {
  weekAddCounter: 1,
  weekSubstrCounter: 1,
  monthAddCounter: 1,
  
  addZero(stringToPad, targetLength = 2, padWithString = `0`) {
        return `${stringToPad}`.padStart(targetLength, padWithString);
  },

  addMonth() {
    console.log(`end date: ${endDateElement.value} start date: ${initialDateElement.value}`);
    const baseDateObj = new Date(initialDateElement.value);
    baseDateObj.setMonth(baseDateObj.getMonth() + this.monthAddCounter);
    endDateElement.value = `${baseDateObj.getFullYear()}-${(this.addZero(baseDateObj.getMonth()+1))}-${this.addZero(baseDateObj.getDate())}`;
    console.log(this.monthAddCounter);
    this.monthAddCounter += 1;
    initialDateElement.setAttribute('max', endDateElement.value);
    console.log('initial date limited');
    console.log(`end date: ${endDateElement.value} start date: ${initialDateElement.value}`);
  },

  substrMonth() {
    console.log(`end date: ${endDateElement.value} start date: ${initialDateElement.value}`);
    const startDateObj = new Date(initialDateElement.value);
    const endDateObj = new Date(endDateElement.value);
    if (endDateObj.getMonth() > startDateObj.getMonth()) {
      endDateObj.setMonth(endDateObj.getMonth() - 1);
      endDateElement.value = `${endDateObj.getFullYear()}-${(this.addZero(endDateObj.getMonth()+1))}-${this.addZero(endDateObj.getDate())}`;
      initialDateElement.setAttribute('max', endDateElement.value);
      return
    }
    return
  },

  resetAllCounters() {
    console.log('reset counter called');
    this.monthAddCounter = 1;
    this.weekAddCounter = 1;
    this.monthAddCounter = 1;
    this.monthSubstrCounter = 1;
  },

  resetAddCounters() {
    this.monthAddCounter = 1;
    this.weekAddCounter = 1;
  },

  // resetSubstrCounters() {
  //   this.monthSubstrCounter = 1;
  //   this.weekSubstrCounter = 1;
  // }
}

const resetAllCounters = presetSwitcher.resetAllCounters.bind(presetSwitcher);

const resetAddCounters = presetSwitcher.resetAddCounters.bind(presetSwitcher);

// const resetSubstrCounters = presetSwitcher.resetSubstrCounters.bind(presetSwitcher);

const addMonth = presetSwitcher.addMonth.bind(presetSwitcher);

const substrMonth = presetSwitcher.substrMonth.bind(presetSwitcher);


initialDateElement.addEventListener('input', resetAllCounters);

initialDateElement.addEventListener('input', endDateActivator);

initialDateElement.addEventListener('input', plusMinusBtnAtivator);

endDateElement.addEventListener('change', initialDateLimiter);

calcButtnElement.addEventListener('click', calculate);

plusButtnElement.addEventListener('click', addMonth);

// plusButtnElement.addEventListener('click', resetSubstrCounters);

minusButtnElement.addEventListener('click', substrMonth);

minusButtnElement.addEventListener('click', resetAddCounters);
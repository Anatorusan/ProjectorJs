'use strict'

const initialDateElement = document.getElementById('startDate');
const endDateElement = document.getElementById('endDate');
const calcButtnElement = document.getElementById('calcButtn');
const displayElement = document.getElementById('dateDisplay');
const unitSelectorElement = document.getElementById('selectUnit');
const minusMonthButtnElement = document.getElementById('minusMonthButtn');
const plusMonthButtnElement = document.getElementById('plusMonthButtn');
const minusWeekButtnElement = document.getElementById('minusWeekButtn');
const plusWeekButtnElement = document.getElementById('plusWeekButtn');
const selectDayTypeElement = document.getElementById('selectDayType');

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

const termDurationGenerator = () => {
  let start = new Date(initialDateElement.value);
  const finish = new Date(endDateElement.value);
  const dayMilliseconds = 1000 * 60 * 60 * 24;

  if (selectDayTypeElement.value !== 'all') {
    let weekendDaysCounter = 0;
    let businessDaysCounter = 0;
    while (start <= finish) {
      let day = start.getDay();
      if (day === 0 || day === 6) {
        weekendDaysCounter++;
      } else {
        businessDaysCounter++;
      }
      start = new Date(+start + dayMilliseconds);
    }
    return selectDayTypeElement.value === 'weekend' ? weekendDaysCounter * dayMilliseconds : businessDaysCounter * dayMilliseconds;
  }

  return finish - start + dayMilliseconds;
}

const calculate = () => {
  if ((endDateElement.value === '') || (endDateElement.value < initialDateElement.value)) {
    return;
  }
  displayElement.innerHTML = termDurationGenerator() / Number(unitSelectorElement.value);
}

const plusMinusBtnAtivator = () => {
  plusMonthButtnElement.disabled = false;
  minusMonthButtnElement.disabled = false;
  plusWeekButtnElement.disabled = false;
  minusWeekButtnElement.disabled = false;
}

const presetSwitcher = {
  weekAddCounter: 1,
  monthAddCounter: 1,
  
  addZero(stringToPad, targetLength = 2, padWithString = `0`) {
        return `${stringToPad}`.padStart(targetLength, padWithString);
  },

  addMonth() {
    console.log(`end date: ${endDateElement.value} start date: ${initialDateElement.value}`);
    
    const baseDateObj = endDateElement.value === '' ? new Date(initialDateElement.value) : new Date(endDateElement.value);
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
    if (endDateObj > startDateObj) {
      endDateObj.setMonth(endDateObj.getMonth() - 1);
      endDateElement.value = `${endDateObj.getFullYear()}-${(this.addZero(endDateObj.getMonth()+1))}-${this.addZero(endDateObj.getDate())}`;

      initialDateElement.setAttribute('max', endDateElement.value);
      return
    }
    return
  },

  addWeek() {
    console.log(`end date: ${endDateElement.value} start date: ${initialDateElement.value}`);
    
    const baseDateObj = endDateElement.value === '' ? new Date(initialDateElement.value) : new Date(endDateElement.value);
    baseDateObj.setDate(baseDateObj.getDate() + this.weekAddCounter * 7);
    endDateElement.value = `${baseDateObj.getFullYear()}-${(this.addZero(baseDateObj.getMonth()+1))}-${this.addZero(baseDateObj.getDate())}`;
    
    console.log(this.weekAddCounter);

    this.weekAddCounter += 1;

    initialDateElement.setAttribute('max', endDateElement.value);

    console.log('initial date limited');
    console.log(`end date: ${endDateElement.value} start date: ${initialDateElement.value}`);
  },

  substrWeek() {
    console.log(`end date: ${endDateElement.value} start date: ${initialDateElement.value}`);
    
    const startDateObj = new Date(initialDateElement.value);
    const endDateObj = new Date(endDateElement.value);
    if (endDateObj > startDateObj) {
      console.log('substracting week');
      endDateObj.setDate(endDateObj.getDate() - 7);
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
  },

  resetMonthAddCounter() {
    this.monthAddCounter = 1;
  },

  resetWeekAddCounter() {
    this.weekAddCounter = 1;
  }

}

const resetAllCounters = presetSwitcher.resetAllCounters.bind(presetSwitcher);

const addMonth = presetSwitcher.addMonth.bind(presetSwitcher);

const substrMonth = presetSwitcher.substrMonth.bind(presetSwitcher);

const addWeek = presetSwitcher.addWeek.bind(presetSwitcher);

const substrWeek = presetSwitcher.substrWeek.bind(presetSwitcher);

const resetWeekAddCounter = presetSwitcher.resetWeekAddCounter.bind(presetSwitcher);

const resetMonthAddCounter = presetSwitcher.resetMonthAddCounter.bind(presetSwitcher);


initialDateElement.addEventListener('input', resetAllCounters);

initialDateElement.addEventListener('input', endDateActivator);

initialDateElement.addEventListener('input', plusMinusBtnAtivator);

endDateElement.addEventListener('change', initialDateLimiter);

calcButtnElement.addEventListener('click', calculate);

plusMonthButtnElement.addEventListener('click', addMonth);

plusMonthButtnElement.addEventListener('click', resetWeekAddCounter);

plusWeekButtnElement.addEventListener('click', addWeek);

plusWeekButtnElement.addEventListener('click', resetMonthAddCounter);

minusMonthButtnElement.addEventListener('click', substrMonth);

minusMonthButtnElement.addEventListener('click', resetAllCounters);

minusWeekButtnElement.addEventListener('click', substrWeek);

minusWeekButtnElement.addEventListener('click', resetAllCounters);
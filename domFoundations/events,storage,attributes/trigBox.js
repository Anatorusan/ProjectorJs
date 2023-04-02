const trigBox = {
    trigger: 1,
    trigSwitch() {
        this.trigger ? this.trigger -= 1 : this.trigger += 1;
        console.log(`Trigger value: ${this.trigger}`);
    },
    trigStatusCheck() {
        return this.trigger;
    }
}
export const trigCheck = trigBox.trigStatusCheck.bind(trigBox)
export const securedTrigSwitch = trigBox.trigSwitch.bind(trigBox);
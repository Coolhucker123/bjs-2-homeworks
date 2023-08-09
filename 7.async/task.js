class AlarmClock {
    constructor(alarmCollection, intervalId) {
      this.alarmCollection = [];
      this.intervalId = null;
      }
  
    addClock(time, callback) {
        if (time == undefined || callback == undefined ) {
        throw new Error ("Отсутствуют обязательные аргументы");
        }
        else if (this.alarmCollection.find(item => item.time == time)) {
            console.warn("Уже присутствует звонок на это же время");
        }
        this.alarmCollection.push({callback, time, canCall: true});
    }
  
    removeClock(time) {
      this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
    }
  
    getCurrentFormattedTime() {
        let date = new Date(); 
        let dateTime = date.toLocaleTimeString();
        return dateTime.slice(0, 5);
    }
    
   start() {
        if (this.intervalId !== null) {
          return;
        }
        this.intervalId = setInterval(() => {
          let dateTime = this.getCurrentFormattedTime();
          this.alarmCollection.forEach((item) => {
            if(item.time == dateTime && item.canCall == true) {
              item.canCall = false;
              item.callback();
            }
          })
        }, 1000)
    }
  
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
  
    resetAllCalls() {
        this.alarmCollection.forEach((item => {
            item.canCall = true;
        }))
    }
  
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
  };

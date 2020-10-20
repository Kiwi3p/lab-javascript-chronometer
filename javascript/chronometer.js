class Chronometer {
  
  constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
    //console.log(i);
    this.currentTime++;
    
    /*if (i === 3) {
       this.currentTime = 3;
    }*/

    if(callback) {
      callback()
    }
    }, 1000);
    }
  getMinutes() {
    return Math.floor(this.currentTime / 60); //math.floor rounds down
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(number) {
    if (number < 10) {
      return `0${number}`;
    } 
    return `${number}`

  }
  stopClick() {
    return clearInterval(this.intervalId);
  }
  resetClick() {
    return this.currentTime = 0;
  }
  splitClick() {

    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
  }
}

//may not work on safari
// Declare a "SerialPort" object
let serial;

// fill in the name of your serial port here:
//copy this from the serial control app
let portName = "/dev/tty.usbmodem14201";

let yellow = false;
let green = false;

let msg = ["000", "000", "!"];

function setup() {
  noStroke();
  createCanvas(400, 400);

  // make an instance of the SerialPort object
  serial = new p5.SerialPort();

  // Get a list the ports available
  // You should have a callback defined to see the results. See gotList, below:
  serial.list();

  // Assuming our Arduino is connected,  open the connection to it
  serial.open(portName);

  // When you get a list of serial ports that are available
  serial.on("list", gotList);

  // When you some data from the serial port
  serial.on("data", gotData);
}

// Got the list of ports
function gotList(thelist) {
  // theList is an array of their names
  for (var i = 0; i < thelist.length; i++) {
    // Display in the console
    // console.log(i + " " + thelist[i]);
  }
}

// Called when there is data available from the serial port
function gotData() {}

function draw() {
  background(255, 255, 255);
  msg[0] = String(int(map(mouseX, 100, width-100, 0, 255,1)).toLocaleString('en-US', {
    minimumIntegerDigits: 3,
    useGrouping: false
  }));
  msg[1] = String(int(map(mouseY, 100, height-100, 0, 255,1)).toLocaleString('en-US', {
    minimumIntegerDigits: 3,
    useGrouping: false
  }));
  console.log(join(msg, ""));
  serial.write(join(msg, ""));
}

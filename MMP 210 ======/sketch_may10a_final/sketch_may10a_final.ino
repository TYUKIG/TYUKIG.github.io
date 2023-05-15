//works with this p5 sketch:
//https://editor.p5js.org/jesse_harding/sketches/PguXV19U4

#include <Servo.h> //include servo library file with our sketch
Servo myservo;  // create servo object to control a servo

int pos = 0;  // variable to store the servo position

int data1;
int data2;
//variable to hold incoming data
String incomingData = "000000!";

void setup() {
  //set pinmodes
  pinMode(13, OUTPUT);
  myservo.attach(9);  // attaches the servo on pin 9 to the servo object
  
//  pinMode(90, OUTPUT);
  
  //set baudrate for serial communication
  Serial.begin(9600);
}

void loop() {
  
//  check to see if there is a connection 
  if(Serial.available() > 0){ // Checks whether data is comming from the serial port
    //if so, read the incoming data
    incomingData = Serial.readStringUntil('!'); // Reads the data from the serial port
  }

incomingData.trim();

data1 =incomingData.substring(0,3).toInt();
data2 = incomingData.substring(3,6).toInt();
//analogWrite(11, );
//analogWrite(6, );

if(data2 > 100){
digitalWrite(13, HIGH);
}
else{
  digitalWrite(13,LOW);
}

myservo.write(data1); //set servo angle to pos variable's value



  
}

#include <Arduino.h>
#include <Led.h>

int led = 3;

void setup() {
  // put your setup code here, to run once:
  pinMode(led, OUTPUT);
}

void loop() {
  Led::dim(ledPin);
}

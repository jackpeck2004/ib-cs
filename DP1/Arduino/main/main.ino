void setup() {
    pinMode(3, OUTPUT);
}

#define ANALOG_MAX 255
#define INCREMENT 1
#define DELAY 10

void loop() {

  // Dimmering
  for(int i = 0; i < ANALOG_MAX + 1; i = i + INCREMENT)
  {
    analogWrite(3, i);
    delay(DELAY);
  }
  
  for(int i = 0; i < ANALOG_MAX + 1; i = i + INCREMENT)
  {
    analogWrite(3, ANALOG_MAX - i);
    delay(DELAY);
  }
}

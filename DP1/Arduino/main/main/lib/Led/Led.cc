#include "Led.h"
#include <Arduino.h>

#define ANALOG_MAX 255
#define DELAY 10

void LED::dim(int analogPin)
{
  // dim a LED
  for (size_t i = 0; i <= ANALOG_MAX + 1; i++)
  {
    analogWrite(analogPin, i);
    delay(DELAY);
  }

  for (size_t i = 0; i <= ANALOG_MAX; i++)
  {
    analogWrite(analogPin, ANALOG_MAX - i);
    delay(DELAY);
  }

}

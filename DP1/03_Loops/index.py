# Input

tSpeed, aSpeed = 5, 3
tPos, aPos = 0, 9
seconds = 0

# Process

while tPos != aPos and tPos <= aPos:
    tPos += tSpeed
    aPos += aSpeed
    seconds += 1

# Output
print("Same position at {} seconds".format(seconds) if tPos ==
      aPos else "surpassed after {}".format(seconds))

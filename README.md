# pxt-ada

Extention for [MakeCode](https://makecode.com/) to program our robot named *Ada*.

<p align="center">
    <img src="./static/libs/thumbnail.jpg" alt="Ada and Laptop" width="50%">
</p>

This extension provides a set of blocks that can be used to control the robot's motors and ultrasound sensor.

<br/>

### Supported targets

* for PXT/microbit

<br/>

## API Reference

### Motors

#### `ada.forward(speed: number, duration: number)`

Drive both motors forward at a specified power for a set time.

| Parameter  | Type    | Description                               |
|------------|---------|-------------------------------------------|
| speed      | number  | Power (0-100, %), default 50              |
| duration   | number  | Time in seconds to move forward, default 1|

- Left and right motors spin forward at the chosen speed.
- Automatically stops after `duration` seconds.

---

#### `ada.backwards(speed: number, duration: number)`

Drive both motors backward at a specified power for a set time.

| Parameter  | Type    | Description                                 |
|------------|---------|---------------------------------------------|
| speed      | number  | Power (0-100, %), default 50                |
| duration   | number  | Time in seconds to move backward, default 1 |

- Both motors spin in reverse.
- Automatically stops after `duration` seconds.

---

#### `ada.left(speed: number, duration: number)`

Turn both motors left at a specified power for a set time.

| Parameter  | Type    | Description                                |
|------------|---------|--------------------------------------------|
| speed      | number  | Power (0-100, %), default 50               |
| duration   | number  | Time in seconds to turn, default 1         |

- Both motors rotate to turn left.

---

#### `ada.right(speed: number, duration: number)`

Turn both motors right at a specified power for a set time.

| Parameter  | Type    | Description                                 |
|------------|---------|---------------------------------------------|
| speed      | number  | Power (0-100, %), default 50                |
| duration   | number  | Time in seconds to turn, default 1          |

- Both motors rotate to turn right.

---

#### `ada.brake()`

**Stop the motors immediately.**

- Cuts power to both motors.
- Can be used at any time to halt the robot.

---

#### `ada.set_forward(speed: number)`

*(Advanced)* Drive both motors forward at a specified power **without timing** (runs until manually stopped).

| Parameter | Type    | Description                    |
|-----------|---------|--------------------------------|
| speed     | number  | Power (0-100, %), default 50   |

---

#### `ada.set_backwards(speed: number)`

*(Advanced)* Drive both motors backward at a specified power **without timing** (runs until manually stopped).

| Parameter | Type    | Description                    |
|-----------|---------|--------------------------------|
| speed     | number  | Power (0-100, %), default 50   |

---

#### `ada.freeroam(left: number, right: number): void`

*(Advanced)* Directly set the speed and direction of each motor.

| Parameter | Type    | Description                                   |
|-----------|---------|-----------------------------------------------|
| left      | number  | Left motor speed (-100 to 100, negative reverses)  |
| right     | number  | Right motor speed (-100 to 100, negative reverses) |

- Values between -100 (full reverse) and 100 (full forward).
- Useful for implementing custom maneuvers or algorithms.

---

### Sensors

#### `ada.read_distance(unit: DistanceUnit): number`

Read the current distance using an ultrasonic sensor.

| Parameter | Type         | Description                           |
|-----------|--------------|---------------------------------------|
| unit      | DistanceUnit | The unit for returned distance        |

- Triggers the ultrasonic sensor and returns the measured distance.
- Units:
    - `DistanceUnit.CM`: Distance in centimeters
    - `DistanceUnit.INCHES`: Distance in inches
    - `DistanceUnit.MICROSECONDS`: Raw echo time (for custom calculations)

<br/>

---

License MIT
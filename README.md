# pxt-ada

Extention for [MakeCode](https://makecode.com/) to program our robot named *Ada* using the [Micro:bit](https://microbit.org/) and the [Motorbit from Elecfreaks](https://www.elecfreaks.com/learn-en/microbitKit/motor_bit_smart_car/motor_bit_v16.html).

<p align="center">
    <img src="./static/libs/thumbnail.jpg" alt="Ada and Laptop" width="50%">
</p>

This extension provides a set of blocks that can be used to control the robot's motors and ultrasound sensor.

<br/>

### Quick example

Control the robot to move forward for 2 seconds, turn left for 1 second, and then stop.

```blocks
ada.forward(50, 2)
ada.left(50, 1)
```

Use the ultrasonic sensor to stop the robot when an object is within 20 cm.

```blocks
basic.forever(() => {
    if (ada.read_distance(DistanceUnit.CM) < 20) {
        ada.brake()
    } else {
        ada.forward(50, 1)
    }
})
```

### Supported targets

* for PXT/microbit

<br/>

## API Reference

### Motors

```sig
ada.forward(50, 1);
```

Drive both motors forward at a specified power for a set time.

| Parameter  | Type    | Description                               |
|------------|---------|-------------------------------------------|
| speed      | number  | Power (0-100, %), default 50              |
| duration   | number  | Time in seconds to move forward, default 1|

- Left and right motors spin forward at the chosen speed.
- Automatically stops after `duration` seconds.

---

```sig
ada.backwards(50, 1);
```

Drive both motors backward at a specified power for a set time.

| Parameter  | Type    | Description                                 |
|------------|---------|---------------------------------------------|
| speed      | number  | Power (0-100, %), default 50                |
| duration   | number  | Time in seconds to move backward, default 1 |

- Both motors spin in reverse.
- Automatically stops after `duration` seconds.

---

```sig
ada.left(speed: number, duration: number);
```

Turn both motors left at a specified power for a set time.

| Parameter  | Type    | Description                                |
|------------|---------|--------------------------------------------|
| speed      | number  | Power (0-100, %), default 50               |
| duration   | number  | Time in seconds to turn, default 1         |

- Both motors rotate to turn left.

---

```sig
ada.right(speed: number, duration: number);
```


Turn both motors right at a specified power for a set time.

| Parameter  | Type    | Description                                 |
|------------|---------|---------------------------------------------|
| speed      | number  | Power (0-100, %), default 50                |
| duration   | number  | Time in seconds to turn, default 1          |

- Both motors rotate to turn right.

---

```sig
ada.brake();
```

**Stop the motors immediately.**

- Cuts power to both motors.
- Can be used at any time to halt the robot.

---

```sig
ada.set_forward(50);
```

*(Advanced)* Drive both motors forward at a specified power **without timing** (runs until manually stopped).

| Parameter | Type    | Description                    |
|-----------|---------|--------------------------------|
| speed     | number  | Power (0-100, %), default 50   |

---

```sig
ada.set_backwards(50);
```

*(Advanced)* Drive both motors backward at a specified power **without timing** (runs until manually stopped).

| Parameter | Type    | Description                    |
|-----------|---------|--------------------------------|
| speed     | number  | Power (0-100, %), default 50   |

---

```sig
ada.freeroam(50, 50);
```

*(Advanced)* Directly set the speed and direction of each motor.

| Parameter | Type    | Description                                   |
|-----------|---------|-----------------------------------------------|
| left      | number  | Left motor speed (-100 to 100, negative reverses)  |
| right     | number  | Right motor speed (-100 to 100, negative reverses) |

- Values between -100 (full reverse) and 100 (full forward).
- Useful for implementing custom maneuvers or algorithms.

---

### Sensors

```sig
ada.read_distance(DistanceUnit.CM);
```

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


```package
ada=github:martinwork/pxt-ada
```

<script src="https://makecode.com/gh-pages-embed.js"></script>
<script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

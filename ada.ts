    
enum UltrasoundPins {
    TRIG = DigitalPin.P15,
    ECHO = DigitalPin.P14
} 

//% emitAsConstant
enum DistanceUnit {
    //% block="cm"
    CM = 0,
    //% block="inches"
    INCHES = 1,
    //% block="microseconds"
    MICROSECONDS = 2
}

//% color="#ee7521" weight=100 icon="\uf013" block="Ada"
//% groups=['Motors', 'Sensors', 'Others']
namespace Ada 
{
    //% block="Forward at $speed power for $duration seconds"
    //% speed.min=0 speed.max=100 speed.defl=50
    //% duration.min=0 duration.defl=1
    //% group="Motors" weight=100
    export function forward(speed: number, duration: number) {
        const s = speed * 1023 / 100;

        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)

        pins.analogWritePin(AnalogPin.P1, s)
        pins.analogWritePin(AnalogPin.P2, s)

        basic.pause(duration * 1000);
        Ada.brake();
    }

    //% block="Backwards at $speed power for $duration seconds"
    //% speed.min=0 speed.max=100 speed.defl=50
    //% duration.min=0 duration.defl=1
    //% group="Motors" weight=99
    export function backwards(speed: number, duration: number) {
        const s = speed * 1023 / 100;

        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)

        pins.analogWritePin(AnalogPin.P1, s)
        pins.analogWritePin(AnalogPin.P2, s)

        basic.pause(duration * 1000);
        Ada.brake();
    }

    //% block="Turn left at $speed power for $duration seconds"
    //% speed.min=0 speed.max=100 speed.defl=50
    //% duration.min=0 duration.defl=1
    //% group="Motors" weight=90
    export function left(speed: number, duration: number) {
        const s = speed * 1023 / 100;

        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 1)

        pins.analogWritePin(AnalogPin.P1, s)
        pins.analogWritePin(AnalogPin.P2, s)

        basic.pause(duration * 1000);
        Ada.brake();
    }

    //% block="Turn right at $speed power for $duration seconds"
    //% speed.min=0 speed.max=100 speed.defl=50
    //% duration.min=0 duration.defl=1
    //% group="Motors" weight=89
    export function right(speed: number, duration: number) {
        const s = speed * 1023 / 100;

        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)

        pins.analogWritePin(AnalogPin.P1, s)
        pins.analogWritePin(AnalogPin.P2, s)

        basic.pause(duration * 1000);
        Ada.brake();
    }


    //% block="Stop the motors" group="Motors" weight=0
    export function brake() {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)

        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 0)
    }

    //% block="Forward at $speed power"
    //% speed.min=0 speed.max=100 speed.defl=50
    //% group="Motors" weight=100
    //% advanced=true
    export function set_forward(speed: number) {
        const s = speed * 1023 / 100;

        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)

        pins.analogWritePin(AnalogPin.P1, s)
        pins.analogWritePin(AnalogPin.P2, s)
    }

    //% block="Backwards at $speed power"
    //% speed.min=0 speed.max=100 speed.defl=50
    //% group="Motors" weight=99
    //% advanced=true
    export function set_backwards(speed: number) {
        const s = speed * 1023 / 100;

        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)

        pins.analogWritePin(AnalogPin.P1, s)
        pins.analogWritePin(AnalogPin.P2, s)
    }

    //% block="Left motor at $left and right motor at $right"
    //% left.min=-100 left.max=100
    //% right.min=-100 right.max=100
    //% group="Motors" weight=80
    //% advanced=true
    export function freeroam(left: number, right: number): void {
        if (left > 0) {
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.analogWritePin(AnalogPin.P1, left * 1023 / 100)
        } else {
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.analogWritePin(AnalogPin.P1, - left * 1023 / 100)
        }

        if (right > 0) {
            pins.digitalWritePin(DigitalPin.P12, 1)
            pins.analogWritePin(AnalogPin.P2, right * 1023 / 100)
        } else {
            pins.digitalWritePin(DigitalPin.P12, 0)
            pins.analogWritePin(AnalogPin.P2, - right * 1023 / 100)
        }
    }

    // --- SENSORS ---
 
    //% block="distance in $unit"
    //% blockId="read_distance"
    //% unit.shadow=read_distance_units
    //% group="Sensors" weight=100
    export function read_distance(unit: DistanceUnit): number {

        // Set trigger to HIGH for 10 microseconds
        pins.digitalWritePin(UltrasoundPins.TRIG, 1);
        control.waitMicros(10);

        pins.digitalWritePin(UltrasoundPins.TRIG, 0);

        // Read echo pin, return distance in cm
        const duration = pins.pulseIn(UltrasoundPins.ECHO, PulseValue.High);
        switch (unit) {
            case DistanceUnit.CM:
                return Math.floor(duration * 0.034 / 2);
            case DistanceUnit.INCHES:
                return Math.floor(duration * 0.0133 / 2);
            case DistanceUnit.MICROSECONDS:
                return duration;
            default:
                return 0;
        }
    }
}
class Vehicle {
    constructor(name, company, id) {
        this.name = name;
        this.company = company;
        this.id = id;
    }
}

class Car extends Vehicle {
    constructor(name, company, id, carType) {
        super(name, company, id);
        this.carType = carType;
    }
}

class Plane extends Vehicle {
    constructor(name, company, id, planeType) {
        super(name, company, id);
        this.planeType = planeType;
    }
}

class Employee {
    constructor(emp_name, emp_id, dateOfBirth) {
        this.emp_name = emp_name;
        this.emp_id = emp_id;
        this.dateOfBirth = dateOfBirth;
    }
}

class Driver extends Employee {
    constructor(emp_name, emp_id, dateOfBirth, driver_licenseID) {
        super(emp_name, emp_id, dateOfBirth);
        this.driver_licenseID = driver_licenseID;
    }
}

class Pilot extends Employee {
    constructor(emp_name, emp_id, dateOfBirth, pilot_LicenseID) {
        super(emp_name, emp_id, dateOfBirth);
        this.pilot_LicenseID = pilot_LicenseID;
    }
}

class Booking {
    reservationID;
    reservationDate;
    vehiclesArray;
    employeesArray;
    static bookingsArray=[];

    constructor(vehiclesArray, employeesArray, vehicleId, employeeId) {
        this.vehiclesArray = vehiclesArray
        this.employeesArray = employeesArray
        this.book(vehicleId, employeeId);
    }

    book(vehicleId, employeeId) {
        const employee = this.employeesArray.find(emp => emp.emp_id === employeeId);
        const vehicle = this.vehiclesArray.find(veh => veh.id === vehicleId);

        if (employee === undefined || vehicle === undefined) {
            console.log("Employee or Vehicle not found.");
            return;
        }

        if (employee instanceof Pilot && vehicle instanceof Car) {
            console.log("A pilot cannot drive a car.");
            return;
        } else if (employee instanceof Driver && vehicle instanceof Plane) {
            console.log("A driver cannot operate a plane.");
            return;
        }

        this.reservationID = Booking.bookingsArray.length + 1;
        this.vehicleId = vehicleId;
        this.employeeId = employeeId;
        this.reservationDate = new Date().toLocaleString();
        Booking.bookingsArray.push(this);
        console.log("Booking successful");
    }

    static printBookingDetails() {
        console.log("\nBooking details:");

        Booking.bookingsArray.map(booking => {
            console.log(`Reservation ID: ${booking.reservationID}`);
            console.log(`Reservation Date: ${booking.reservationDate}`);
            console.log(`Vehicle ID: ${booking.vehicleId}`);
            console.log(`Employee ID: ${booking.employeeId}`);
            console.log("--------------------");
        });
    }

}

let car1 = new Car('Camry', 'Toyota', 1, 'Gas');
let car2 = new Car('Taurus', 'Ford', 2, 'Hybrid');
let car3 = new Car('Benz', 'Mercedes', 3, 'Electric');
let plane1 = new Plane('A320', 'Boeing', 10, 'Commercial');
let plane2 = new Plane('A380', 'Airbus', 20, 'Commercial');

let employee1 = new Driver('Ahmed', 101, 2000, 'A111');
let employee2 = new Driver('Fahad', 102, 2001, 'A222');
let employee3 = new Driver('Khalid', 103, 2002, 'A333');
let employee4 = new Pilot('Rami', 201, 2003, 'B111');
let employee5 = new Pilot('Saad', 202, 2004, 'B222');

let vehicles = [car1, car2, car3, plane1, plane2];
let employees = [employee1, employee2, employee3, employee4, employee5];
//let bookingsArray = [];

booking1 = new Booking(vehicles, employees, 1, 101);
booking2 = new Booking(vehicles, employees, 10, 201);
booking3 = new Booking(vehicles, employees, 20, 102);
booking4 = new Booking(vehicles, employees, 2, 202);
booking5 = new Booking(vehicles, employees, 5, 101);


Booking.printBookingDetails();
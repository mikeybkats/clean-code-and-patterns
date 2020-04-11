"use strict";
class EmployeeBase {
}
class CommissionedEmployee extends EmployeeBase {
    constructor() {
        super(...arguments);
        this.isPayday = () => { };
        this.calculatePay = () => { };
        this.deliverPay = () => { };
    }
}
class HourlyEmployee extends EmployeeBase {
    constructor() {
        super(...arguments);
        this.isPayday = () => { };
        this.calculatePay = () => { };
        this.deliverPay = () => { };
    }
}
class SalariedEmployee extends EmployeeBase {
    constructor() {
        super(...arguments);
        this.isPayday = () => { };
        this.calculatePay = () => { };
        this.deliverPay = () => { };
    }
}
class EmployeeFactoryImpl {
    makeEmployee(r) {
        switch (r.type) {
            case "COMMISSIONED":
                return new CommissionedEmployee();
            case "HOURLY":
                return new HourlyEmployee();
            case "SALARIED":
                return new SalariedEmployee();
            default:
                throw new TypeError('Type of record does not exist');
        }
    }
}

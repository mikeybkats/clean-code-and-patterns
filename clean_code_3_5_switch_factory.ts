// abstract classes are classes that set a base 
// other classes can extend the abstract class
// abstract classes cannot be instantiated directly
//
interface IEmployeeRecord {
  payToDate: number;
  type: string;
}

abstract class EmployeeBase {
  public abstract isPayday();
  public abstract calculatePay();
  public abstract deliverPay(pay: number);
}

interface EmployeeFactory {
  makeEmployee(record: IEmployeeRecord): EmployeeBase;
}

class CommissionedEmployee extends EmployeeBase {
  public isPayday = () => {}
  public calculatePay = () => {}
  public deliverPay = () => {}
}

class HourlyEmployee extends EmployeeBase {
  public isPayday = () => {}
  public calculatePay = () => {}
  public deliverPay = () => {}
}

class SalariedEmployee extends EmployeeBase {
  public isPayday = () => {}
  public calculatePay = () => {}
  public deliverPay = () => {}
}

class EmployeeFactoryImpl implements EmployeeFactory {
  public makeEmployee(r: IEmployeeRecord): EmployeeBase {
    switch(r.type) {
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

import './baseTypes/1'
import './baseTypes/2'
import './baseTypes/3'
import './baseTypes/4'
import './baseTypes/5'
import './baseTypes/6'
import './baseTypes/7'
// import './baseTypes/8'
// import './baseTypes/9'

class Car {
    drive() {
      console.log('Driving a car...');
    }
  }
  
  class Truck {
    drive() {
      console.log('Driving a truck...');
    }
  
    loadCargo(amount: number) {
      console.log(`Loading cargo: ${amount}`);
    }
  }
  
  // Define your type
  
  type Vehicle = Car | Truck;
  
  // Create your instances
  
  const carInstance = new Car();
  const truckInstance = new Truck();
  
  // Function to use vehicle
  
  function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
  
    if (vehicle instanceof Truck) {
      vehicle.loadCargo(1000);
    }
  }
  
  useVehicle(carInstance);
  useVehicle(truckInstance);
  
  export {};
# Clean Code and Patterns

_a gathering of notes from multiple code teachings_

## from Head first design patterns a brain friendly guide:

## OO Basics

**_Abstraction_**  
This concept tells the developer to distill away the most basic form of an object. Many kinds of ducks could be expressed by one main duck class.

```
class Duck {
    // duck methods
}

class Mallard extends Duck {
    // mallard methods
    // the idea here is that the specific features of the mallard are
    // abstracted away
}
```

**_Encapsulation_**  
Encapsulation is pretty simple. It's a strategy where you take the data that changes and put it in an isolated place.

_"Take what varies and encapsulate it so it won't effect the rest of your code" Location 554_

**_Polymorphism_**  
With polymorphism you create a objects of different types that can be accessed through the same interface.

_in other words:_

you could have three different classes that all take the same interface:

```
interface IFlyBehavior {
    fly: () => void;
}

class FlyWithWings implements IFlyBehavior {}
class FlyWithJetPack implements IFlyBehavior {}
class FlyWIthAirplane implements IFlyBehavior {}
```

All three classes have a fly() function. All three have different implementations of that fly() function.

**_Inheritance_**  
Similar to abstraction. Subclasses inherit the methods of the base class.

## OO Principles:

**_Encapsulate what varies_**

**_Favor composition over inheritance_**

**_Program to interfaces, not implementations_**

## OO Patterns:

**_The Strategy Pattern - defines a family of algorithms, encapsulate each one, and makes them interchangeable. Strategy lets the algorithm vary independently, from the clients that use it._**

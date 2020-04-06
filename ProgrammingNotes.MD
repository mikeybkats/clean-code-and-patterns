# Clean Code and Patterns

_a gathering of notes from multiple code teachings_

## From Head first design patterns a brain friendly guide:

## Object Oriented Patterns:

**_The Strategy Pattern_** - defines a family of algorithms, encapsulate each one, and makes them interchangeable. Strategy lets the algorithm vary independently, from the clients that use it.

**_The Observer Pattern_** - A pattern for communicating state to a set of objects in a loosely coupled manner. Think of a newspaper publisher business with subscribers. There is a publisher or SUBJECT which which broadcasts or sends data and there is an OBSERVER that consumes or subscribes to the changes.

_*"The Observer pattern defines a one-to-many dependency betwen objects so that when one object changes state all of its dependents are notified and updated automatically - Location 1081"*_

**_The Decorator Pattern_**

_*"The Decorator Pattern attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality."*_

**_The Factory Pattern_**

_*"The Factory Method Pattern defines an interface for creating an object, but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses."*_

## chapter 1 - OO Basics

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
Encapsulation is pretty simple. It's a strategy where you take the data that changes and put it in an isolated place. "Take what varies in a system and encapsulate it"

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

## chapter 1 - the strategy pattern

OO Principles:

**_Encapsulate what varies_**

**_Favor composition over inheritance_**

**_Program to interfaces, not implementations_**

## chapter 2 - the observer pattern

OO Principles:

**_Strive for loosely coupled designs between objects that interact_**

## chapter 3 - the decorator pattern

OO Principles:

The open closed principle:

**_Code should be closed to change, but open to extension._**  
in other words:  
**_Code should be open for extension, but closed for modification._**

Concentrate on the areas of your code that are most likely to change and apple the principles there.

## chapter 4 - the factory pattern

OO Principles:

Dependency inversion principle:
Depend upon abstractions, don't depend on concrete classes. In other words - high level components should not depend on low level components. The should both depend on abstractions.

guidelines:

-   no variable should hold reference to a concrete class
-   no class should derive from a concrete class
-   no method should override an imlpemented method of any of its base classes

remember these are guidelines, it's okay to violate some but not all. Avoid violating when you can.

**_The Factory Method Pattern_**

"Defines an interface for creating an object, but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses."

"The intent of Factory Method is to allow a class to defer instantiation to its subclasses."

**_The Abstract Factory Pattern_**

"Provides an interface for creating families of related or dependent objects without specifying their concrete classes."

"The big difference between the Factory Method and the Abstract Factory is that the Factory Method Pattern creates objects through inheritance while the Abstract Factory creates objects through interfaces."

"The intent of Abstract Factory is to create families of related objects without having to depend on their concrete classes."

## Chapter 5 - The Singleton Pattern

The singleton pattern insures that your class produces only one unique instance of itself.

# SOLID Principles

SRP: Single Responsibility Principle -  
OCP: Open closed principle - objects are extendable, but not editable
LSP: Liskov Substitution Principle - derived classes must be usable through the base class interface, without the need for the user to know the difference.
ISP: Interface Segregation Principle
DIP: Dependency inversion principle - high level policies do not know about low level details

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

**_Principle of least knowledge: talk only to your immediate friends._**

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

## Chapter 6 - The Command Pattern

The command pattern encapsulates method invocation. All command objects implement the same interface.

Def from clean code:
The command pattern encapsulates a request as an object, thereby letting you parameterize other objects with different requests, queue or log requests, and support undoable opperations. This is an example of parameterizing an object with a command.

The command pattern is helpful for implementing logging and undo.

There are a few players in this pattern:

-   command object manager - highest in the command pattern food chain. acts like a remote and tells its commands to "execute their action / do their thing". An example of a command object manager is a remote control. Each remote control button has a slot. Each button when pressed fires a command.
-   the commands - have one primary function: to _execute_ a method on a command object. The command is specific to a single method on a command object. Example: A light is controled by two command object classes LightOnCommand and LightOffCommand. Each command shares the same interface.
-   the command objects - is an object which has a limited number of tasks or modes. The objects modes/tasks are accessed by the commands. Following the example a Light class would have two methods on and off.

The command pattern relies on many many small classes. These small classes are command implementations. Each implementation encapsulates a request to the reciever.

## Chapter 7 - The adapter and facade patterns

The decorator pattern: wraps objects to give them new responsibilities. This pattern wraps interfaces to make them into something new.

How does an adapter work?

-   the client makes a request to the adapter by calling the method on it that matches the target interface.
-   the adapter translates the request into one or more calls on the adaptee using the adaptee interface.
-   the client recieves the call and never knows the difference.

The adapter pattern converts the interface of a class into another interface the client expects. It lets classes work together that couldn't otherwise because of incompatible interfaces.

There are two kinds of adapters: object adapters and class adapters.

Facade pattern: takes a complex subsystem and makes it easier to use by implementing a class that provides one reasonable interface. It allows you to decouple your client implementation from any one subsystem. It provides a unified interface to a set of interfaces in a subsystem.

new principle: the principle of least knowledge
reduces the number of dependencies between objects. it reduces software maintenance and results in more wrapper classes being written. This results in increased application complexity and descreased runtime performance.

## Chapter 8 - Template Method Pattern.

The template method pattern defines a skeleton of an algorithm in a method, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the alrgorithms structure.

A template is just a method that defines a set of steps. One or more of the steps is defined as abstract so that sub classes can shape the behavior of that step independantly.

The hollywood principle: don't call us, we'll call you.

"Dependency Rot" - when high level components depend on lowlevel components that depend on high level components.

## Chapter 9 - The iterator pattern

The iterator pattern provides a way to access elements of an aggregate object (like an array or list) sequentially without exposing its underlying representation.

This is valuable because you may have two classes that both need to iterate several different kinds of data, and you want to iterate through the different data by using only one method.

It places the task of traversal on the iterator not on the aggregate.

Single Responsibility - a class should have only one reason to change.

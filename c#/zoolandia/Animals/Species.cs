using System;

namespace Zoolandia
{
  public class Cow:Animal
  {
    public bool milk { get; set; }
    public bool horns { get; set; }
    public int spots { get; set; }
    public override void sound()
    {
      Console.WriteLine("moo");
      base.sound();
    }
    public Cow()
    {
      this.name = "Betsie";
    }
    public Cow(string name)
    {
      this.name = name;
    }
    public Cow(int spot)
    {
      this.spots = spot;
    }
    public Cow(string name, int spot)
    {
      this.name = name;
      this.spots = spot;
    }
  }
  public class Cat:Animal
  {
    public bool claws { get; set; }
    public bool whiskers { get; set; }
    public override void sound()
    {
      Console.WriteLine("meow");
      base.sound();
    }
    public Cat()
    {
      this.name = "Whiskers";
    }
  }
  public class Dog:Animal
  {
    public bool bark { get; set; }
    public override void sound()
    {
      Console.WriteLine("woof");
      base.sound();
    }
    public Dog()
    {
      this.name = "Sparky";
    }
  }
}

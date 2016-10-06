using System;

namespace Zoolandia
{
  public class Siamese:Cat
  {
    string commonName = "Siamese";
    public void eat()
    {
      Console.WriteLine($"{name} is eating some food.");
    }
    public void eat(string food)
    {
      Console.WriteLine($"{name} is eating some {food}.");
    }
    public void eat(int qty, string food)
    {
      Console.WriteLine($"{name} is eating {qty} {food}.");
    }
  }
  public class Bengal:Cat
  {
    string commonName = "Bengal";
  }
}
using System;

namespace Zoolandia.animals
{
  public class Dog:genus
  {
    public bool bark { get; set; }
    public override void sound()
    {
      Console.WriteLine("woof");
      base.sound();
    }
  }
}

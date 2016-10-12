using System;

namespace Zoolandia.animals
{
  public class Cat:genus
  {
    public bool claws { get; set; }
    public override void sound()
    {
      Console.WriteLine("meow");
      base.sound();
    }
  }
}

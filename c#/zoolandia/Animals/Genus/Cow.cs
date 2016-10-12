using System;

namespace Zoolandia.animals
{
  public class Cow:genus
  {
    public bool milk { get; set; }
    public int spots { get; set; }
    public override void sound()
    {
      Console.WriteLine("moo");
      base.sound();
    }
  }
}
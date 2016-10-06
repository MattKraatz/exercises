using System;

namespace Zoolandia
{
    public class Animal
    {
      public string name { get; set; }
      public int weight { get; set; }
      public double height { get; set; }
      public string gender { get; set; }
      public virtual void sound ()
      {
          Console.WriteLine("wop");
      }
      public virtual void walk ()
      {
          Console.WriteLine($"{name} is walking!");
      }
    }
}

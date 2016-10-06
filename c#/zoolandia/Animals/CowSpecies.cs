using System;

namespace Zoolandia
{
  public class TexasLonghorn:Cow
  {
    string commonName = "Texas Longhorn";
    public override void walk()
    {
      Console.WriteLine("{name} the {commonName} is walking!");
    }
  }
  public class Highland:Cow
  {
    string commonName = "Highland Cattle";
    public override void walk()
    {
      Console.WriteLine("{name} the {commonName} is walking!");
    }
  }
}
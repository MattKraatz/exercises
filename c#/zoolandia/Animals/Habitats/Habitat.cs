using System.Collections.Generic;

namespace Zoolandia.animals
{
  public class Habitat
  {
    public string name { get; set; }
    public int size { get; set; }
    public List<Animal> inhabitants = new List<Animal>();
  }
}
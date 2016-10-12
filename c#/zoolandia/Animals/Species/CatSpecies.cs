namespace Zoolandia.animals
{
  public class Siamese:species
  {
    public Siamese()
    {
      this.commonName = "Siamese";
      this.genus = new Cat();
    }
  }
  public class Bengal:species
  {
    public Bengal()
    {
      this.commonName = "Bengal";
      this.genus = new Cat();
    }
  }
}
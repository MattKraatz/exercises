namespace Zoolandia.animals
{
  public class GoldenRetriever:species
  {
    public GoldenRetriever()
    {
      this.commonName = "Golden Retriever";
      this.genus = new Dog();
    }
  }
  public class Greyhound:species
  {
    public Greyhound()
    {
      this.commonName = "Greyhound";
      this.genus = new Dog();
    }
  }
}
namespace Zoolandia.animals
{
  public class TexasLonghorn:species
  {
    public TexasLonghorn()
    {
      this.commonName = "Texas Longhorn";
      this.genus = new Cow();
    }
  }
  public class Highland:species
  {
    public Highland()
    {
      this.commonName = "Highland Cattle";
      this.genus = new Cow();
    }
  }
}
using System;
using System.Collections.Generic;
using Zoolandia.animals;

namespace Zoolandia
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // Generate Habitats
            Habitat Pasture = new Pasture();
            Habitat Home = new PetHome();
            
            // Generate Animals
            Animal Texas = new Animal
            {
                species = new TexasLonghorn(),
                gender = "Male"
            };
            Texas.setName("Bessie");

            Animal Siam = new Animal
            {
                species = new Siamese(),
                gender = "female"
            };
            Siam.setName("Mouser");

            Animal Grey = new Animal
            {
                species = new Greyhound(),
                gender = "male"
            };
            Grey.setName("Sparky");

            // Load Animals into Habitats
            Pasture.inhabitants.Add(Texas);
            Home.inhabitants.Add(Siam);
            Home.inhabitants.Add(Grey);

            // Resolve to Console
            Console.WriteLine(Pasture.name);
            foreach (Animal animal in Pasture.inhabitants)
            {
                Console.WriteLine($"   My {animal.gender} {animal.species.genus.GetType().Name} named {animal.name} lives here!");
            }
            Console.WriteLine(Home.name);
            foreach (Animal animal in Home.inhabitants)
            {
                Console.WriteLine($"   My {animal.gender} {animal.species.genus.GetType().Name} named {animal.name} lives here!");
            }
        }
    }
}

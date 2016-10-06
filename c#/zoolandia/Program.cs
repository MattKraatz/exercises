using System;
using System.Collections.Generic;

namespace Zoolandia
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Cow cow = new Cow
            {
                weight = 1500,
                height = 60,
                gender = "female",
                milk = false,
                spots = 20
            };

            Cow cow2 = new Cow("Holy Cow");
            Cow cow3 = new Cow(15);
            Cow cow4 = new Cow("Betsy",25);

            Cat cat = new Cat
            {
                weight = 1350,
                height = 55.46,
                gender = "male",
                claws = true
            };

            Siamese siamese = new Siamese();
            siamese.eat();
            siamese.eat("catfood");
            siamese.eat(4, "cat treats");

            Dog dog = new Dog
            {
                weight = 1325,
                height = 48.35,
                gender = "male",
                bark = true
            };

            List<Animal> MyAnimals = new List<Animal>();
            MyAnimals.Add(cow);
            MyAnimals.Add(cat);
            MyAnimals.Add(dog);
            MyAnimals.Add(siamese);

            foreach (Animal animal in MyAnimals)
            {
                Console.WriteLine($"I have a {animal.gender} {animal.GetType().Name} named {animal.name}, who weighs {animal.weight} and is {animal.height} inches tall.");
                animal.sound();
            }
        }
    }
}

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
                horns = true,
                spots = false
            };
            Cat cat = new Cat
            {
                weight = 1350,
                height = 55.46,
                gender = "male",
                claws = true,
                whiskers = true
            };
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

            foreach (Animal animal in MyAnimals)
            {
                Console.WriteLine($"I have a {animal.gender} {animal.GetType().Name} named {animal.name}, who weighs {animal.weight} and is {animal.height} inches tall.");
                animal.sound();
            }
        }
    }
}

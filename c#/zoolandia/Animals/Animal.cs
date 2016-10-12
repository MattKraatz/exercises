using System;

namespace Zoolandia.animals
{
    public class Animal: IWalk, IFly
    {
      private string _name = "";
      public void setName(string name) 
      {
        this._name = name;
      }
      public string name 
      {
        get
        {
          return _name;
        }
      }
      private string _gender { get; set; }
      public string gender {
        get
        {
          return _gender;
        }
        set
        {
          string lowerCaseValue = value.ToLower();
          if (lowerCaseValue == "male" || lowerCaseValue == "female")
          {
            _gender = lowerCaseValue;
          } else
          {
            Console.WriteLine("Gender can only be male or female, please.");
          }
        }
      }
      public species species { get; set; }
      public bool canWalk { get; set; }
      public bool canFly { get; set; }
    }
}

using System;

namespace ConsoleApplication
{
  public class CreditCardPayment:Payment
  {
    public int CreditCardNumber{get;set;}
    public override string MakePayment()
    {
      string message = String.Empty;
      if (this.Amount > 0 && this.CreditCardNumber > 0)
      {
        message = $"A payment of ${this.Amount} has been charged to your credit card";
      }
      return message;
    }
  }
}
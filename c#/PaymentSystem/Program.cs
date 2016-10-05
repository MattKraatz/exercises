using System;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string PaymentType = args[3];
            if (PaymentType == "p")
            {
                PayPalPayment PPP = new PayPalPayment
                {
                    Email = args[0],
                    Password = args[1],
                    Amount = Convert.ToDecimal(args[2])
                };
                Console.WriteLine(PPP.MakePayment());
            }
            else if (PaymentType == "c")
            {
                Payment CP = new Payment
                {
                    Amount = Convert.ToDecimal(args[2])
                };
                Console.WriteLine(CP.MakePayment());
            }
            else if (PaymentType == "cc")
            {
                CreditCardPayment CCP = new CreditCardPayment
                {
                    CreditCardNumber = Convert.ToInt16(args[4]),
                    Amount = Convert.ToDecimal(args[2])
                };
                Console.WriteLine(CCP.MakePayment());
            }
        }
    }
}

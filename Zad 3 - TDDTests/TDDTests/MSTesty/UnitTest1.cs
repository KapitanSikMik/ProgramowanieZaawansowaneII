using Microsoft.VisualStudio.TestTools.UnitTesting;
using TDDTests; 
using static TDDTests.Program;

namespace MSTesty
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            Kalkulator kalkulator = new Kalkulator();
            int a = 10;
            int b = 5;

            // Act
            int wynik = kalkulator.Dodawanie(a, b);

            // Assert
            Assert.AreEqual(15, wynik);
        }
    }
}
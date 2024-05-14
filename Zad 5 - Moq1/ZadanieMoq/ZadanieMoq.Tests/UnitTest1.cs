using Moq;
namespace ZadanieMoq.Tests
{
    [TestClass]
    public class MyModuleTests
    {
        [TestMethod]
        public void ProcessData_ShouldReturnProcessedData()
        {
            //Arrange
            var mockSomeService = new Mock<ISomeService>();
            mockSomeService.Setup(service => service.GetData()).Returns("Test Data");

            var myModule = new MyModule(mockSomeService.Object);

            //Act
            var result = myModule.ProcessData();

            //Assert
            Assert.AreEqual("Processed: Test Data", result);
        }
    }
}
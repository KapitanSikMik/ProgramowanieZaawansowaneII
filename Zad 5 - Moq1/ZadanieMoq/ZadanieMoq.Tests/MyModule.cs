using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ZadanieMoq.Tests
{
    public class MyModule
    {
        private readonly ISomeService _someService;

        public MyModule(ISomeService someService)
        {
            _someService = someService;
        }

        public string ProcessData()
        {
            var data = _someService.GetData();
            return $"Processed: {data}";
        }
    }
}

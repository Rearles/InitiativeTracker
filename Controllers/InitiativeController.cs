using Microsoft.AspNetCore.Mvc;

namespace CombatTracker.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InitiativeController : ControllerBase
    {
        private static readonly Random random = new Random();

        private readonly ILogger<InitiativeController> _logger;

        public InitiativeController(ILogger<InitiativeController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public  Get()
        {
            
        }
    }
}
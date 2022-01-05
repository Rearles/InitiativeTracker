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
        public Initiative GetInitiativePlayer(Player player)
        {
            int initiative = random.Next(1, 20);
            return new Initiative(player, null, initiative);
        }

        [HttpGet]
        public Initiative GetInitiativeNonPlayer(Nonplayer nonplayer)
        {
            int initiative = random.Next(1, 20);
            return new Initiative(null, nonplayer, initiative);
        }
    }
}
namespace CombatTracker
{
    
    public class Initiative
    {
        public Initiative(Player? player, Nonplayer? nonplayer, int initiative)
        {
            this.player = player;
            this.nonplayer = nonplayer;
            this.initativenum = initiative;
        }

        public Player? player { get; set; }

        public Nonplayer? nonplayer { get; set; }

        public int initativenum { get; set; }

    }
}
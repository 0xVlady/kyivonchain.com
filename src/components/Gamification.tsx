import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Trophy, Zap, Gift, Users, Star, Award, CheckCircle, Target } from 'lucide-react';

const Gamification: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t('gamification.passport'),
      description: 'Unique NFT that serves as your digital membership card',
      color: 'from-primary to-primary-light'
    },
    {
      icon: Zap,
      title: t('gamification.xp'),
      description: 'Earn points for hub check-ins, event attendance, and quest completion',
      color: 'from-ukraine-blue to-blue-400'
    },
    {
      icon: Gift,
      title: t('gamification.rewards'),
      description: 'Redeem XP for exclusive perks and community governance voting power',
      color: 'from-secondary to-secondary-dark'
    },
    {
      icon: Target,
      title: t('gamification.quests'),
      description: 'Complete challenges to earn bonus XP and unlock special achievements',
      color: 'from-ukraine-yellow to-yellow-400'
    }
  ];

  const achievements = [
    { name: 'First Check-in', xp: 50, icon: CheckCircle, unlocked: true },
    { name: 'Event Host', xp: 200, icon: Users, unlocked: true },
    { name: 'Community Leader', xp: 500, icon: Star, unlocked: false },
    { name: 'Web3 Pioneer', xp: 1000, icon: Trophy, unlocked: false }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-ukraine-blue/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t('gamification.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Level up your Web3 journey with our Solana-powered gamification system. 
              Earn XP, unlock achievements, and get exclusive rewards.
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-8"></div>
          </div>

          {/* Main Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-8 rounded-3xl group hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* XP Progress Example */}
          <div className="glass-card p-8 rounded-3xl mb-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Your Progress</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground font-medium">Current Level: Contributor</span>
                      <span className="text-primary font-bold">750 XP</span>
                    </div>
                    <div className="xp-bar h-3">
                      <div className="xp-fill" style={{ width: '75%' }}></div>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground mt-1">
                      <span>250 XP to next level</span>
                      <span>Next: Leader</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-muted-foreground mb-4">Recent Activities:</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground">Hub check-in today</span>
                        <span className="text-sm text-primary font-medium">+25 XP</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground">Attended DevCon workshop</span>
                        <span className="text-sm text-primary font-medium">+100 XP</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground">Completed onboarding quest</span>
                        <span className="text-sm text-primary font-medium">+50 XP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Achievements</h3>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                      achievement.unlocked 
                        ? 'bg-gradient-to-br from-primary/10 to-primary-light/10 border-primary/30' 
                        : 'bg-muted/30 border-muted'
                    }`}>
                      <div className="text-center">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2 ${
                          achievement.unlocked 
                            ? 'bg-gradient-primary text-white' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          <achievement.icon className="w-6 h-6" />
                        </div>
                        <h4 className={`font-medium text-sm mb-1 ${
                          achievement.unlocked ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                          {achievement.name}
                        </h4>
                        <p className={`text-xs ${
                          achievement.unlocked ? 'text-primary font-medium' : 'text-muted-foreground'
                        }`}>
                          {achievement.xp} XP
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="glass-card p-8 rounded-3xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join KYIV.ONCHAIN today and start earning XP, unlocking achievements, 
                and building your Web3 reputation in Ukraine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105">
                  Mint Your NFT Passport
                </button>
                <button className="btn-glass px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105">
                  View Quests
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gamification;
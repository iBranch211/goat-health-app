import { IonLabel, IonList, IonListHeader } from '@ionic/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { CREDITS_TEAM_MMH } from '../../data/credits/credits';
import { CreditsMemberItem } from '../CreditsMemberItem';

export const CreditsTeamMmh: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonList>
      <IonListHeader>
        <IonLabel>{t('CREDITS.TEAM.MMH')}</IonLabel>
      </IonListHeader>
      {CREDITS_TEAM_MMH.map((team, teamIndex) => {
        return (
          <React.Fragment key={teamIndex}>
            {team.members.map((member, memberIndex) => {
              return (
                <CreditsMemberItem
                  key={memberIndex}
                  name={t(member.name)}
                  position={t(member.position)}
                />
              );
            })}
          </React.Fragment>
        );
      })}
    </IonList>
  );
};

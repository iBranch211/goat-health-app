import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonFooter,
  IonHeader,
} from '@ionic/react';
import { push } from 'connected-react-router';
import { settingsOutline } from 'ionicons/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useMenus } from '../../utils/hooks/useMenus';
import './index.css';

export const Menu: React.FC = () => {
  const dispatch = useDispatch();
  const menus = useMenus();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonHeader>
        <IonItem lines="none" detail={false} color="primary">
          <IonLabel>Menu</IonLabel>
        </IonItem>
      </IonHeader>
      <IonContent>
        <IonList>
          {menus.map((menu, menuIndex) => {
            const { color, icon, title } = menu;

            if (menu.isHeader) {
              return (
                <IonListHeader key={menuIndex}>
                  <IonLabel>{title}</IonLabel>
                </IonListHeader>
              );
            }

            return (
              <IonMenuToggle key={menuIndex} autoHide={false}>
                <IonItem
                  routerLink={menu.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                  onClick={() => dispatch(push(menu.url))}
                >
                  <IonIcon color={color} icon={icon} slot="start" />
                  <IonLabel>{title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
      <IonFooter>
        <IonMenuToggle autoHide={false}>
          <IonItem
            routerLink={'/settings'}
            routerDirection="none"
            lines="none"
            detail={false}
            onClick={() => dispatch(push('/settings'))}
          >
            <IonIcon slot="start" icon={settingsOutline} />
            <IonLabel>Settings</IonLabel>
          </IonItem>
        </IonMenuToggle>
      </IonFooter>
    </IonMenu>
  );
};

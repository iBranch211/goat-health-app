import React from 'react';
import { connect } from 'react-redux';
import { IonCol, IonGrid, IonImg, IonRow, IonText } from '@ionic/react';
import { useTranslation } from 'react-i18next';
import ChapterFooter from '../footer';

interface ContainerProps {}

const Chapter0205: React.FC<ContainerProps> = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <IonGrid class="ion-padding ion-text-justify">
        <IonRow class="ion-justify-content-center">
          <IonCol size="12" sizeSm="6">
            <IonText>
              <h2 className="chapter-title">{t(`CHAPTER.02.05.TITLE`)}</h2>
            </IonText>
            <IonText>
              <p>{t(`CHAPTER.02.05.TEXT.PARAGRAPH.01`)}</p>
              <ul>
                <li>{t(`CHAPTER.02.05.TEXT.LIST.01.010000`)}</li>
                <li>{t(`CHAPTER.02.05.TEXT.LIST.01.020000`)}</li>
                <li>{t(`CHAPTER.02.05.TEXT.LIST.01.030000`)}</li>
                <li>{t(`CHAPTER.02.05.TEXT.LIST.01.040000`)}</li>
                <li>{t(`CHAPTER.02.05.TEXT.LIST.01.050000`)}</li>
              </ul>
              <div className="chapter-image-title">
                <IonImg src={t(`CHAPTER.02.05.IMAGE.01.FILENAME`)} />
                <IonText>{t(`CHAPTER.02.05.IMAGE.01.TITLE`)}</IonText>
              </div>
            </IonText>
          </IonCol>
        </IonRow>
      </IonGrid>
      <ChapterFooter
        previousChapter="/chapter/02/04"
        nextChapter="/chapter/02/06"
      />
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Chapter0205);

import React from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonContent,IonButtons,IonBackButton, IonFooter} from '@ionic/react';

import './style.css';

const Guide: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="center">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Guide</IonTitle>
        </IonToolbar>
      </IonHeader>

    <IonContent>


    </IonContent>

    <IonFooter>
      <IonToolbar>
        <IonTitle className="center">Footer</IonTitle>
      </IonToolbar>
    </IonFooter>

    </IonPage>
  );
};

export default Guide;
import React from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonContent,IonButtons,IonBackButton, IonFooter} from '@ionic/react';

import './style.css';

const Score: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="center">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Score</IonTitle>
        </IonToolbar>
      </IonHeader>

    <IonContent>


    </IonContent>

    <IonFooter>
      <IonToolbar>
        <IonTitle className="center">University of the Llanos</IonTitle>
      </IonToolbar>
    </IonFooter>

    </IonPage>
  );
};

export default Score;
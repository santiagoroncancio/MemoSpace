import React from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonContent,IonButtons,IonBackButton, IonFooter} from '@ionic/react';

import './style.css';

const Hard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="center">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Hard</IonTitle>
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

export default Hard;
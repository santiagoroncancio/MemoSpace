import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Memo Space</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        The world is your oyster 2.
        <p>
          If you get lost, the{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/">
            docs
          </a>
          will be your guide.
        </p>

        <IonButton color="primary" expand="block" size="default" href="#guide">Guide</IonButton>
        <IonButton color="primary" expand="block" size="default">Easy</IonButton>
        <IonButton color="primary" expand="block" size="default">Medium</IonButton>
        <IonButton color="primary" expand="block" size="default">Hard</IonButton>
        <IonButton color="primary" expand="block" size="default">Score</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;

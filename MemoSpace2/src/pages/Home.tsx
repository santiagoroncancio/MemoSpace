import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton, IonLabel } from '@ionic/react';

import React from 'react';

import './style.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="center">MemoSpace</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonLabel>
        <p className="center texto">
          MemoSpace is a memory game that helps the brain practice short-term memory. 
          The goal of the game is to try to find equal cards in a series of cards with 
          different figures in each of them,wich are even, that is each drawing is repeated.
        </p>
      </IonLabel>

        <IonButton expand="block" color="danger" href="/guide">Guide</IonButton>
        <IonButton expand="block" color="danger" href="/Easy">Easy</IonButton>
        <IonButton expand="block" color="danger" href="/Medium">Medium</IonButton>
        <IonButton expand="block" color="danger" href="/Hard">Hard</IonButton>
        <IonButton expand="block" color="danger" href="/Score">Score</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Home;

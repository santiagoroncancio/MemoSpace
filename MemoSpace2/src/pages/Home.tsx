import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton, IonLabel } from '@ionic/react';

import React from 'react';

import './style.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="center">Main Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonLabel>
        <h1 className="center">MemoSpace</h1>
        <p className="center texto">
          MemoSpace is a memory game that helps the brain practice short-term memory. 
          The goal of the game is to try to find equal cards in a series of cards with 
          different figures in each of them,wich are even, that is each drawing is repeated.
        </p>
      </IonLabel>

        <h2 className="center">Game mode</h2>
        <IonButton size="large" expand="block" href="/Easy">Easy</IonButton>
        <IonButton size="large" expand="block" href="/Medium">Medium</IonButton>
        <IonButton size="large" expand="block" href="/Hard">Hard</IonButton>
        <br/>
        {/* <h2 className="center"></h2> */}
        <IonButton size="large" expand="block" href="/guide">Guide</IonButton>
        <IonButton size="large" expand="block" href="/Score">Score</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Home;

import { IonContent, IonHeader, IonPage, IonTitle, IonButton } from '@ionic/react';
import React from 'react';
import '../pages/home.css';


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonTitle className="title">MemoSpace</IonTitle>
      </IonHeader>
      <IonContent className="bg">
        
        <p className="description">
        MemoSpace is a memory game that helps the brain practice short-term memory. The goal of the game is to try to find equal cards in a series of cards with different figures in each of them,wich are even, that is each drawing is repeated
        
        </p>
        <br></br>
        <IonButton className="button">GUIDE</IonButton>
        <IonButton className="button">EASY</IonButton>
        <br></br>
        <IonButton className="button">MEDIUM</IonButton>
        <IonButton className="button">HARD</IonButton>
        <br></br>
        <IonButton className="button">SCORE</IonButton>
        <br></br>

      </IonContent>
    </IonPage>
  );
};

export default Home;

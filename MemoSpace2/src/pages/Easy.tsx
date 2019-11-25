import React from 'react';
import {IonThumbnail,IonList,IonLabel,IonImg,IonItem,IonHeader, IonToolbar, IonPage, IonTitle, IonContent,IonButtons,IonBackButton, IonFooter} from '@ionic/react';

import './style.css';

type Item = {
  src: string;
  text: string;
};
const items: Item[] = [{ src: 'http://placekitten.com/g/300/300', text: 'a picture of a cat' }];


const Easy: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="center">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Easy</IonTitle>
        </IonToolbar>
      </IonHeader>

    <IonContent>

    <IonList>
      {items.map((image, i) => (
        <IonItem key={i}>
          <IonThumbnail slot="start">
            <IonImg src={image.src} />
          </IonThumbnail>
          <IonLabel>{image.text}</IonLabel>
        </IonItem>
      ))}
    </IonList>

    </IonContent>

    </IonPage>
  );
};

export default Easy;
import React from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle,IonSlide,IonSlides, IonContent,IonButtons,IonBackButton, IonFooter,IonIcon} from '@ionic/react';
import {volumeHigh} from 'ionicons/icons';

import './style.css';

const slideOpt={
    slidesPerView: 1
}

const Guide: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="center">
          
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          
          <IonTitle>Guide</IonTitle>

           <IonIcon slot="end" icon={volumeHigh} />

        </IonToolbar>
      </IonHeader>

    <IonContent>
      <IonSlides pager={true} options={slideOpt}>
        <IonSlide>
          <div  className="slide texto">
          <h1>Slide 1</h1>
          <p>
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
          </p>
          <p>
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
          </p>
          </div>
        </IonSlide>
        <IonSlide>
        <div  className="slide texto">
          <h1>Slide 2</h1>
          <p>
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
          </p>
          <p>
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
          </p>
          </div>
        </IonSlide>
        <IonSlide>
        <div  className="slide texto">
          <h1>Slide 3</h1>
          <p>
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
          </p>
          <p>
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
            text text text text text text text text text text text text text text
          </p>
          </div>
        </IonSlide>
      </IonSlides>
    </IonContent>

    <IonFooter>
      <IonToolbar>
        <IonTitle className="center">University of the Llanos</IonTitle>
      </IonToolbar>
    </IonFooter>

    </IonPage>
  );
};

export default Guide;
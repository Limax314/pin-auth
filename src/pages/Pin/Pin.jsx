import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon
} from '@ionic/react';
import { backspaceOutline } from 'ionicons/icons';
import './Pin.css';

/**
 * @file Pin.jsx
 * @description 4자리 숫자 PIN 입력을 위한 Ionic 기반 React 컴포넌트입니다.
 * - PIN 입력시 점(dot)으로 표시
 * - 키패드로 숫자 입력 및 백스페이스 지원
 * - PIN 4자리 입력시 콘솔에 출력 후 자동 초기화
 */

const PIN_LENGTH = 4;

/**
 * PIN 입력 화면 컴포넌트
 * - 4자리 숫자 PIN을 입력받고, 숫자 패드와 백스페이스를 제공합니다.
 * - PIN이 4자리에 도달하면 콘솔에 출력 후 자동으로 초기화됩니다.
 * 
 * @component
 * @returns {JSX.Element} PIN 입력 화면 컴포넌트
 */
const Pin = () => {
  const [pin, setPin] = useState('');

  useEffect(() => {
    if (pin.length === PIN_LENGTH) {
      console.log(`PIN entered: ${pin}`);

      // Here you would typically verify the PIN
      // For now, we'll just clear it after a short delay
      /**
       * @goal
       * - 입력된 PIN 번호가 지정된 값(1234)과 매칭되면 `/home` 페이지로 
       * 리다이렉트
       */
      setTimeout(() => setPin(''), 200);
    }
  }, [pin]);

  const handleNumberClick = (num) => {
    (pin.length < PIN_LENGTH) && setPin(pin + num);
  };

  const handleBackspaceClick = () => {
    setPin(pin.slice(0, -1));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Enter PIN</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div className="pin-display-container">
          <div className="pin-dots">
            {Array.from({ length: PIN_LENGTH }).map((_item, i) => (
              <span key={i} className={(i < pin.length) ? 'filled' : ''}></span>
            ))}
          </div>
        </div>
        <IonGrid className="keypad">
          <IonRow>
            {['1', '2', '3'].map(num => (
              <IonCol key={num}>
                <IonButton
                  expand="block"
                  shape="round"
                  fill="outline"
                  onClick={() => handleNumberClick(num)}
                >
                  {num}
                </IonButton>
              </IonCol>
            ))}
          </IonRow>
          <IonRow>
            {['4', '5', '6'].map(num => (
              <IonCol key={num}>
                <IonButton
                  expand="block"
                  shape="round"
                  fill="outline"
                  onClick={() => handleNumberClick(num)}
                >
                  {num}
                </IonButton>
              </IonCol>
            ))}
          </IonRow>
          <IonRow>
            {['7', '8', '9'].map(num => (
              <IonCol key={num}>
                <IonButton
                  expand="block"
                  shape="round"
                  fill="outline"
                  onClick={() => handleNumberClick(num)}
                >
                  {num}
                </IonButton>
              </IonCol>
            ))}
          </IonRow>
          <IonRow>
            <IonCol></IonCol>
            <IonCol>
              <IonButton
                expand="block"
                shape="round"
                fill="outline"
                onClick={() => handleNumberClick('0')}
              >
                0
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                expand="block"
                fill="clear"
                onClick={handleBackspaceClick}
              />
              <IonIcon slot="icon-only" icon={backspaceOutline} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Pin;
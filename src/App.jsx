import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home.jsx';
import Pin from './pages/Pin/Pin.jsx';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/**
 * App 컴포넌트
 * 
 * @fileoverview
 * - Ionic React와 React Router를 결합한 SPA(싱글 페이지 애플리케이션) 엔트리포인트입니다.
 * - 주요 경로: `/home`, `/pin`, `/` (루트는 `/pin`으로 리다이렉트)
 * - Ionic의 핵심 CSS와 커스텀 테마를 포함합니다.
 */

/**
 * Ionic React 환경을 초기화하는 함수입니다.
 * 
 * - Ionic 컴포넌트와 기능이 올바르게 동작하도록 내부 설정을 적용합니다.
 * - 일반적으로 앱의 진입점(최상단)에서 한번만 호출하면 됩니다.
 * - 예를 들어, Ionic의 모달, 토스트, 알림 등 일부 기능이 올바르게 동작하려면 
 * 반드시 필요합니다.
 * 
 * @function
 * @see https://ionicframework.com/docs/react/setup#setupionicreact
 */
setupIonicReact();

/**
 * 앱의 루트 컴포넌트
 * - Ionic 프레임워크의 IonApp, IonReactRouter, IonRouterOutlet을 사용하여 
 * 라우팅 및 레이아웃을 구성합니다.
 * - `/home`, `/pin` 경로에 각각 Home, Pin 페이지를 렌더링합니다.
 * - 루트(/)로 접근시 `/pin`으로 리다이렉트합니다.
 * 
 * @component
 * @returns {JSX.Element} 루트 앱 컴포넌트
 */
const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/pin">
          <Pin />
        </Route>
        <Route exact path="/">
          <Redirect to="/pin" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
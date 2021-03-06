import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {LoginPage} from "../pages/login/login";
import {StudentHomePage} from "../pages/student-home/student-home";
import {TeacherHomePage} from "../pages/teacher-home/teacher-home";
import {StudentCheckInOutPage} from "../pages/student-check-in-out/student-check-in-out";
import { UserPage } from '../pages/user/user';
import { CourseTablePage } from '../pages/course-table/course-table';

import { HttpModule, JsonpModule } from '@angular/http';
import { CheckInStatePage } from '../pages/check-in-state/check-in-state';
import { AboutUsPage } from '../pages/about-us/about-us';
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    StudentHomePage,
    TeacherHomePage,
    StudentCheckInOutPage,
    UserPage,
    CourseTablePage,
    CheckInStatePage,
    AboutUsPage
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    JsonpModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true',
      backButtonText: '返回', // 配置返回按钮的文字  
      backButtonIcon: 'arrow-dropleft-circle' // 配置返回按钮的图标  
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    StudentHomePage,
    TeacherHomePage,
    StudentCheckInOutPage,
    UserPage,
    CourseTablePage,
    CheckInStatePage,
    AboutUsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

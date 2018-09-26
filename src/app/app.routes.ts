// import { DirectoryComponent } from "./directory/directory.component";
// import { HomeComponent } from "./home/directory.component";
// import { provideRouter } from "@angular/router";
//
// const APP_ROUTES = [
//   { path: 'directory', component: DirectoryComponent },
//   { path: '', component: HomeComponent}
// ];
//
// export const APP_ROUTES_PROVIDER = [
//   provideRouter(APP_ROUTES)
// ]
import { Routes, RouterModule } from "@angular/router";
import { DirectoryComponent } from "./directory/directory.component";
import { HomeComponent } from "./home/home.component";


const APP_ROUTES: Routes = [
 { path: 'directory/:ninja', component: DirectoryComponent, },
 { path: '', component: HomeComponent },
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);﻿

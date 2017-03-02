import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PresentationComponent } from './presentation/presentation.component';
import { RecipesFeedComponent } from './recipes-feed/recipes-feed.component';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';
import { RegisterComponent } from './register/register.component';

import 'hammerjs';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: 'novedades', component: NewsComponent},
  { path: 'feed-recetas', component: RecipesFeedComponent },
  { path: 'receta/:id',      component: RecipesDetailsComponent },
  { path: 'registro',      component: RegisterComponent },
  { path: 'login',      component: LoginComponent },
  {
    path: 'presentacion',
    component: PresentationComponent,
    data: { title: 'Cooking Book - La red social de las recetas' }
  },
  { path: '',
    redirectTo: '/presentacion',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PresentationComponent,
    RecipesFeedComponent,
    RecipesDetailsComponent,
    RegisterComponent,
    NewsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

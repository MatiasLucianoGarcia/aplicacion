import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { LinearComponent } from './linear/linear.component';
import { MnistComponent } from './mnist/mnist.component';

const appRoutes: Routes = [
	{ path: '', component: LinearComponent },
	{ path: 'linear', component: LinearComponent },
	{ path: 'mnist', component: MnistComponent }
];

@NgModule({
	declarations: [ AppComponent, LinearComponent, MnistComponent ],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(appRoutes),
		MatSliderModule,
		MatButtonModule,
		MatInputModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

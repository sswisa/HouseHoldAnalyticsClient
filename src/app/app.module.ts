import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import 'hammerjs';
import {
  MatExpansionModule,
  MatFormFieldModule,
  MatStepperModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatDatepickerModule,
  MatButtonToggleModule,
  MatSlideToggleModule
} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WidgetComponent} from './components/widget/widget.component';
import {MainHeaderComponent} from './components/main-header/main-header.component';
import {MainFooterComponent} from './components/main-footer/main-footer.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {MatAccordionComponent} from './components/mat-accordion/mat-accordion.component';
import {MatStepperComponent} from './components/mat-stepper/mat-stepper.component';
import {MomentDateModule} from '@angular/material-moment-adapter';
import {FormInputAutocompleteComponent} from './components/mat-stepper/form-input-autocomplete/form-input-autocomplete.component';
import { FormInputSelectComponent } from './components/mat-stepper/form-input-select/form-input-select.component';
import { FormInputDatepickerComponent } from './components/mat-stepper/form-input-datepicker/form-input-datepicker.component';
import { FormButtonToggleComponent } from './components/mat-stepper/form-button-toggle/form-button-toggle.component';
import { FormSlideToggleComponent } from './components/mat-stepper/form-slide-toggle/form-slide-toggle.component';
import { FormErrorComponent } from './components/mat-stepper/form-error/form-error.component';
import { FormFieldComponent } from './components/mat-stepper/form-field/form-field.component';
import { FormGroupCollapsedComponent } from './components/mat-stepper/form-group-collapsed/form-group-collapsed.component';
import { FormArrayFieldComponent } from './components/mat-stepper/form-array-field/form-array-field.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    MainHeaderComponent,
    MainFooterComponent,
    SidebarComponent,
    MatAccordionComponent,
    MatStepperComponent,
    FormInputAutocompleteComponent,
    FormInputSelectComponent,
    FormInputDatepickerComponent,
    FormButtonToggleComponent,
    FormSlideToggleComponent,
    FormErrorComponent,
    FormFieldComponent,
    FormGroupCollapsedComponent,
    FormArrayFieldComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatStepperModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    HttpClientModule,
    MomentDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

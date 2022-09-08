import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [],
  exports: [
    MatAutocompleteModule,
     MatButtonModule,
     MatCardModule,
     MatListModule,
     MatIconModule,
     MatSidenavModule,
     MatToolbarModule,
     MatGridListModule,
     MatProgressSpinnerModule,
     MatFormFieldModule,
     MatInputModule,
     MatSelectModule
    
  ]

})
export class MaterialModule { }
